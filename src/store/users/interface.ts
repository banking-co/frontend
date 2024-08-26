import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "models";

export interface UsersState {
  isLoadingUser: boolean;

  primaryUserId: number | null;
  users: { [key: number]: UserModel };
}

export type SetUsersPayload = PayloadAction<
  Array<UserModel | undefined> | undefined
>;
export type SetUserPayload = PayloadAction<UserModel | undefined>;
export type SetPrimaryUserPayload = PayloadAction<number | undefined | null>;
export type LoadUserPayload = PayloadAction<{ uid: number }>;
