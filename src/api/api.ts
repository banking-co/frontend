import { vkSign } from "utils";

import { SocketEvent } from "store/models";

export const apiUrl =
  localStorage.getItem("server_url") ||
  import.meta.env.API_SOCKET_URL ||
  "ws://localhost:3001";

export class Socket {
  socket: WebSocket | null;
  constructor() {
    this.socket = null;
  }

  connect() {
    if (!this.socket) {
      const url =
        apiUrl + "?" + (localStorage.getItem("app-dev-sign") || vkSign());

      if (url.includes("sign=undefined")) return;
      this.socket = new WebSocket(url);
    }
  }

  disconnect() {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
      this.socket = null;
    }
  }

  send(message: unknown) {
    if (message && this.socket && this.socket.readyState === WebSocket.OPEN) {
      const msg = JSON.stringify(message);
      this.socket.send(msg);
    }
  }

  on(event: SocketEvent, cb: (data?: unknown) => void) {
    if (this.socket) {
      this.socket.addEventListener(event, cb);
    }
  }
}
