import { vkSign } from "utils";

import { SocketEvent } from "store/models";
import { SendMessagePayload } from "../store/realtime/interface";
import { Dispatch } from "@reduxjs/toolkit";
import { realtimeActions } from "../store/realtime";

export const apiUrl =
  localStorage.getItem("server_url") ||
  import.meta.env.API_SOCKET_URL ||
  "ws://localhost:3001";

export class Socket {
  dispatch: Dispatch | null;
  socket: WebSocket | null;
  pingInterval: NodeJS.Timeout | null;
  pongTimeout: NodeJS.Timeout | null;
  isReconnect: boolean;
  reconnectInterval: NodeJS.Timeout | null;
  eventHandlers: Map<SocketEvent, (data?: unknown) => void>;
  readonly PING_INTERVAL_MS: number = 10000;
  readonly PONG_TIMEOUT_MS: number = 5000;
  readonly RECONNECT_INTERVAL_MS: number = 5000;

  constructor() {
    this.dispatch = null;
    this.socket = null;
    this.pingInterval = null;
    this.pongTimeout = null;
    this.reconnectInterval = null;
    this.eventHandlers = new Map();
    this.isReconnect = false;
  }

  connect(dispatch?: Dispatch) {
    if (this.socket) return;

    const url =
      apiUrl + "?" + (localStorage.getItem("app-dev-sign") || vkSign());
    if (url.includes("sign=undefined")) return;

    if (dispatch) {
      this.dispatch = dispatch;
    }

    this.socket = new WebSocket(url);
    this.socket.addEventListener("open", this.handleOpen);
    this.socket.addEventListener("close", this.handleClose);
    this.socket.addEventListener("error", this.handleError);
    this.socket.addEventListener("message", this.handleMessage);
  }

  handleOpen = () => {
    console.log("WebSocket connection opened");
    this.startPing();
    this.stopReconnect();
    this.attachEventHandlers();
  };

  handleClose = () => {
    console.log("WebSocket connection closed");
    this.startReconnect();
    this.disconnect();
    this.stopPing();
    this.stopPong();
  };

  handleError = (error: Event) => {
    console.error("WebSocket error:", error);
    this.disconnect();
    this.stopPing();
    this.stopPong();
  };

  handleMessage = (event: MessageEvent) => {
    const message = event.data as string;
    if (message.includes("pong")) {
      this.stopPong();
    }
  };

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;

      if (this.dispatch) {
        console.log("disconnect");
        this.dispatch(realtimeActions.setConnectionStatus(false));
      }
    }
  }

  send(message: SendMessagePayload) {
    if (message && this.socket && this.socket.readyState === WebSocket.OPEN) {
      const msg = JSON.stringify(message);
      this.socket.send(msg);
      this.startPing();
    }
  }

  on(event: SocketEvent, cb: (data?: unknown) => void) {
    this.eventHandlers.set(event, cb);

    if (this.socket) {
      this.socket.addEventListener(event, cb);
    }
  }

  attachEventHandlers() {
    if (this.isReconnect) {
      this.eventHandlers.forEach((cb, event) => {
        if (this.socket) {
          this.socket.addEventListener(event, cb);
        }
      });

      this.isReconnect = false;
    }
  }

  startPing() {
    this.stopPing();
    this.stopPong();

    this.pingInterval = setInterval(() => {
      this.send({
        event: SocketEvent.Ping,
      });

      this.pongTimeout = setTimeout(() => {
        this.disconnect();
      }, this.PONG_TIMEOUT_MS);
    }, this.PING_INTERVAL_MS);
  }

  stopPing() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  stopPong() {
    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout);
      this.pongTimeout = null;
    }
  }

  startReconnect() {
    if (!this.reconnectInterval) {
      this.isReconnect = true;

      this.reconnectInterval = setInterval(() => {
        console.log("Attempting to reconnect...");
        this.connect();
      }, this.RECONNECT_INTERVAL_MS);
    }
  }

  stopReconnect() {
    if (this.reconnectInterval) {
      this.send({ event: SocketEvent.Ping });
      clearInterval(this.reconnectInterval);
      this.reconnectInterval = null;
    }
  }
}
