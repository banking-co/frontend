import { vkSign } from "utils";

import { SocketEvent } from "store/models";
import { SendMessagePayload } from "../store/realtime/interface";

export const apiUrl =
  localStorage.getItem("server_url") ||
  import.meta.env.API_SOCKET_URL ||
  "ws://localhost:3001";

export class Socket {
  socket: WebSocket | null;
  pingInterval: NodeJS.Timeout | null;
  pongTimeout: NodeJS.Timeout | null;
  isReconnect: boolean;
  reconnectInterval: NodeJS.Timeout | null;
  eventHandlers: Map<SocketEvent, (data?: unknown) => void>;
  readonly PING_INTERVAL_MS: number = 10000;
  readonly PONG_TIMEOUT_MS: number = 15000;
  readonly RECONNECT_INTERVAL_MS: number = 5000;

  constructor() {
    this.socket = null;
    this.pingInterval = null;
    this.pongTimeout = null;
    this.reconnectInterval = null;
    this.eventHandlers = new Map();
    this.isReconnect = false;
  }

  connect() {
    if (this.socket) return;

    const url =
      apiUrl + "?" + (localStorage.getItem("app-dev-sign") || vkSign());
    if (url.includes("sign=undefined")) return;

    this.socket = new WebSocket(url);
    this.socket.addEventListener("open", this.handleOpen);
    this.socket.addEventListener("close", this.handleClose);
    this.socket.addEventListener("error", this.handleError);
  }

  handleOpen = () => {
    console.log("WebSocket connection opened");
    this.startPing();
    this.stopReconnect();
    this.attachEventHandlers();
  };

  handleClose = () => {
    console.log("WebSocket connection closed");
    this.stopPing();
    this.startReconnect();
    this.disconnect();
  };

  handleError = (error: Event) => {
    console.error("WebSocket error:", error);
    this.disconnect();
  };

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }

    this.stopPing();
  }

  send(message: SendMessagePayload) {
    if (message && this.socket && this.socket.readyState === WebSocket.OPEN) {
      const msg = JSON.stringify(message);
      this.socket.send(msg);
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
    this.pingInterval = setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send({ event: SocketEvent.Ping });
        this.resetPongTimeout();
      }
    }, this.PING_INTERVAL_MS);
  }

  stopPing() {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  resetPongTimeout() {
    if (this.pongTimeout) {
      clearTimeout(this.pongTimeout);
    }

    this.pongTimeout = setTimeout(() => {
      this.disconnect();
    }, this.PONG_TIMEOUT_MS);
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
      clearInterval(this.reconnectInterval);
      this.send({ event: SocketEvent.StartApp });
      this.reconnectInterval = null;
    }
  }
}
