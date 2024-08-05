import { PayloadAction } from "@reduxjs/toolkit";
import { BalanceModel } from "store/models";

type BalanceWithId = { [key: number]: BalanceModel };

export interface BalanceState {
  balances: { [key: number]: BalanceWithId };
}

export type SetUsersBalancesPayload = PayloadAction<
  Array<BalanceModel | undefined> | undefined
>;
