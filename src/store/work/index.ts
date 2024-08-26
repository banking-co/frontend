import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { SetWorkPayload, WorkState } from "./interface";

export const initialState: WorkState = {
  work: {},
};

export const { reducer, actions } = createSlice({
  name: "work",
  initialState,
  reducers: {
    setWorkUser(state, action: SetWorkPayload) {
      state.work[action.payload.uid] = action.payload.work;
    },

    clearState(state) {
      state.work = initialState.work;
    },
  },
});

export { reducer as workReducer, actions as workActions };
export const workSelector = (state: RootState) => state.work;
