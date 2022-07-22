import { configureStore, } from '@reduxjs/toolkit';
import { productsApi } from '../api';
import appReducer from '../slices/appSlice';
import cartReducer from '../slices/cartSlice'
// import productsReducer from '../slices/productsSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware)
});
