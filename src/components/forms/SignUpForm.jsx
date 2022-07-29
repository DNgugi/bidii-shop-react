import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { TextInput } from "./Fields";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../features/api/queries";

// import { useRegisterUserMutation } from "../../features/api/authApi";

const SignUpForm = () => {
  // const dispatch = useDispatch();
  let navigate = useNavigate();
  const [registerUser, {data, loading, error}] = useMutation(REGISTER_USER)

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: ""
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        
          email: Yup.string()
            .email("Please enter a valid email address")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const newUser = await registerUser({
              variables: {
                username: values.username,
                email: values.email,
              },
            });
            console.log(newUser)
            // dispatch(
            //   setCredentials({
            //     user: {
            //       id: newUser.id,
            //     },
            //     token: newUser.jwtAuthToken,
            //     refreshToken: newUser.jwtRefreshToken,
            //   })
            // );

            setSubmitting(false);
          } catch (err) {
            alert("there was an error signing you up");
            console.log(err.message);
          }
          toast.success(
            `Success! We have emailed you a link to set up your password.`,
            {
              position: "top-center",
            }
          );
          navigate("/login");
        }}
      >
        <Form className="w-full max-w-sm">
          <TextInput label="Email" name="email" type="email" />
          <TextInput label="Username" name="username" type="text" />

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
