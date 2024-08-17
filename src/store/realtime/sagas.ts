import { all, call, put, takeLatest } from "redux-saga/effects";

import { realtimeActions } from "./index";

import { setBusinessWorker, setPrimaryBusinessWorker } from "../business/sagas";
import { appErrorWorker } from "../app/sagas";
import { setBalancesWorker } from "../balances/sagas";

import { SocketEvent } from "../models";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { StartAppEvent, WebSocketListenerPayload } from "./interface";
import { usersActions } from "../users";
import { balancesActions } from "../balances";

function* startAppWorker(action: StartAppEvent) {
  try {
    if (action.data.bans && action.data.bans.length >= 1) return;
    yield put(realtimeActions.setLoggedIn(true));
    yield put(realtimeActions.setConnectionStatus(true));
    yield put(usersActions.setUser(action.data.user));
    yield put(usersActions.setPrimaryUser(action.data.user));
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

  const { event, data } = payload;
  if (!event) return;

  try {
    switch (event) {
      case SocketEvent.Pong:
        yield put(realtimeActions.setConnectionStatus(true));
        break;

      case SocketEvent.Error:
        yield call(appErrorWorker, { event, data });
        break;

      case SocketEvent.StartApp:
        yield call(startAppWorker, { event, data });
        break;

      case SocketEvent.GetBalances:
        yield call(setBalancesWorker, { event, data });
        break;

      case SocketEvent.GetBusiness:
        yield call(setBusinessWorker, { event, data });
        break;

      case SocketEvent.GetPrimaryBusiness:
        yield call(setPrimaryBusinessWorker, { event, data });
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
