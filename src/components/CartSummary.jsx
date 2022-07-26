import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartTotal } from "../slices/cartSlice";
import CurrencyFormat from "react-currency-format";
import { prices } from "../features/api/api";
function CartSummary() {
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();

  return (
    <div className="cart-summary col-span-full md:col-span-4 p-4 border-solid border">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between w-full">
          <h1 className="text-xl">Subtotal: </h1>
          <h1 className="text-xl">
            <CurrencyFormat
              thousandSeparator={prices.currency_thousand_separator}
              decimalSeparator={prices.currency_decimal_separator}
              prefix={prices.currency_prefix}
              suffix={prices.currency_suffix}
              value={cartTotal}
              displayType="text"
            />{" "}
          </h1>
        </div>
        <p className="text-base my-6 self-end">
          Taxes and Delivery will be calculated at check out.
        </p>
        <button
          onClick={() => navigate("checkout")}
          className="w-1/2 self-end btn-primary"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
