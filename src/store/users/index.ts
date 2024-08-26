import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import {
  LoadUserPayload,
  SetPrimaryUserPayload,
  SetUserPayload,
  SetUsersPayload,
  UsersState,
} from "./interface";

export const initialState: UsersState = {
  isLoadingUser: false,

  primaryUserId: null,
  users: {},
};

export const { reducer, actions } = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUser(state, _: LoadUserPayload) {
      state.isLoadingUser = true;
    },

    setPrimaryUser(state, action: SetPrimaryUserPayload) {
      if (!action.payload) return;
      state.primaryUserId = action.payload;
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
      state.primaryUserId = initialState.primaryUserId;
    },
    clearUsers(state) {
      state.users = initialState.users;
    },
    clearState(state) {
      state.primaryUserId = initialState.primaryUserId;
      state.users = initialState.users;
    },
  },
});

export { reducer as usersReducer, actions as usersActions };
export const usersSelector = (state: RootState) => state.users;
