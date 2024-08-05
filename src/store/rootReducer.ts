import { combineReducers } from "@reduxjs/toolkit";

import { reducer as app } from "./app";
import { reducer as realtime } from "./realtime";
import { reducer as users } from "./users";
import { reducer as balances } from "./balances";

export const rootReducer = combineReducers({
  app,
  realtime,
  users,
  balances,
});

export type RootState = ReturnType<typeof rootReducer>;
