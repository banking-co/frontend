import { PayloadAction } from "@reduxjs/toolkit";
import { BusinessModel } from "store/models";

export interface BusinessState {
  primaryBusiness: BusinessModel | null;
  businesses: { [key: number]: BusinessModel };
  isLoadingBusiness: boolean;
}

export type SetBusinessesPayload = PayloadAction<
  Array<BusinessModel | undefined> | undefined
>;

export type SetBusinessPayload = PayloadAction<BusinessModel | undefined>;
