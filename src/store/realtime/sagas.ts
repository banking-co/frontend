import { all, call, put, takeLatest } from "redux-saga/effects";

import { realtimeActions } from "./index";
import { usersActions } from "../users";
import { balancesActions } from "../balances";

import { setBusinessWorker, setPrimaryBusinessWorker } from "../business/sagas";
import { appErrorWorker } from "../app/sagas";
import { setBalancesWorker } from "../balances/sagas";
import {
  setBusinessStaffRecruitItemsWorker,
  setBusinessStaffWorker,
} from "../businessStaff/sagas";

import { SocketEvent, StartAppEvent, WebSocketListenerPayload } from "models";
import type { PayloadAction } from "@reduxjs/toolkit";

function* startAppWorker(action: StartAppEvent) {
  try {
    if (action.data.bans && action.data.bans.length >= 1) return;
    yield put(realtimeActions.setLoggedIn(true));
    yield put(realtimeActions.setConnectionStatus(true));
    yield put(usersActions.setUser(action.data.user));
    yield put(usersActions.setPrimaryUser(action.data.user?.id || null));
    yield put(balancesActions.setBalances(action.data.balances));
    yield put(balancesActions.setBalancesUpdateAt(Date.now().valueOf()));
  } catch (e) {
    console.error("Start app set error:", e);
  }
}

function* listenSocketMessageWorker(
  ac: PayloadAction<WebSocketListenerPayload>,
) {
  const { payload } = ac;
  if (!payload) return;

  const { event } = payload;
  if (!event) return;

  try {
    switch (event) {
      case SocketEvent.Pong:
        yield put(realtimeActions.setConnectionStatus(true));
        break;

      case SocketEvent.Error:
        yield call(appErrorWorker, payload);
        break;

      case SocketEvent.StartApp:
        yield call(startAppWorker, payload);
        break;

      case SocketEvent.GetBalances:
        yield call(setBalancesWorker, payload);
        break;

      case SocketEvent.GetBusiness:
        yield call(setBusinessWorker, payload);
        break;

      case SocketEvent.GetPrimaryBusiness:
        yield call(setPrimaryBusinessWorker, payload);
        break;

      case SocketEvent.GetBusinessStaff:
        yield call(setBusinessStaffWorker, payload);
        break;

      case SocketEvent.GetBusinessStaffRecruit:
        yield call(setBusinessStaffRecruitItemsWorker, payload);
        break;

      default:
        break;
    }
  } catch (e) {
    console.error("WebSocket listener error:", e);
  }
}

export function* realtimeSaga() {
  yield all([
    takeLatest(realtimeActions.listenMessage, listenSocketMessageWorker),
  ]);
}
