import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartItemCount: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        
        toast.info(`added one more ${action.payload.name} to your cart`, {
          position: "top-center",
        });
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`added ${action.payload.name} to your cart`, {
          position: "top-center",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const itemsLeft = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = itemsLeft;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));

      toast.error(`Removed ${action.payload.name} from your cart`, {
          position: "top-center",
        });
      },
    clearCart: (state, action) => {
      localStorage.removeItem("cartItems");
      state.cart = initialState;
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;

//Selectors

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.cartTotal;

export default cartSlice.reducer;
