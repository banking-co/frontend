import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { END, eventChannel } from "redux-saga";
import { apiUrl } from "api";

import { realtimeActions } from "./index";

import type { PayloadAction } from "@reduxjs/toolkit";
import { SendMessagePayload, WebSocketListenerPayload } from "./interface";
import { SocketEvent } from "../models";

function createWebSocketListener(socket: WebSocket) {
  return eventChannel((emitter) => {
    socket.onopen = () => {
      console.log("WebSocket connection opened");
      emitter({ event: SocketEvent.ConnWebSocket });
    };
    socket.onmessage = (data) => {
      console.log(data);
      emitter(data);
    };
    socket.onclose = () => emitter(END);
    socket.onerror = () => emitter(END);
    return () => socket.close();
  });
}

function* connectSocketWorker(): any {
  try {
    const serviceWebSocket = new WebSocket(apiUrl);
    const socket = yield call(createWebSocketListener, serviceWebSocket);

    yield fork(sendMessageSocketWorker, socket);

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
  const msg = action.payload;

  try {
    if (msg?.event) {
      switch (msg.event) {
        case SocketEvent.ConnWebSocket:
          yield put(
            realtimeActions.sendMessage({
              event: SocketEvent.StartApp,
              data: null,
            }),
          );
          break;
        case SocketEvent.StartApp:
          yield put(realtimeActions.setConnectionStatus(true));
          console.log("start_app");
          break;
      }
    }
  } catch (e) {
    console.error("WebSocket listener error:", e);
  }
}

function* sendMessageSocketWorker(
  action: PayloadAction<SendMessagePayload>,
): any {
  try {
    console.log(action.payload);
  } catch (e) {
    console.error("WebSocket sending error:", e);
  }
}

function* disconnectSocketWorker() {
  try {
    // socket.close(401);
    yield put(realtimeActions.setConnectionStatus(false));
  } catch (e) {
    console.error("WebSocket disconnect error:", e);
  }
}

export function* realtimeSaga() {
  yield all([
    takeLatest(realtimeActions.connection, connectSocketWorker),
    takeLatest(realtimeActions.listenMessage, listenSocketMessageWorker),
    takeLatest(realtimeActions.sendMessage, sendMessageSocketWorker),
    takeLatest(realtimeActions.disconnect, disconnectSocketWorker),
  ]);
}
