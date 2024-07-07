import { PayloadAction } from "@reduxjs/toolkit";
import { SocketEvent } from "store/models";

export interface SendMessagePayload extends PayloadAction {
  event: SocketEvent;
  data: unknown;
}
