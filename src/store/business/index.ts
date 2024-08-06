import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import {
  BusinessState,
  SetBusinessesPayload,
  SetBusinessPayload,
} from "./interface";

export const initialState: BusinessState = {
  primaryBusiness: null,
  businesses: {},

  isLoadingBusiness: false,
};

export const { reducer, actions } = createSlice({
  name: "balances",
  initialState,
  reducers: {
    setPrimaryBusiness(state, action: SetBusinessPayload) {
      if (!action.payload) return;
      state.primaryBusiness = action.payload;
    },

    setBusinesses(state, action: SetBusinessesPayload) {
      if (!action.payload || !action.payload[0]) return;
      action.payload.forEach((b) => {
        if (!b) return;
        state.businesses[b.id] = b;
      });
    },
    setBusiness(state, action: SetBusinessPayload) {
      if (!action.payload) return;
      state.businesses[action.payload.id] = action.payload;
    },

    clearBusinesses(state) {
      state.businesses = initialState.businesses;
    },
    clearPrimaryBusiness(state) {
      state.primaryBusiness = initialState.primaryBusiness;
    },
    clearState(state) {
      state.isLoadingBusiness = initialState.isLoadingBusiness;
      state.businesses = initialState.businesses;
      state.primaryBusiness = initialState.primaryBusiness;
    },
  },
});

export { reducer as balancesReducer, actions as balancesActions };
export const balancesSelector = (state: RootState) => state.balances;
