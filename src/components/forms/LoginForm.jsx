import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
// import { useLoginUserMutation } from "../../features/api/authApi";
import { useMutation } from "@apollo/client";

import { LOGIN_USER } from "../../features/api/queries";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [loginUser, { isLoading }] = useLoginUserMutation();
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const content = loading ? (
    <p>Logging you in...</p>
  ) : (
    <>
      <Formik
        initialValues={{
          password: "",
          username: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(8, "Must be 8 characters or more")
            .max(36, "Must be 16 characters or less")
            .required("Required"),
          username: Yup.string().required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const newUser = await loginUser({
              variables: {
                username: values.username,
                password: values.password,
              },
            });
            console.log(newUser.data.login);

            dispatch(
              setCredentials({
                user: newUser.data.login.user,
                token: newUser.data.login.user.jwtAuthToken,
                refreshToken: newUser.data.login.jwtRefreshToken,
              })
            );
            alert("logged in!");
            setSubmitting(false);
            // navigate("/shop");
          } catch (err) {
            console.log(err.message);
          }
        }}
      >
        <Form className="w-full max-w-sm">
          <TextInput label="Username/Email" name="username" type="text" />
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
  return content;
};

export default LoginForm;
