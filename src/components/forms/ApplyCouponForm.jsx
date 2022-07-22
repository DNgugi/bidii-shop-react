import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import {clearCart } from '../../slices/cartSlice'

const ApplyCouponForm = ({ cart }) => {
  // const dispatch = useDispatch();
  return (

      <Formik
        initialValues={{
          couponCode: "",
        }}
        validationSchema={Yup.object({
          couponCode: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            toast("Coupon applied!");
            setSubmitting(false);
            //create woocommerce order with status paid, reduce stock, etc
          }, 400);
        }}
      >
        <Form>
          <TextInput
          label="Enter a coupon code"
            name="couponCode"
            type="text"
          />

          <button className="btn-primary" type="submit">
            Apply Coupon
          </button>
        </Form>
      </Formik>
    
  );
};

export default ApplyCouponForm;
