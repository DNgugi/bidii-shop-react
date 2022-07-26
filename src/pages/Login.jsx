import React from "react";
import Footer from "../components/Footer";
import LoginForm from '../components/forms/LoginForm'

function Login() {
  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll max-h-screen h-screen w-screen grid-rows-[50px_minmax(200px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Log In</h1>
      <div className="col-span-full w-full h-full flex justify-center">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}

export default Login;
