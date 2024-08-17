import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import {
  RealtimeState,
  SendMessagePayload,
  SetConnectionStatusPayload,
  WebSocketListenerPayload,
} from "./interface";

export const initialState: RealtimeState = {
  isConnected: false,
  isLoggedIn: false,
};

export const { reducer, actions } = createSlice({
  name: "realtime",
  initialState,
  reducers: {
    connection() {},

    listenMessage(_st, _ac: PayloadAction<WebSocketListenerPayload>) {},

    sendMessage(_st, _ac: PayloadAction<SendMessagePayload>) {},

    disconnect(st) {
      st.isConnected = false;
      st.isLoggedIn = false;
    },

    setConnectionStatus(st, ac: SetConnectionStatusPayload) {
      st.isConnected = ac.payload;
    },
    setLoggedIn(st, ac) {
      st.isLoggedIn = ac.payload;
    },
  },
});

export { reducer as realtimeReducer, actions as realtimeActions };
export const realtimeSelector = (state: RootState) => state.realtime;
