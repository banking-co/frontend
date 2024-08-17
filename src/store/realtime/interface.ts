import { PayloadAction } from "@reduxjs/toolkit";
import type {
  BalanceModel,
  BusinessModel,
  UserModel,
  SocketEvent,
  BusinessEmployerRoleModel,
  BusinessEmployeeModel,
} from "store/models";

export interface RealtimeState {
  isConnected: boolean;
  isLoggedIn: boolean;
}

export interface SendMessagePayload {
  event: SocketEvent;
  data?: unknown;
}

export interface ConnWebSocketEvent {
  event: SocketEvent.ConnWebSocket;
  data: null | undefined;
}

export interface DiscWebSocketEvent {
  event: SocketEvent.DiscWebSocket;
  data?: Event;
}

export interface ErrorEvent {
  event: SocketEvent.Error;
  data: {
    msg: string;
    code: number;
  };
}

export interface PongEvent {
  event: SocketEvent.Pong;
  data: {};
}

export interface StartAppEvent {
  event: SocketEvent.StartApp;
  data: {
    bans?: Array<unknown>;
    user?: UserModel;
    balances?: Array<BalanceModel>;
  };
}

export interface GetBalancesEvent {
  event: SocketEvent.GetBalances;
  data: {
    balances?: Array<BalanceModel>;
  };
}

interface DataGetBusinessModel {
  bankId: number;
  bank: BusinessModel;
  bankRoles: BusinessEmployerRoleModel[];
}

export interface GetBusinessEvent {
  event: SocketEvent.GetBusiness;
  data: DataGetBusinessModel;
}

export interface GetPrimaryBusinessEvent {
  event: SocketEvent.GetPrimaryBusiness;
  data: DataGetBusinessModel;
}

export interface GetBusinessEmployersEvent {
  event: SocketEvent.GetBusinessStaff;
  data: {
    bankId: number;
    bankStaff: Array<BusinessEmployeeModel>;
    users: Array<UserModel>;
  };
}

export type WebSocketListenerPayload =
  | ConnWebSocketEvent
  | StartAppEvent
  | DiscWebSocketEvent
  | GetBusinessEvent
  | GetPrimaryBusinessEvent
  | GetBalancesEvent
  | ErrorEvent
  | PongEvent
  | GetBusinessEmployersEvent;

export type SetConnectionStatusPayload = PayloadAction<boolean>;
