import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/rootReducer";
import type { AppState } from "./interface";

const initialState: AppState = {
  activeModal: null,
  offline: false,
  theme: null,
};

export const { reducer, actions } = createSlice({
  name: "app",
  initialState,
  reducers: {
    openModal(state, action) {
      if (action.payload) {
        state.activeModal = action.payload;
      }
    },
    closeModal(state) {
      state.activeModal = initialState.activeModal;
    },
  },
});

export { reducer as appReducer, actions as appActions };
export const appSelector = (state: RootState) => state.app;
