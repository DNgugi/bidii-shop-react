import React from "react";
import Footer from "../components/Footer";
import SignUpForm from "../components/forms/SignUpForm";


function SignUp() {
  return (
    <main
      id="main"
      className="relative top-20 left-0 grid grid-cols-12 gap-2 overflow-y-scroll max-h-screen h-screen w-screen grid-rows-[50px_minmax(200px,_1fr)_50px]"
    >
      <h1 className="text-2xl col-span-full text-center">Sign Up</h1>
      <div className="col-span-full w-full h-full flex justify-center">
        <SignUpForm />
      </div>
      <Footer />
    </main>
  );
}

export default SignUp;
