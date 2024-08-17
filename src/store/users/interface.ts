import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "store/models";

export interface UsersState {
  primaryUserId: number | null;
  users: { [key: number]: UserModel };
}

export type SetUsersPayload = PayloadAction<
  Array<UserModel | undefined> | undefined
>;
export type SetUserPayload = PayloadAction<UserModel | undefined>;
export type SetPrimaryUserPayload = PayloadAction<number | undefined | null>;
