import { PayloadAction } from "@reduxjs/toolkit";
import { WorkModel } from "models";

export interface WorkState {
  // user_id: work
  work: { [key: number]: WorkModel };
}

export type SetWorkPayload = PayloadAction<{
  uid: number;
  work: WorkModel;
}>;
