import { all, put } from "redux-saga/effects";

import { usersActions } from "./index";
import { realtimeActions } from "../realtime";
import { balancesActions } from "../balances";

import { SocketEvent } from "../models";
import type { StartAppEvent } from "../realtime/websocket.interface";

export function* startAppWorker(action: StartAppEvent) {
  try {
    if (action.data.bans && action.data.bans.length >= 1) return;
    yield put(realtimeActions.setLoggedIn(true));
    yield put(usersActions.setUser(action.data.user));
    yield put(usersActions.setPrimaryUser(action.data.user));
    yield put(balancesActions.setBalances(action.data.balances));
    yield put(balancesActions.setBalancesUpdateAt(Date.now().valueOf()));
  } catch (e) {
    console.error("Start app set error:", e);
  }
}

export function* connSocketWorker() {
  try {
    yield put(realtimeActions.setConnectionStatus(true));
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.StartApp,
        data: null,
      }),
    );
  } catch (e) {
    console.error("Connection socket error:", e);
  }
}

export function* discSocketWorker() {
  try {
    yield put(realtimeActions.setConnectionStatus(false));
    yield put(realtimeActions.setLoggedIn(false));
  } catch (e) {
    console.error("Disconnect socket error:", e);
  }
}

export function* pingSocketWorker() {
  try {
    yield put(
      realtimeActions.sendMessage({
        event: SocketEvent.Ping,
      }),
    );
  } catch (e) {
    console.error("Disconnect socket error:", e);
  }
}

export function* usersSaga() {
  yield all([]);
}
