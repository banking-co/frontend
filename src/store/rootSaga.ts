import { all } from "redux-saga/effects";

import { appSaga } from "./app/sagas";
import { realtimeSaga } from "./realtime/sagas";
import { usersSaga } from "./users/sagas";
import { businessSaga } from "./business/sagas";

export function* rootSaga() {
  yield all([appSaga(), realtimeSaga(), usersSaga(), businessSaga()]);
}
