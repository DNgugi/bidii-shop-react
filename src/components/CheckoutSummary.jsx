import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../slices/cartSlice";
import CurrencyFormat from "react-currency-format";
import { prices } from "../features/api/api";

function CheckoutSummary() {
  const cartTotal = useSelector(selectCartTotal);
  const handlePlaceOrder = () => {
    alert("submitted");
  };

  return (
    <div className="cart-summary col-span-full md:col-span-4 p-4">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between w-full">
          <h1 className="text-lg">Cart Total: </h1>
          <h1 className="text-lg">
            <CurrencyFormat
              thousandSeparator={prices.currency_thousand_separator}
              decimalSeparator={prices.currency_decimal_separator}
              prefix={prices.currency_prefix}
              suffix={prices.currency_suffix}
              value={cartTotal}
            />{" "}
          </h1>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-base">Delivery Fee (Flat Rate): </h1>
          <h1 className="text-base">
            <CurrencyFormat
              thousandSeparator={prices.currency_thousand_separator}
              decimalSeparator={prices.currency_decimal_separator}
              prefix={prices.currency_prefix}
              suffix={prices.currency_suffix}
              value={300}
            />{" "}
          </h1>
        </div>
        <div className="flex justify-between w-full">
          <h1 className="text-xl">Total Due Today: </h1>
          <h1 className="text-xl">
            <CurrencyFormat
              thousandSeparator={prices.currency_thousand_separator}
              decimalSeparator={prices.currency_decimal_separator}
              prefix={prices.currency_prefix}
              suffix={prices.currency_suffix}
              value={cartTotal + 300}
              displayType="text"
            />{" "}
          </h1>
        </div>
        <p className="text-base my-6 self-end">
          Unlock your phone before placing your order to receive the M-Pesa
          payment request.
        </p>
        <button
          onClick={() => handlePlaceOrder}
          className="w-1/2 self-end btn-primary"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
