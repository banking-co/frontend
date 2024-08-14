import type {
  BalanceModel,
  BusinessModel,
  SocketEvent,
  UserModel,
} from "store/models";

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

export interface GetBusinessEvent {
  event: SocketEvent.GetBusiness;
  data: {
    bank?: BusinessModel;
  };
}

export interface GetPrimaryBusinessEvent {
  event: SocketEvent.GetPrimaryBusiness;
  data: {
    bank?: BusinessModel;
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
  | PongEvent;
