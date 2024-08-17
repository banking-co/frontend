import { all, put, takeLatest } from "redux-saga/effects";
import { businessStaffActions } from "./index";
import { realtimeActions } from "../realtime";
import { LoadBusinessStaffPayload } from "./interface";
import { SocketEvent } from "../models";

function* loadBusinessStaffWorker(action: LoadBusinessStaffPayload): unknown {
  if (!action.payload?.businessId) return;

  try {
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.GetBusinessStaff,
        data: {
          businessId: action.payload.businessId,
        },
      }),
    );
  } catch (e) {
    console.error("Loading primary business error:", e);
  }
}

export function* businessStaffSaga() {
  yield all([
    takeLatest(businessStaffActions.loadBusinessStaff, loadBusinessStaffWorker),
  ]);
}
