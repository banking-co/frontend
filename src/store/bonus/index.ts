import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { BonusState, SetBonusPayload, SetBonusesPayload } from "./interface";

export const initialState: BonusState = {
  isLoadingBonusesPage: true,
  usagePrBonus: [], // max infinity
  usageAdBonus: [], // max 25 ads
};

export const { reducer, actions } = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    getAvailableBonuses(state) {
      state.isLoadingBonusesPage = true;
    },
    stopLoadingAvailableBonuses(state) {
      state.isLoadingBonusesPage = false;
    },
    setBonuses(state, action: SetBonusesPayload) {
      if (!action.payload) return;

      action.payload.forEach((b) => {
        if (!b) return;

        switch (b.type) {
          case "primary":
            state.usagePrBonus = [...state.usagePrBonus, b];
            break;
          case "advertisement": {
            state.usageAdBonus = [...state.usageAdBonus, b];
            break;
          }
        }
      });
    },
    setBonus(state, action: SetBonusPayload) {
      if (!action.payload) return;

      switch (action.payload.type) {
        case "primary":
          state.usagePrBonus = [...state.usagePrBonus, action.payload];
          break;
        case "advertisement": {
          state.usageAdBonus = [...state.usageAdBonus, action.payload];
          break;
        }
      }
    },

    clearState(state) {
      state.usagePrBonus = initialState.usagePrBonus;
      state.usageAdBonus = initialState.usageAdBonus;
    },
  },
});

export { reducer as bonusReducer, actions as bonusActions };
export const bonusSelector = (state: RootState) => state.bonus;
