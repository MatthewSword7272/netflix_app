import React from "react";

const Button = ({ variant, buttonText }) => {
  //Base Styles
  const baseClasses = `px-6 py-2 cursor-pointer rounded lg:text-xl text-sm text-white`;

  // Variant Styles
  const variantClasses = {
    primary: "bg-red-600",
    secondary: "bg-transparent",
  };

  //   Combine Base and Variant Styles
  const className = `${baseClasses} ${variantClasses[variant]}`;

  return <button className={className}>{buttonText}</button>;
};

export default Button;
