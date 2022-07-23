import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/authSlice";


const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{
          password: "",
          email: "",
          // acceptedTerms: false, // added for our checkbox
          // jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .max(16, "Must be 16 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(setUser({
            user: {
              ...values,
            isLoggedIn: true
            },
            token: 'sample-token'
          }));
          setSubmitting(false);
          navigate(-1)
        }}
      >
        <Form className="w-full max-w-sm">
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <TextInput label="Password" name="password" type="password" />

          <div className="flex justify-between items-center w-full">
            <button className="btn-primary " type="submit">
              Log In
            </button>
            <span className="text-base">
              Need an account?
              <Link className="underline" to="/signup">
                {" "}
                Sign Up
              </Link>
            </span>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
