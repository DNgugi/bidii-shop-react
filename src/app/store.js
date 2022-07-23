import { configureStore, } from '@reduxjs/toolkit';
import { productsApi } from '../api';
import authReducer from '../slices/authSlice';
import cartReducer from '../slices/cartSlice'
// import productsReducer from '../slices/productsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
});
