import { END, eventChannel, EventChannel } from "redux-saga";
import {
  all,
  put,
  take,
  race,
  delay,
  call,
  takeEvery,
} from "redux-saga/effects";

import { usersActions } from "./index";
import { realtimeActions } from "../realtime";
import { balancesActions } from "../balances";

import { connectSocketWorker } from "../realtime/sagas";

import { SocketEvent } from "../models";
import type { StartAppEvent } from "../realtime/websocket.interface";

export function* startAppWorker(action: StartAppEvent) {
  try {
    if (action.data.bans && action.data.bans.length >= 1) return;
    yield put(realtimeActions.setLoggedIn(true));
    yield put(usersActions.setUser(action.data.user));
    yield put(usersActions.setPrimaryUser(action.data.user));
    yield put(balancesActions.setBalances(action.data.balances));
    yield put(balancesActions.setBalancesUpdateAt(Date.now().valueOf()));
  } catch (e) {
    console.error("Start app set error:", e);
  }
}

export function* connSocketWorker() {
  try {
    yield put(realtimeActions.setConnectionStatus(true));
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.StartApp,
        data: null,
      }),
    );
  } catch (e) {
    console.error("Connection socket error:", e);
  }
}

export function* discSocketWorker() {
  try {
    yield put(realtimeActions.setConnectionStatus(false));
    yield put(realtimeActions.setLoggedIn(false));
  } catch (e) {
    console.error("Disconnect socket error:", e);
  }
}

function createPingChannel() {
  return eventChannel((emitter) => {
    const intervalId = setInterval(() => {
      emitter("PING");
    }, 10000);

    return () => {
      clearInterval(intervalId);
      emitter(END);
    };
  });
}

function* reconnectSocketWorker(socket: WebSocket) {
  try {
    yield delay(5000);
    yield connectSocketWorker();
  } catch (e) {
    console.error("Reconnect error:", e);
  }
}

export function* pingSocketWorker(
  socketChannel: EventChannel<WebSocket>,
): unknown {
  const pingChannel = yield call(createPingChannel);

  yield takeEvery(pingChannel, function* (ping) {
    const { messageReceived } = yield race({
      messageReceived: take(socketChannel),
      timeout: delay(10000),
    });

    if (!messageReceived) {
      console.log("pong");
      yield put(realtimeActions.sendMessage({ event: SocketEvent.Ping }));
    } else {
      console.log("err");
    }
  });
}

export function* usersSaga() {
  yield all([]);
}
