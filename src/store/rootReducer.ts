import { combineReducers } from "@reduxjs/toolkit";

import { reducer as app } from "./app";
import { reducer as realtime } from "./realtime";

export const rootReducer = combineReducers({
  app,
  realtime,
});

export type RootState = ReturnType<typeof rootReducer>;
