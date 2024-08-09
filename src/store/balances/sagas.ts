import { all, put } from "redux-saga/effects";
import { balancesActions } from "./index";
import { GetBalancesEvent } from "../realtime/websocket.interface";

export function* setBalancesWorker(action: GetBalancesEvent) {
  if (!action.data.balances || action.data.balances.length < 1) {
    return;
  }

  try {
    yield put(balancesActions.setBalances(action.data.balances));
    yield put(balancesActions.setBalancesUpdateAt(Date.now()));
  } catch (e) {
    console.error("Connection socket error:", e);
  }
}

export function* balancesSaga() {
  yield all([]);
}
