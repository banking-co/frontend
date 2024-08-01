import { PayloadAction } from "@reduxjs/toolkit";
import { SocketEvent } from "store/models";

export interface RealtimeState {
  isConnected: boolean;
  isLoggedIn: boolean;
}

export interface SendMessagePayload {
  event: SocketEvent;
  data: unknown;
}

export type SetConnectionStatusPayload = PayloadAction<boolean>;
