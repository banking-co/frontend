import { all, put } from "redux-saga/effects";
import { balancesActions } from "./index";
import { GetBalancesEvent } from "../realtime/websocket.interface";

export function* setBalancesWorker(action: GetBalancesEvent) {
  const date = new Date(Date.now()).getTime();
  if (!action.data.balances || action.data.balances.length < 1) {
    return;
  }

  try {
    yield put(balancesActions.setBalancesUpdateAt(date));
    yield put(balancesActions.setBalances(action.data.balances));
  } catch (e) {
    console.error("Connection socket error:", e);
  }
}

export function* balancesSaga() {
  yield all([]);
}
