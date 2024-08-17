import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import {
  BusinessState,
  LoadPrimaryBusinessPayload,
  SetBusinessesPayload,
  SetBusinessPayload,
  SetPrimaryBusinessPayload,
} from "./interface";

export const initialState: BusinessState = {
  primaryBusinessId: null,

  businesses: {},
  businessesRoles: {},
  businessesIdByUserID: {},

  isLoadingPrimaryBusiness: true,
  isLoadingBusinessStaff: true,
};

export const { reducer, actions } = createSlice({
  name: "business",
  initialState,
  reducers: {
    setPrimaryBusiness(state, action: SetPrimaryBusinessPayload) {
      if (!action.payload) return;
      state.primaryBusinessId = action.payload;
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
      if (!action.payload || !action.payload.bank) return;

      const bId = action.payload.bankId || action.payload.bank.id;
      const uId = action.payload.bank.userId;

      state.businesses[bId] = action.payload.bank;
      state.businessesRoles[bId] = action.payload.bankRoles;
      state.businessesIdByUserID[uId] = bId;
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
      state.primaryBusinessId = initialState.primaryBusinessId;
    },
    clearState(state) {
      state.isLoadingPrimaryBusiness = initialState.isLoadingPrimaryBusiness;
      state.businesses = initialState.businesses;
      state.primaryBusinessId = initialState.primaryBusinessId;
    },
  },
});

export { reducer as businessReducer, actions as businessActions };
export const businessSelector = (state: RootState) => state.business;
