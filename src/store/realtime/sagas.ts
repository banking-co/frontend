import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { apiUrl } from "api";

import { realtimeActions } from "./index";

import type { PayloadAction } from "@reduxjs/toolkit";
import { SendMessagePayload } from "./realtime.interface";
import { StartAppEvent, WebSocketListenerPayload } from "./websocket.interface";
import { SocketEvent } from "../models";
import { vkSign } from "utils";
import { usersActions } from "../users";
import { balancesActions } from "../balances";
import { setBusinessWorker, setPrimaryBusinessWorker } from "../business/sagas";
import { appErrorWorker } from "../app/sagas";

function createWebSocketListener(socket: WebSocket) {
  return eventChannel((emitter) => {
    socket.onopen = () => emitter({ event: SocketEvent.ConnWebSocket });
    socket.onmessage = ({ data }) => {
      emitter(data);
    };
    socket.onclose = () => emitter({ event: SocketEvent.DiscWebSocket });
    socket.onerror = (e) =>
      emitter({ event: SocketEvent.DiscWebSocket, data: e });

    return () => socket.close();
  });
}

function* startAppWorker(action: StartAppEvent) {
  try {
    if (action.data.bans && action.data.bans.length >= 1) return;
    yield put(realtimeActions.setLoggedIn(true));
    yield put(usersActions.setUser(action.data.user));
    yield put(usersActions.setPrimaryUser(action.data.user));
    yield put(balancesActions.setBalances(action.data.balances));
  } catch (e) {
    console.error("Start app set error:", e);
  }
}

function* connSocketWorker() {
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

function* discSocketWorker() {
  try {
    yield put(realtimeActions.setConnectionStatus(false));
    yield put(realtimeActions.setLoggedIn(false));
  } catch (e) {
    console.error("Disconnect socket error:", e);
  }
}

function* connectSocketWorker(): unknown {
  try {
    const localStorageSign = localStorage.getItem("app-dev-sign");
    const sign = localStorageSign || vkSign();

    if (!sign || sign?.includes("sign=undefined")) return;

    const serviceWebSocket = new WebSocket(`${apiUrl}?${sign}`);
    const socket = yield call(createWebSocketListener, serviceWebSocket);

    yield fork(sendMessageSocketWorker, serviceWebSocket);
    yield fork(disconnectSocketWorker, serviceWebSocket);

    while (true) {
      const payload: object | string = yield take(socket);
      yield put(
        realtimeActions.listenMessage(
          typeof payload === "string" ? JSON.parse(payload) : payload,
        ),
      );
    }
  } catch (e) {
    console.error("WebSocket connection error:", e);
  }
}

function* listenSocketMessageWorker(
  action: PayloadAction<undefined | WebSocketListenerPayload>,
) {
  if (!action.payload) return;

  const { event, data } = action.payload;

  try {
    if (event) {
      switch (event) {
        case SocketEvent.Error:
          yield call(appErrorWorker, { event, data });
          break;
        case SocketEvent.StartApp:
          yield call(startAppWorker, { event, data });
          break;
        case SocketEvent.GetBusiness:
          yield call(setBusinessWorker, { event, data });
          break;
        case SocketEvent.GetPrimaryBusiness:
          yield call(setPrimaryBusinessWorker, { event, data });
          break;
        case SocketEvent.ConnWebSocket:
          yield call(connSocketWorker);
          break;
        case SocketEvent.DiscWebSocket:
        default:
          yield call(discSocketWorker);
          break;
      }
    }
  } catch (e) {
    console.error("WebSocket listener error:", e);
  }
}

function* sendMessageSocketWorker(socket: WebSocket): unknown {
  yield takeLatest(
    realtimeActions.sendMessage,
    function* (action: PayloadAction<SendMessagePayload>) {
      try {
        socket.send(JSON.stringify(action.payload));
      } catch (e) {
        console.error("WebSocket sending error:", e);
      }
    },
  );
}

function* disconnectSocketWorker(socket: WebSocket) {
  yield takeLatest(realtimeActions.disconnect, function* () {
    try {
      socket.close(401);
    } catch (e) {
      console.error("WebSocket disconnect error:", e);
    }
  });
}

export function* realtimeSaga() {
  yield all([
    takeLatest(realtimeActions.connection, connectSocketWorker),
    takeLatest(realtimeActions.listenMessage, listenSocketMessageWorker),
  ]);
}
