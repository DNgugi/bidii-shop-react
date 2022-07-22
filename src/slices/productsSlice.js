import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null,
    error: null
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (
        // userData = null, { rejectWithValue }
    ) => {
        // try {
            const res = await axios.get('http://localhost/wordpress/wp-json/wc/v3/')
        return res?.data
        // } catch (error) {
        //     return rejectWithValue('error in product fetch');
        // }
});

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
    },
    [fetchProducts.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.payload
        
    },
  },
});


//Selectors


export default productsSlice.reducer;
