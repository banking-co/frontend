import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { apiUrl } from "api";
import { vkSign } from "utils";

import { realtimeActions } from "./index";

import {
  discSocketWorker,
  connSocketWorker,
  startAppWorker,
  pingSocketWorker,
} from "../users/sagas";
import { setBusinessWorker, setPrimaryBusinessWorker } from "../business/sagas";
import { appErrorWorker } from "../app/sagas";
import { setBalancesWorker } from "../balances/sagas";

import { SocketEvent } from "../models";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { SendMessagePayload } from "./realtime.interface";
import type { WebSocketListenerPayload } from "./websocket.interface";

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

function* messageEventsWorker(socketChannel: EventChannel<WebSocket>) {
  while (true) {
    const socket: object | string = yield take(socketChannel);
    if (!socket) continue;

    let { event, data } =
      typeof socket === "string"
        ? JSON.parse(socket)
        : (socket as WebSocketListenerPayload);

    if (!event) continue;
    console.log(event, data);
    try {
      if (event) {
        switch (event) {
          case SocketEvent.Error:
            yield call(appErrorWorker, { event, data });
            break;
          case SocketEvent.StartApp:
            yield call(startAppWorker, { event, data });
            break;
          case SocketEvent.GetBalances:
            yield call(setBalancesWorker, { event, data });
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
          case SocketEvent.Pong:
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

export function* connectSocketWorker(): unknown {
  try {
    const localStorageSign = localStorage.getItem("app-dev-sign");
    const sign = localStorageSign || vkSign();

    if (!sign || sign?.includes("sign=undefined")) return;

    const serviceWebSocket: WebSocket = new WebSocket(`${apiUrl}?${sign}`);
    const socket: EventChannel<WebSocket> = yield call(
      createWebSocketListener,
      serviceWebSocket,
    );

    yield all([
      fork(messageEventsWorker, socket),
      fork(sendMessageSocketWorker, serviceWebSocket),
      fork(disconnectSocketWorker, serviceWebSocket),
    ]);

    yield fork(pingSocketWorker, socket);
  } catch (e) {
    console.error("WebSocket connection error:", e);
  }
}

export function* realtimeSaga() {
  yield all([takeLatest(realtimeActions.connection, connectSocketWorker)]);
}
