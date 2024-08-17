import { combineReducers } from "@reduxjs/toolkit";

import { reducer as app } from "./app";
import { reducer as realtime } from "./realtime";

import { reducer as users } from "./users";

import { reducer as balances } from "./balances";

import { reducer as bonus } from "./bonus";

import { reducer as business } from "./business";
import { reducer as businessStaff } from "./businessStaff";

export const rootReducer = combineReducers({
  app,
  realtime,
  users,
  balances,
  business,
  bonus,
  businessStaff,
});

export type RootState = ReturnType<typeof rootReducer>;
