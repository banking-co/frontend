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
      if (!action.payload.bankStaff) return;

      const bId = action.payload.bankId;

      if (bId) {
        state.businessesStaff[bId] = action.payload.bankStaff.filter(
          (b) => !!b,
        ) as BusinessEmployeeModel[];
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
