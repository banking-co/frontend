import { all, put, takeLatest } from "redux-saga/effects";
import { businessStaffActions } from "./index";
import { realtimeActions } from "../realtime";
import { LoadBusinessStaffPayload } from "./interface";
import { SocketEvent } from "../models";
import { usersActions } from "../users";
import { GetBusinessEmployersEvent } from "../realtime/interface";

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

export function* setBusinessStaffWorker(
  action: GetBusinessEmployersEvent,
): unknown {
  console.log(action);
  if (!action.data?.bankId) return;

  try {
    yield put(
      businessStaffActions.setBusinessesStaffs({
        bankId: action.data.bankId,
        bankStaff: action.data.bankStaff,
      }),
    );
    yield put(usersActions.setUsers(action.data.users));
  } catch (e) {
    console.error("Loading primary business error:", e);
  }
}

export function* businessStaffSaga() {
  yield all([
    takeLatest(businessStaffActions.loadBusinessStaff, loadBusinessStaffWorker),
  ]);
}
