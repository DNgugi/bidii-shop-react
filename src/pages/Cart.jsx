import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { selectCartItems } from "../slices/cartSlice";
import ApplyCouponForm from "../components/forms/ApplyCouponForm";

function Cart() {
  const cart = useSelector(selectCartItems);
  const navigate = useNavigate();
  return (
    <div className="relative grid grid-cols-12 gap-2 col-span-full md:col-start-2 md:col-span-10 h-screen pt-2">
      <h1 className="text-2xl col-span-full text-center">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Cart is empty</p>
          <button onClick={() => navigate("/shop")}>Start shopping</button>
        </div>
      ) : (
        <div className="col-span-full grid grid-cols-12 gap-2 ">
          <div className="table-titles grid grid-cols-12 gap-2 col-span-full border-solid border-b py-2">
            <h3 className="col-start-1 col-span-4 flex justify-center">
              Product
            </h3>
            <h3 className="col-start-auto col-span-2 flex justify-center">
              Price
            </h3>
            <h3 className="col-start-auto col-span-3 flex justify-center">
              Quantity
            </h3>{" "}
            <h3 className="col-start-auto col-span-2 flex justify-center">
              Total
            </h3>
          </div>
          <div className="table-items grid grid-cols-12 gap-2 col-span-full divide-y  h-60 overflow-y-scroll">
            {cart?.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-12 gap-2 col-span-full items-center p-4 m-2  "
              >
                <CartProduct product={product} />
                <div className="col-start-auto col-span-2 flex justify-center">
                  unit price here
                </div>{" "}
                <div className="col-start-auto col-span-3 flex justify-center">
                  {product.cartQuantity}
                </div>{" "}
                <div className="col-start-auto col-span-2 flex justify-center">
                  total here
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-full grid grid-cols-12 gap-2 col-span-full divide-x">
            <div className="col-span-full md:col-span-6 p-4 m-2">
              <ApplyCouponForm />
            </div>
            <div className="col-span-full md:col-span-6 p-4 m-2">
              <h1 className="text-xl">Subtotal: Ksh. 99,300</h1>
              <p className="text-base">Taxes and Delivery will be calculated at check out.</p>
                <button onClick={ () => navigate('checkout')} className="btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
