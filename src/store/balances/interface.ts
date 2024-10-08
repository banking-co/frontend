import { PayloadAction } from "@reduxjs/toolkit";
import { BalanceModel } from "models";

type BalanceWithId = { [key: number]: BalanceModel };

export interface BalanceState {
  isLoadingBalances: boolean;
  balancesUpdatedAt: number | null;
  balances: { [key: number]: BalanceWithId };
}

export type SetUsersBalancesPayload = PayloadAction<
  Array<BalanceModel | undefined> | undefined
>;
