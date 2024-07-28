import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { END, eventChannel } from "redux-saga";
import { apiUrl } from "api";

import { realtimeActions } from "./index";

import type { PayloadAction } from "@reduxjs/toolkit";
import { SendMessagePayload, WebSocketListenerPayload } from "./interface";
import { SocketEvent } from "../models";
import { vkSign } from "utils";
import * as process from "node:process";

function createWebSocketListener(socket: WebSocket) {
  return eventChannel((emitter) => {
    socket.onopen = () => emitter({ event: SocketEvent.ConnWebSocket });
    socket.onmessage = ({ data }) => {
      emitter(data);
    };
    socket.onclose = () => emitter(END);
    socket.onerror = () => emitter(END);
    return () => socket.close();
  });
}

function* connectSocketWorker(): any {
  try {
    const localStorageSign = localStorage.getItem("app-dev-sign");
    const sign = localStorageSign ? localStorageSign : vkSign();
    const serviceWebSocket = new WebSocket(`${apiUrl}${sign}`);
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
        case SocketEvent.ConnWebSocket:
          yield put(
            realtimeActions.sendMessage({
              event: SocketEvent.StartApp,
              data: null,
            }),
          );
          yield put(realtimeActions.setConnectionStatus(true));
          break;
        case SocketEvent.StartApp:
          yield put(realtimeActions.setLoggedIn(data.isLogged));
          break;
      }
    }
  } catch (e) {
    console.error("WebSocket listener error:", e);
  }
}

function* sendMessageSocketWorker(socket: any): any {
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
