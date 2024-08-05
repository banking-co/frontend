import { all } from "redux-saga/effects";

import { realtimeSaga } from "./realtime/sagas";
import { usersSaga } from "./users/sagas";

export function* rootSaga() {
  yield all([realtimeSaga(), usersSaga()]);
}
