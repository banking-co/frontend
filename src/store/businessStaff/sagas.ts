import { all, put, takeLatest } from "redux-saga/effects";

import { businessStaffActions } from "./index";
import { realtimeActions } from "../realtime";
import { usersActions } from "../users";

import { LoadBusinessStaffPayload } from "./interface";
import {
  SocketEvent,
  GetBusinessEmployersEvent,
  GetBusinessEmployersRecruitEvent,
} from "models";

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
    console.error("Loading business staff error:", e);
  }
}

function* loadBusinessStaffRecruitWorker(): unknown {
  try {
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.GetBusinessStaffRecruit,
        data: {},
      }),
    );
  } catch (e) {
    console.error("Loading business staff recruit items error:", e);
  }
}

export function* setBusinessStaffWorker(
  action: GetBusinessEmployersEvent,
): unknown {
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
    console.error("Set business staff error:", e);
  }
}

export function* setBusinessStaffRecruitItemsWorker(
  action: GetBusinessEmployersRecruitEvent,
): unknown {
  if (!action.data?.items || action.data.items.length < 1) return;

  try {
    yield put(businessStaffActions.setBusinessStaffRecruitItems(action.data));
  } catch (e) {
    console.error("Set business staff recruit items error:", e);
  }
}

export function* businessStaffSaga() {
  yield all([
    takeLatest(businessStaffActions.loadBusinessStaff, loadBusinessStaffWorker),
    takeLatest(
      businessStaffActions.loadBusinessStaffRecruit,
      loadBusinessStaffRecruitWorker,
    ),
  ]);
}
