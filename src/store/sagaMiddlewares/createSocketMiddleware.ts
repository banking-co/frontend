import { Socket } from "api";

import { realtimeActions } from "../realtime";

import { SocketEvent } from "../models";
import type { SendMessagePayload } from "../realtime/interface";
import type {
  Middleware,
  PayloadAction,
  UnknownAction,
} from "@reduxjs/toolkit";

const createSocketMiddleware =
  (socket: Socket): Middleware =>
  (params) =>
  (next) =>
  (action) => {
    const { dispatch } = params;
    const { type } = action as UnknownAction;

    switch (type) {
      case realtimeActions.connection.type:
        socket.connect();

        socket.on(SocketEvent.Open, () => {
          dispatch(realtimeActions.setConnectionStatus(true));
          dispatch(
            realtimeActions.sendMessage({
              event: SocketEvent.StartApp,
            }),
          );
        });

        socket.on(SocketEvent.Close, () => {
          dispatch(realtimeActions.disconnect());
        });

        socket.on(SocketEvent.Message, (e) => {
          const messageEvent = e as MessageEvent;
          const message =
            messageEvent.data && messageEvent.data.length >= 1
              ? JSON.parse(messageEvent.data)
              : undefined;

          if (typeof message !== "object") return;

          const { event, data } = message;
          dispatch(
            realtimeActions.listenMessage({
              event,
              data,
            }),
          );
        });
        break;

      case realtimeActions.disconnect.type:
        socket.disconnect();
        break;

      case realtimeActions.sendMessage.type:
        const { event, data } = (action as PayloadAction<SendMessagePayload>)
          .payload as SendMessagePayload;

        socket.send({ event, data });
        break;

      default:
        break;
    }

    return next(action);
  };

export default createSocketMiddleware;
