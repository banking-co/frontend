import { BonusModel } from "store/models";
import { PayloadAction } from "@reduxjs/toolkit";

export interface BonusState {
  isLoadingBonusesPage: boolean;
  usagePrBonus: Array<BonusModel>;
  usageAdBonus: Array<BonusModel>;
}

export type SetBonusesPayload = PayloadAction<
  Array<BonusModel | undefined> | undefined
>;
export type SetBonusPayload = PayloadAction<BonusModel | undefined>;
