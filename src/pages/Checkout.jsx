import React from "react";
import BillingForm from "../components/forms/BillingForm";
import Footer from "../components/Footer";
import { selectCartItemCount } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from "../components/CheckoutSummary";

function Checkout() {
  const cartItems = useSelector(selectCartItemCount);
  const navigate = useNavigate();

  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll min-h-screen w-screen grid-rows-[50px_minmax(200px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Checkout</h1>
      {cartItems === 0 ? (
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
        <div id="checkout" className="col-span-full grid grid-cols-12 h-screen overflow-y-scroll">
            <BillingForm />
        </div>
      )}
      <Footer />
    </main>
  );
}

export default Checkout;
