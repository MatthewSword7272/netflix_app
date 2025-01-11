import React from "react";

const Button = ({ variant = 'red', buttonText, onClick }) => {
  //Base Styles
  const baseClasses = `px-6 py-2 cursor-pointer rounded lg:text-xl text-sm text-white`;

  // Variant Styles
  const variantClasses = {
    red: "bg-red-600",
    transparent: "bg-transparent",
    lightGray: 'bg-gray-300 border border-gray-300 text-black px-5 py-2',
    blackBorder: 'bg-black border border-white px-5 py-2',
  };

  //   Combine Base and Variant Styles
  const className = `${baseClasses} ${variantClasses[variant]}`;

  return <button onClick={onClick} className={className}>{buttonText}</button>;
};

export default Button;
