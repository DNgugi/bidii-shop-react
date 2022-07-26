import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";

import { useRegisterUserMutation } from "../../features/api/authApi";

const SignUpForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .max(16, "Must be 16 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Please enter a valid email address")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const newUser = await registerUser({
              username: values.username,
              email: values.email,
              password: values.password,
            }).unwrap();
            console.log(newUser);
            dispatch(
              setCredentials({
                user: {
                  id: newUser.id,
                },
                token: newUser.jwtAuthToken,
                refreshToken: newUser.jwtRefreshToken,
              })
            );
            
            setSubmitting(false);
            toast.success(`You were registered successfully`, {
              position: "top-center",
            });
                      navigate("/login");
          } catch (err) {
            alert('there was an error signing you up')
            console.log(err.message);
          }
        }}
      >
        <Form className="w-full max-w-sm">
          <TextInput label="Username" name="username" type="text" />

          <TextInput label="Email Address" name="email" type="email" />
          <TextInput label="Password" name="password" type="password" />

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
