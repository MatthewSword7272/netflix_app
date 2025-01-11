import React from "react";
import NetflixLogo from "./NetflixLogo";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Header = () => {
  const { user, signOutUser } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await signOutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="flex items-center justify-between p-4 z-[100] w-full absolute">
      {/* Netflix Logo */}
      <Link to="/" className="w-1/6 min-w-20 max-w-40 cursor-pointer">
        <NetflixLogo />
      </Link>
      {user?.email ? (
        <div>
          {/* Buttons for Sign in and Up */}
          <Link to="/account">
            <Button buttonText={"Account"} variant={"transparent"} />
          </Link>
          <Button onClick={handleLogOut} buttonText={"Log Out"} variant={"red"} />
        </div>
      ) : (
        <div>
          {/* Buttons for Sign in and Up */}
          <Link to="/login">
            <Button buttonText={"Sign In"} variant={"transparent"} />
          </Link>
          <Link to="/signup">
            <Button buttonText={"Sign Up"} variant={"red"} />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
