import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {},
  token: localStorage.getItem("karyToken")
    ? JSON.parse(localStorage.getItem("karyToken"))
    : ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
        state.token = action.payload.token
        
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem("karyToken", JSON.stringify(state.token));
        },
    }
})

export const { setUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
