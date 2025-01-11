import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const AuthForm = ({
  title,
  buttonText,
  linkText,
  linkTo,
  linkDescription,
  auth,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      console.log("Email:", email);
      console.log("Password:", password);
      await auth(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="fixed w-full px-4 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
        <div className="max-w-[320px] mx-auto py-16 space-y-5">
          <h1 className="font-bold text-3xl">{title}</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col py-4 space-y-4"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-gray-600 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 bg-gray-600 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <Button variant="red" buttonText={buttonText}></Button>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <p>
                <input className="mr-2" type="checkbox" name="" id="" />
                Remember Me
              </p>
              <p>Need Help?</p>
            </div>
            <p className="py-8">
              <span className="text-gray-600">{linkDescription}</span>{" "}
              <Link to={linkTo}>{linkText}</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
