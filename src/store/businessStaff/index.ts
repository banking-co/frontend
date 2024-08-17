import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import type {
  BusinessStaffState,
  LoadBusinessStaffPayload,
  SetBusinessStaffPayload,
} from "./interface";
import type { BusinessEmployeeModel } from "../models";

export const initialState: BusinessStaffState = {
  isLoadingBusinessStaffPage: true,
  businessesStaff: {},
};

export const { reducer, actions } = createSlice({
  name: "businessStaff",
  initialState,
  reducers: {
    setStopLoadingBusinessStaffPage(state) {
      state.isLoadingBusinessStaffPage = false;
    },

    setBusinessesStaffs(state, action: SetBusinessStaffPayload) {
      if (!action.payload.staff || action.payload.staff.length === 0) return;

      if (action.payload.businessId) {
        state.businessesStaff[action.payload.businessId] =
          action.payload.staff.filter((b) => !!b) as BusinessEmployeeModel[];
      }

      if (!action.payload.businessId) {
      }
    },

    loadBusinessStaff(state, _: LoadBusinessStaffPayload) {
      state.isLoadingBusinessStaffPage = true;
    },

    clearBusinessesStaffs(state) {
      state.businessesStaff = initialState.businessesStaff;
    },
    clearState(state) {
      state.isLoadingBusinessStaffPage =
        initialState.isLoadingBusinessStaffPage;
      state.businessesStaff = initialState.businessesStaff;
    },
  },
});

export { reducer as businessStaffReducer, actions as businessStaffActions };
export const businessStaffSelector = (state: RootState) => state.businessStaff;
