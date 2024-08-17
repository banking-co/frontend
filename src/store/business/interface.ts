import type { PayloadAction } from "@reduxjs/toolkit";
import { BusinessEmployerRoleModel, BusinessModel } from "store/models";

export interface BusinessState {
  primaryBusinessId: number | null;
  businesses: { [key: number]: BusinessModel };
  businessesRoles: { [key: number]: Array<BusinessEmployerRoleModel> };
  businessesIdByUserID: { [key: number]: number };
  isLoadingPrimaryBusiness: boolean;
  isLoadingBusinessStaff: boolean;
}

export type LoadPrimaryBusinessPayload = PayloadAction<{
  userId: number;
}>;

export type SetBusinessesPayload = PayloadAction<
  Array<BusinessModel | undefined> | undefined
>;

export type SetPrimaryBusinessPayload = PayloadAction<number>;

export type SetBusinessPayload = PayloadAction<{
  bankId: number;
  bank: BusinessModel;
  bankRoles: Array<BusinessEmployerRoleModel>;
}>;
