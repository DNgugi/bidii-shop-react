import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isSignOut: false,
  token: null,
  user: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsSignOut: (state, action) => {
      state.isSignOut = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
});

export const { setIsLoading, setIsSignOut, setToken, setUser } = appSlice.actions;

//Selectors
export const selectIsLoading = (state) => state.app.isLoading;
export const selectIsSignOut = (state) => state.app.isSignOut;
export const selectToken = (state) => state.app.token;
export const selectUser = (state) => state.app.user;



export default appSlice.reducer;
