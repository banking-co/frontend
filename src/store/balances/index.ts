import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../rootReducer";
import type { BalanceState, SetUsersBalancesPayload } from "./interface";
import type { BalanceModel } from "models";

export const initialState: BalanceState = {
  isLoadingBalances: true,
  balancesUpdatedAt: null,
  balances: {},
};

export const { reducer, actions } = createSlice({
  name: "balances",
  initialState,
  reducers: {
    setBalances(state, action: SetUsersBalancesPayload) {
      if (!action.payload || !action.payload[0]) return;
      const filterBalance = action.payload.filter((b) =>
        Boolean(b),
      ) as Array<BalanceModel>;

      state.balances[action.payload[0].userId] = filterBalance.reduce(
        (prev, curr) => {
          return Object.assign(prev, { [curr.importance]: curr });
        },
        {} as any,
      );
    },

    setBalancesUpdateAt(state, action) {
      if (!action.payload) return;
      state.balancesUpdatedAt = action.payload;
    },

    clearBalances(state) {
      state.balances = initialState.balances;
    },
    clearState(state) {
      state.balances = initialState.balances;
    },
  },
});

export { reducer as balancesReducer, actions as balancesActions };
export const balancesSelector = (state: RootState) => state.balances;
