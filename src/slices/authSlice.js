import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  // refreshToken: localStorage.getItem("refreshToken")
  //   ? JSON.parse(localStorage.getItem("refreshToken"))
  //   : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, } = action.payload;
      state.user = user;
      state.token = token;
      // state.refreshToken = refreshToken;

      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", JSON.stringify(state.token));
      // localStorage.setItem("refreshToken", JSON.stringify(state.refreshToken));
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export default authSlice.reducer;
