import {
  UserModel,
  BalanceModel,
  BusinessEmployeeModel,
  BusinessEmployerRoleModel,
  BusinessModel,
  ItemModel,
} from "models";

export enum SocketEvent {
  Open = "open",
  Close = "close",
  Message = "message",

  ConnWebSocket = "conn_websocket",
  DiscWebSocket = "disc_websocket",
  StartApp = "start_app",

  Ping = "ping",
  Pong = "pong",

  GetBalances = "bal_get",

  GetBusiness = "get_bus",
  GetPrimaryBusiness = "get_pr_bus",
  GetBusinessStaff = "get_st_bus",
  GetBusinessStaffRecruit = "get_st_r_bus",
  BuyBusinessStaffRecruit = "buy_st_r_bus",

  Error = "error",
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

export interface GetBusinessEmployersRecruitEvent {
  event: SocketEvent.GetBusinessStaffRecruit;
  data: {
    items: Array<ItemModel>;
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
  | GetBusinessEmployersEvent
  | GetBusinessEmployersRecruitEvent;
