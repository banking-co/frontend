import { combineReducers } from "@reduxjs/toolkit";

import { reducer as app } from "./app";

export const rootReducer = combineReducers({
  app,
});

export type RootState = ReturnType<typeof rootReducer>;
