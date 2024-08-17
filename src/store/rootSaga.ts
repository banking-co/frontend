import { all } from "redux-saga/effects";

import { appSaga } from "./app/sagas";
import { realtimeSaga } from "./realtime/sagas";
import { usersSaga } from "./users/sagas";
import { businessSaga } from "./business/sagas";
import { bonusSaga } from "./bonus/sagas";
import { balancesSaga } from "./balances/sagas";
import { businessStaffSaga } from "./businessStaff/sagas";

export function* rootSaga() {
  yield all([
    appSaga(),
    realtimeSaga(),
    usersSaga(),
    businessSaga(),
    bonusSaga(),
    balancesSaga(),
    businessStaffSaga(),
  ]);
}
