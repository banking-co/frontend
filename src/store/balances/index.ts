import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { BalanceState, SetUsersBalancesPayload } from "./interface";
import { BalanceModel } from "../models";

export const initialState: BalanceState = {
  isLoadingBalances: true,
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
