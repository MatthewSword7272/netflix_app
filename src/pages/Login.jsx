import React from "react";
import AuthForm from "../components/AuthForm";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
    const { user, logIn } = UserAuth();

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/AU-en-20250106-TRIFECTA-perspective_2cf8b902-ee2b-4d8f-8c86-523cb584c11c_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <AuthForm
          title="Sign In"
          buttonText="Sign In"
          linkText="Sign Up"
          linkTo="/signup"
          linkDescription="New to Netflix?"
          auth={logIn}
        />
      </div>
    </>
  );
};

export default Login;
