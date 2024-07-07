import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";

export const initialState = {};

export const { reducer, actions } = createSlice({
  name: "realtime",
  initialState,
  reducers: {
    connection() {},
    sendMessage(_s, _a) {},
    disconnect() {},
  },
});

export { reducer as realtimeReducer, actions as realtimeActions };
export const realtimeSelector = (state: RootState) => state.app;
