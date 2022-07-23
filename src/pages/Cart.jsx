import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartItems, calculateCartTotal } from "../slices/cartSlice";

import Footer from "../components/Footer";
import CartTable from "../components/CartTable";
import CartSummary from "../components/CartSummary";

function Cart() {
  const cart = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateCartTotal());
  }, [cart, dispatch]);
  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll max-h-screen h-screen w-screen grid-rows-[50px_minmax(200px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart col-span-full w-screen flex flex-col items-center justify-center">
          <p className="text-2xl text-center">Oops! This cart is empty...</p>
          <button
            className="btn-primary mt-5"
            onClick={() => navigate("/shop")}
          >
            Start shopping
          </button>
        </div>
      ) : (
        <div id="cart" className="col-span-full">
          <div className=" grid grid-cols-12 gap-x-4 px-4  ">
            <CartTable />
            <CartSummary />
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}

export default Cart;
