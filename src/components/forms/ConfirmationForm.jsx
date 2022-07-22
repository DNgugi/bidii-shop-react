import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import {clearCart } from '../../slices/cartSlice'

const ConfirmationForm = ({ total }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          confirmationCode: "",
          }}
        validationSchema={Yup.object({
          confirmationCode: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            toast("Your payment was successful!");
            setSubmitting(false);
            //create woocommerce order with status paid, reduce stock, etc
            navigate("thankyou");
          }, 400);
        }}
      >
        <Form>
          <TextInput
            label="M-Pesa Confirmation Code (Use Capital Letters)"
            name="confirmationCode"
            type="text"
            placeholder="AB00CD1EF"
          />

          <button className="btn-primary" type="submit">
            Confirm Payment
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ConfirmationForm;
