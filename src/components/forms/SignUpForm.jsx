import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from '../../slices/authSlice';

const SignUpForm = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let navigate = useNavigate();


  return (
    <>
      <Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
          // acceptedTerms: false, // added for our checkbox
          // jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string().min(8, "Must be 8 characters or more")
            .max(16, "Must be 16 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Please enter a valid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          //
          dispatch(setUser(values));
          setSubmitting(false);
          navigate(-2)
      
        }}
      >
        <Form className="w-full max-w-sm">
          <TextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Davi"
          />


          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@email.com"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
          />
          
          <div className="flex justify-between items-center w-full">
            <button className="btn-primary " type="submit">
              Create account
            </button>
            <span className="text-base">
              Already have an account?
              <Link className="underline" to="/login">
                {" "}
                Log In
              </Link>
            </span>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
