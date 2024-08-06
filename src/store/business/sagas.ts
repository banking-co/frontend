import { all, put, takeLatest } from "redux-saga/effects";
import { businessActions } from "./index";
import { realtimeActions } from "../realtime";
import { LoadPrimaryBusinessPayload } from "./interface";
import { SocketEvent } from "../models";
import {
  GetBusinessEvent,
  GetPrimaryBusinessEvent,
} from "../realtime/websocket.interface";

function* loadPrimaryBusinessWorker(
  action: LoadPrimaryBusinessPayload,
): unknown {
  if (!action.payload?.userId) return;

  try {
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.GetPrimaryBusiness,
        data: {
          userId: action.payload.userId,
        },
      }),
    );
  } catch (e) {
    console.error("Loading primary business error:", e);
  }
}

export function* setBusinessWorker(action: GetBusinessEvent): unknown {
  try {
    if (!action.data?.bank) return;
    yield put(businessActions.setBusiness(action.data.bank));
  } catch (e) {
    console.error("Set business error:", e);
  }
}

export function* setPrimaryBusinessWorker(
  action: GetPrimaryBusinessEvent,
): unknown {
  try {
    if (!action.data?.bank) return;
    yield put(businessActions.setBusiness(action.data.bank));
    yield put(businessActions.setPrimaryBusiness(action.data.bank));
    yield put(businessActions.stopLoadingPrimaryBusiness());
  } catch (e) {
    console.error("Set primary business error:", e);
  }
}

export function* businessSaga() {
  yield all([
    takeLatest(businessActions.loadPrimaryBusiness, loadPrimaryBusinessWorker),
  ]);
}
