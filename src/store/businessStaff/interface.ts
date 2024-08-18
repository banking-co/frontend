import type { PayloadAction } from "@reduxjs/toolkit";
import type { BusinessEmployeeModel, ItemModel } from "models";

export interface BusinessStaffState {
  isLoadingBusinessStaffPage: boolean;
  isLoadingBusinessStaffRecruitPage: boolean;

  businessesStaff: { [key: number]: Array<BusinessEmployeeModel> };
  recruitStaff: Array<ItemModel>;
}

export type LoadBusinessStaffPayload = PayloadAction<{
  businessId: number;
}>;

export type SetBusinessStaffPayload = PayloadAction<{
  bankId?: number;
  bankStaff: Array<BusinessEmployeeModel | undefined> | undefined;
}>;

export type SetBusinessStaffRecruitItemsPayload = PayloadAction<{
  items: Array<ItemModel>;
}>;
