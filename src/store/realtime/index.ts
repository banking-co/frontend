import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import {
  RealtimeState,
  SendMessagePayload,
  SetConnectionStatusPayload,
} from "./interface";

export const initialState: RealtimeState = {
  isConnected: false,
};

export const { reducer, actions } = createSlice({
  name: "realtime",
  initialState,
  reducers: {
    connection(st) {
      st.isConnected = false;
    },

    listenMessage(_st, _ac) {},
    sendMessage(_st, _ac: PayloadAction<SendMessagePayload>) {},

    disconnect(st) {
      st.isConnected = false;
    },

    setConnectionStatus(_st, _ac: SetConnectionStatusPayload) {},
  },
});

export { reducer as realtimeReducer, actions as realtimeActions };
export const realtimeSelector = (state: RootState) => state.realtime;
