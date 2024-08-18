import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import type {
  BusinessStaffState,
  LoadBusinessStaffPayload,
  SetBusinessStaffPayload,
  SetBusinessStaffRecruitItemsPayload,
} from "./interface";
import type { BusinessEmployeeModel } from "models";

export const initialState: BusinessStaffState = {
  isLoadingBusinessStaffPage: true,
  isLoadingBusinessStaffRecruitPage: true,

  businessesStaff: {},
  recruitStaff: [],
};

export const { reducer, actions } = createSlice({
  name: "businessStaff",
  initialState,
  reducers: {
    setStopLoadingBusinessStaffPage(state) {
      state.isLoadingBusinessStaffPage = false;
    },

    setStopLoadingBusinessStaffRecruitPage(state) {
      state.isLoadingBusinessStaffRecruitPage = false;
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

    setBusinessStaffRecruitItems(
      state,
      action: SetBusinessStaffRecruitItemsPayload,
    ) {
      if (!action.payload.items || action.payload.items.length < 1) return;
      state.recruitStaff = action.payload.items;
    },

    loadBusinessStaff(state, _: LoadBusinessStaffPayload) {
      state.isLoadingBusinessStaffPage = true;
    },

    loadBusinessStaffRecruit(state) {
      state.isLoadingBusinessStaffRecruitPage = true;
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
