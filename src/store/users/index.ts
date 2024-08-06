import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { SetUserPayload, SetUsersPayload, UsersState } from "./interface";

export const initialState: UsersState = {
  primaryUser: null,
  users: {},
};

export const { reducer, actions } = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPrimaryUser(state, action: SetUserPayload) {
      if (!action.payload) return;
      state.primaryUser = action.payload;
    },

    setUsers(state, action: SetUsersPayload) {
      if (!action.payload) return;

      action.payload.forEach((u) => {
        if (!u) return;
        state.users[u.id] = u;
      });
    },
    setUser(state, action: SetUserPayload) {
      if (!action.payload) return;
      state.users[action.payload.id] = action.payload;
    },

    clearPrimaryUser(state) {
      state.primaryUser = initialState.primaryUser;
    },
    clearUsers(state) {
      state.users = initialState.users;
    },
    clearState(state) {
      state.primaryUser = initialState.primaryUser;
      state.users = initialState.users;
    },
  },
});

export { reducer as usersReducer, actions as usersActions };
export const usersSelector = (state: RootState) => state.users;
