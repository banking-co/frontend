import type { PayloadAction } from "@reduxjs/toolkit";
import type { BusinessEmployeeModel, BusinessModel } from "store/models";

export interface BusinessState {
  primaryBusiness: BusinessModel | null;
  businesses: { [key: number]: BusinessModel };
  businessesIdByUserID: { [key: number]: number };
  businessEmployees?: { [key: number]: BusinessEmployeeModel[] };
  isLoadingPrimaryBusiness: boolean;
  isLoadingBusinessStaff: boolean;
}

export type LoadPrimaryBusinessPayload = PayloadAction<{
  userId: number;
}>;

export type SetBusinessesPayload = PayloadAction<
  Array<BusinessModel | undefined> | undefined
>;

export type SetBusinessPayload = PayloadAction<BusinessModel | undefined>;
