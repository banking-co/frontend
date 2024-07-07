import { all } from "redux-saga/effects";

import { realtimeSaga } from "./realtime/sagas";

export function* rootSaga() {
  yield all([realtimeSaga()]);
}
