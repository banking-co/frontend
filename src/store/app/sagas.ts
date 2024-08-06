import { all } from "redux-saga/effects";
import { ErrorEvent } from "../realtime/websocket.interface";

export function* appErrorWorker(action: ErrorEvent) {
  try {
    console.error(action.data.msg, action.data.code);
  } catch (e) {
    console.error(e);
  }
}

export function* appSaga() {
  yield all([]);
}
