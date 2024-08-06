import { combineReducers } from "@reduxjs/toolkit";

import { reducer as app } from "./app";
import { reducer as realtime } from "./realtime";
import { reducer as users } from "./users";
import { reducer as balances } from "./balances";
import { reducer as business } from "./business";

export const rootReducer = combineReducers({
  app,
  realtime,
  users,
  balances,
  business,
});

export type RootState = ReturnType<typeof rootReducer>;
