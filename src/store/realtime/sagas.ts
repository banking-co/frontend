import { all, call, put, takeLatest } from "redux-saga/effects";

import { WebSocket } from "vite";

import { API_SOCKET_URL } from "constants";

import { realtimeActions } from "./index";

let socket: WebSocket | null = null;

function* connectSocketWorker(): any {
  try {
    socket = new WebSocket(API_SOCKET_URL);
  } catch (e) {
    console.error(e);
  }
}

function* sendMessageSocketWorker(): any {
  try {
  } catch (e) {
    console.error(e);
  }
}

function* disconnectSocketWorker(): any {
  try {
  } catch (e) {
    console.error(e);
  }
}

export function* realtimeSaga() {
  yield all([
    takeLatest(realtimeActions.connection, connectSocketWorker),
    takeLatest(realtimeActions.sendMessage, sendMessageSocketWorker),
    takeLatest(realtimeActions.disconnect, disconnectSocketWorker),
  ]);
}
