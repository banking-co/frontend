import { all, put, takeLatest } from "redux-saga/effects";
import { businessActions } from "./index";
import { realtimeActions } from "../realtime";
import { LoadPrimaryBusinessPayload } from "./interface";
import { SocketEvent, GetBusinessEvent } from "models";

function* loadPrimaryBusinessWorker(
  action: LoadPrimaryBusinessPayload,
): unknown {
  if (!action.payload?.userId) return;

  try {
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.GetBusiness,
        data: {
          type: "primary",
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

    if (action.data.type === "primary") {
      yield put(businessActions.setPrimaryBusiness(action.data.bankId));
      yield put(businessActions.stopLoadingPrimaryBusiness());
    }

    yield put(businessActions.setBusiness(action.data));
  } catch (e) {
    console.error("Set business error:", e);
  }
}

export function* businessSaga() {
  yield all([
    takeLatest(businessActions.loadPrimaryBusiness, loadPrimaryBusinessWorker),
  ]);
}
