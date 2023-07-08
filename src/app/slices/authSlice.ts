import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { authApi } from "src/app/services/auth";
import { PROFILE, TOKEN, profile, token } from "src/app/services/auth/const";
import { IProfile } from "src/app/services/auth/type";

export interface IAuthState {
  profile?: IProfile;
  token?: string;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  profile: profile ? JSON.parse(profile) : undefined,
  token: token || "",
  isAuthenticated: token ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.profile = undefined;
      state.isAuthenticated = false;

      localStorage.removeItem(TOKEN);
      localStorage.removeItem(PROFILE);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.profile = action.payload.profile;
        state.token = action.payload.token;
        state.isAuthenticated = true;

        localStorage.setItem(TOKEN, action.payload.token);
        localStorage.setItem(PROFILE, JSON.stringify(action.payload.profile));
      })
      .addMatcher(authApi.endpoints.login.matchRejected, (state, action) => {
        state.profile = undefined;
        state.token = undefined;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
