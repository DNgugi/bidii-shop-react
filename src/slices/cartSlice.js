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
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error(`Removed ${action.payload.name} from your cart`, {
        position: "top-center",
      });
    },
    clearCart: (state, action) => {
      localStorage.removeItem("cartItems");
      state.cart = initialState;
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.info(`Removed one ${action.payload.name} from your cart`, {
          position: "top-center",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const itemsLeft = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = itemsLeft;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        toast.error(`Removed ${action.payload.name} from your cart`, {
          position: "top-center",
        });
      }
    },
    calculateCartTotal: (state, action) => {
     const { quantity, total } = state.cartItems.reduce(
       (rollingTotal, item) => {
         rollingTotal.total += item.prices.price * item.cartQuantity;
         rollingTotal.quantity += item.cartQuantity;

         return rollingTotal;
       },
       {
         total: 0,
         quantity: 0,
       }
     );
     state.cartItemCount = quantity;
     state.cartTotal = (total/100);
    }
  },
});

export const { addToCart, clearCart, removeFromCart, decreaseCart, calculateCartTotal, } = cartSlice.actions;

//Selectors

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotal = (state) => state.cart.cartTotal;
export const selectCartItemCount = (state) => state.cart.cartItemCount;

export default cartSlice.reducer;
