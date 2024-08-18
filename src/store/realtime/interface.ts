import { PayloadAction } from "@reduxjs/toolkit";

export interface RealtimeState {
  isConnected: boolean;
  isLoggedIn: boolean;
}

export type SetConnectionStatusPayload = PayloadAction<boolean>;
