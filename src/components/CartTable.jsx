import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  selectCartItems,
} from "../slices/cartSlice";
import CartProduct from "./CartProduct";
import CurrencyFormat from "react-currency-format";
import { prices } from "../features/api/api";

function CartTable() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const handleAddToCart = (prod) => {
    dispatch(addToCart(prod));
  };
  const handleDecreaseCart = (prod) => {
    dispatch(decreaseCart(prod));
  };

  return (
    <div className="cart-table col-span-full md:col-span-8 p-4">
      <div className="table-titles grid grid-cols-12 gap-2 border-solid border-b py-2">
        <h3 className="col-start-1 col-span-4 flex justify-center">Product</h3>
        <h3 className="col-start-auto col-span-2 flex justify-center">Price</h3>
        <h3 className="col-start-auto col-span-3 flex justify-center">
          Quantity
        </h3>{" "}
        <h3 className="col-start-auto col-span-2 flex justify-center">Total</h3>
      </div>
      <div className="table-items grid grid-cols-12 gap-2 col-span-full divide-y  border-solid border-b border-t max-h-52 md:max-h-96 overflow-y-scroll">
        {cart?.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-12 gap-2 col-span-full items-center p-2"
          >
            <CartProduct product={product} />
            <div className="col-start-auto col-span-2 flex justify-center">
              <div className="max-w-full">
                <CurrencyFormat
                  thousandSeparator={prices.currency_thousand_separator}
                  decimalSeparator={prices.currency_decimal_separator}
                  prefix={prices.currency_prefix}
                  suffix={prices.currency_suffix}
                  value={1000}
                  displayType="text"
                />
              </div>
            </div>{" "}
            <div className="col-start-auto col-span-3 flex justify-between items-center  self-center border-solid border px-2">
              <button
                className="text-2xl h-full w-full"
                onClick={() => handleDecreaseCart(product)}
              >
                -
              </button>
              {product.cartQuantity}
              <button
                className="text-2xl h-full w-full"
                onClick={() => handleAddToCart(product)}
              >
                +
              </button>
            </div>{" "}
            <div className="col-start-auto col-span-2 flex justify-center">
              <CurrencyFormat
                thousandSeparator={prices.currency_thousand_separator}
                decimalSeparator={prices.currency_decimal_separator}
                prefix={prices.currency_prefix}
                suffix={prices.currency_suffix}
                value={(1000) * product.cartQuantity}
                displayType="text"
              />{" "}
              {/* Ksh. {(product.prices.price / 100) * product.cartQuantity} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartTable;
