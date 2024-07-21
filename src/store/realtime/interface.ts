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

export interface ConnWebSocketEvent {
  event: SocketEvent.ConnWebSocket;
  data: null | undefined
}

export interface StartAppEvent {
  event: SocketEvent.StartApp;
  data: {
    isLogged: boolean
    user: unknown;
  }
}

export type WebSocketListenerPayload = ConnWebSocketEvent | StartAppEvent

export type SetConnectionStatusPayload = PayloadAction<boolean>;
