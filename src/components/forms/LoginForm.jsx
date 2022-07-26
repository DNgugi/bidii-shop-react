import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRefreshToken, setCredentials } from "../../slices/authSlice";
import { useLoginUserMutation } from "../../features/api/authApi";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshToken = useSelector(selectRefreshToken);
  const [loginUser, {isLoading}] = useLoginUserMutation();
  const content = isLoading ? (<p>Logging you in...</p>)
    : (<>
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
          username: Yup.string()
            .min(2, "Invalid username")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const newUser = await loginUser({
              username: values.username,
              password: values.password,
            }).unwrap();
            dispatch(
              setCredentials({
                user: { id: newUser.id },
                token: newUser.authToken,
                refreshToken: refreshToken
              })
            );
            setSubmitting(false);
            navigate("/shop");
          } catch (err) {
            // alert(err.res.errors.message)
            console.log(err.message);
          }
        }}
      >
        <Form className="w-full max-w-sm">
          <TextInput
            label="Username"
            name="username"
            type="text"
            // placeholder="jane@formik.com"
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
    </>)
  return content;
};

export default LoginForm;
