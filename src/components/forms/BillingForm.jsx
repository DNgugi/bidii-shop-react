import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Select, TextInput } from "./Fields";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { counties } from "../../api";
import { prices } from "../../api";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../slices/cartSlice";

const BillingForm = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const handlePlaceOrder = () => {
    alert("submitted");
  };

  return (
    <div className="billing-form col-span-full p-4">
      <h1>Payment & Delivery Details</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          address: {},
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          mobile: Yup.string()
            .max(12, "Must be 12 digits (254XXXXXXXXX)")
            .required("Please enter a number to receive payment request"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          location: Yup.string().required("Please select a county!"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            toast("Check your phone!");
            console.log(cartItems);
            setSubmitting(false);
            navigate("confirmation");
          }, 400);
        }}
      >
        <Form className="billing-actual-form grid grid-cols-12 p-2 gap-4">
          <div className="col-span-full md:col-span-6 p-2">
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />

            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />

            <TextInput
              label="M-Pesa Number"
              name="mobile"
              type="text"
              placeholder="254XXXXXXXXX"
            />

            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
            <Select label="Delivery County" name="location">
              <>
                <option
                  value=""
                  label="Tap to select..."
                >
                  Tap to select..
                </option>
                {counties.map((county) => (
                  <option value={county.name} label={county.name}>
                    {county.name}
                  </option>
                ))}
              </>
            </Select>
          </div>
          <div className="cart-summary p-4 border-2 border-solid col-span-full md:col-span-6">
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-lg">Cart Total: </h1>
                <h1 className="text-lg">
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
              <div className="my-4 flex justify-between w-full">
                <h1 className="text-base">Delivery Fee (Flat Rate): </h1>
                <h1 className="text-base">
                  <CurrencyFormat
                    thousandSeparator={prices.currency_thousand_separator}
                    decimalSeparator={prices.currency_decimal_separator}
                    prefix={prices.currency_prefix}
                    suffix={prices.currency_suffix}
                    value={300}
                    displayType="text"
                  />{" "}
                </h1>
              </div>
              <div className="flex justify-between w-full">
                <h1 className="text-xl font-semibold">Total Due Today: </h1>
                <h1 className="text-xl font-semibold">
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
              <p className="text-base max-w-sm my-6 text-end self-end">
                Unlock your phone before placing your order to receive the
                M-Pesa payment request.
              </p>
              <button type="submit" className="w-1/2 self-end btn-primary">
                Place Order
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BillingForm;
