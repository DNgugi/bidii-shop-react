import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BillingForm = ({ total }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          // acceptedTerms: false, // added for our checkbox
          // jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          // acceptedTerms: Yup.boolean()
          //   .required("Required")
          //   .oneOf([true], "You must accept the terms and conditions."),
          // jobType: Yup.string()
          //   .oneOf(
          //     ["designer", "development", "product", "other"],
          //     "Invalid Job Type"
          //   )
          //   .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            toast("Check your phone!");
            setSubmitting(false);
            navigate("confirmation");
          }, 400);
        }}
      >
        <Form>
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
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          {/* 
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox> */}
          <h1>Cart Total: {total}</h1>

          <button className="btn-primary" type="submit">
            Place Order
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default BillingForm;
