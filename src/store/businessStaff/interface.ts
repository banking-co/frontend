import type { PayloadAction } from "@reduxjs/toolkit";
import type { BusinessEmployeeModel } from "store/models";

export interface BusinessStaffState {
  isLoadingBusinessStaffPage: boolean;

  // key - businessId
  businessesStaff: { [key: number]: Array<BusinessEmployeeModel> };
}

export type LoadBusinessStaffPayload = PayloadAction<{
  businessId: number;
}>;

export type SetBusinessStaffPayload = PayloadAction<{
  businessId?: number;
  staff: Array<BusinessEmployeeModel | undefined> | undefined;
}>;
