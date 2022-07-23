import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("productsList")
    ? JSON.parse(localStorage.getItem("productsList"))
    : [],
    status: null,
    error: null
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
        state.status = "success";
      state.items = action.payload
      localStorage.setItem('productsList', JSON.stringify(state.items))
    },
    [fetchProducts.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.payload
        
    },
  },
});


//Selectors


export default productsSlice.reducer;
