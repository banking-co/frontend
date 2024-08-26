import { all, put, takeLatest } from "redux-saga/effects";
import { LoadUserPayload } from "./interface";
import { realtimeActions } from "../realtime";
import { GetUserEvent, SocketEvent } from "models";
import { usersActions } from "./index";
import { businessActions } from "../business";
import { workActions } from "../work";

function* loadUser(action: LoadUserPayload) {
  if (!action.payload?.uid) return;

  try {
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.GetUser,
        data: {
          uid: action.payload.uid,
        },
      }),
    );
  } catch (e) {
    console.error("Loading primary business error:", e);
  }
}

export function* setUser(action: GetUserEvent) {
  try {
    yield put(usersActions.setUser(action.data.user));
    yield put(
      businessActions.setBusiness({
        bank: action.data.bank,
        bankId: action.data.bank.id,
        bankRoles: action.data.bankRoles,
      }),
    );
    // yield put(workActions.setWorkUser({
    //   uid: ,
    //   work: ,
    // }))
  } catch (e) {
    console.error("Loading primary business error:", e);
  }
}

export function* usersSaga() {
  yield all([takeLatest(usersActions.loadUser, loadUser)]);
}
