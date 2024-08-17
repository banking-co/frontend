import type { PayloadAction } from "@reduxjs/toolkit";
import type { BusinessEmployeeModel } from "store/models";

export interface BusinessStaffState {
  isLoadingBusinessStaffPage: boolean;
  businessesStaff: { [key: number]: Array<BusinessEmployeeModel> };
}

export type LoadBusinessStaffPayload = PayloadAction<{
  businessId: number;
}>;

export type SetBusinessStaffPayload = PayloadAction<{
  bankId?: number;
  bankStaff: Array<BusinessEmployeeModel | undefined> | undefined;
}>;
