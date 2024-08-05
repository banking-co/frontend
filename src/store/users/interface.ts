import { PayloadAction } from "@reduxjs/toolkit";
import { UserModel } from "store/models";

export interface UsersState {
  primaryUser: null | UserModel;
  users: { [key: number]: UserModel };
}

export type SetUsersPayload = PayloadAction<
  Array<UserModel | undefined> | undefined
>;
export type SetUserPayload = PayloadAction<UserModel | undefined>;
