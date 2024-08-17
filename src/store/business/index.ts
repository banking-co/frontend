import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import {
  BusinessState,
  LoadPrimaryBusinessPayload,
  SetBusinessesPayload,
  SetBusinessPayload,
} from "./interface";

export const initialState: BusinessState = {
  primaryBusiness: null,
  businesses: {},
  businessesIdByUserID: {},

  isLoadingPrimaryBusiness: true,
  isLoadingBusinessStaff: true,
};

export const { reducer, actions } = createSlice({
  name: "business",
  initialState,
  reducers: {
    setPrimaryBusiness(state, action: SetBusinessPayload) {
      if (!action.payload) return;
      state.primaryBusiness = action.payload;
    },

    setBusinesses(state, action: SetBusinessesPayload) {
      if (!action.payload || !action.payload[0]) return;
      action.payload.forEach((b) => {
        if (!b || !b.id || !b.userId) return;
        state.businesses[b.id] = b;
        state.businessesIdByUserID[b.userId] = b.id;
      });
    },
    setBusiness(state, action: SetBusinessPayload) {
      if (!action.payload || !action.payload.userId || !action.payload.id)
        return;
      state.businesses[action.payload.id] = action.payload;
      state.businessesIdByUserID[action.payload.id] = action.payload.userId;
    },

    loadPrimaryBusiness(state, _: LoadPrimaryBusinessPayload) {
      state.isLoadingPrimaryBusiness = true;
    },
    stopLoadingPrimaryBusiness(state) {
      state.isLoadingPrimaryBusiness = false;
    },

    clearBusinesses(state) {
      state.businesses = initialState.businesses;
    },
    clearPrimaryBusiness(state) {
      state.primaryBusiness = initialState.primaryBusiness;
    },
    clearState(state) {
      state.isLoadingPrimaryBusiness = initialState.isLoadingPrimaryBusiness;
      state.businesses = initialState.businesses;
      state.primaryBusiness = initialState.primaryBusiness;
    },
  },
});

export { reducer as businessReducer, actions as businessActions };
export const businessSelector = (state: RootState) => state.business;
