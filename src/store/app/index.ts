import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/rootReducer";
import type { AppState } from "./interface";

import { Views, Panels } from "store/models";

const initialState: AppState = {
  activeView: Views.Home,
  activePanel: Panels.Default,
  activeModal: null,
  offline: false,
  theme: null,
};

export const { reducer, actions } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setNavigation(state, action) {
      for (let param in action.payload) {
        // @ts-ignore
        if (state[param] !== action.payload[param]) {
          // @ts-ignore
          state[param] = action.payload[param];
        }
      }
    },

    setView(state, action) {
      console.log(action.payload);
      if (action.payload) {
        state.activeView = action.payload;
        state.activePanel = initialState.activePanel;
      }
    },
    setPanel(state, action) {
      console.log(action.payload);
      if (action.payload) {
        state.activePanel = action.payload;
      }
    },
    setModal(state, action) {
      console.log(action.payload);
      if (action.payload) {
        state.activeModal = action.payload;
      }
    },

    setTheme(state, action) {
      state.theme = action.payload;
    },

    clearView(state) {
      state.activeView = initialState.activeView;
    },
    clearPanel(state) {
      state.activePanel = initialState.activePanel;
    },
    clearModal(state) {
      state.activeModal = initialState.activeModal;
    },
  },
});

export { reducer as appReducer, actions as appActions };
export const appSelector = (state: RootState) => state.app;
