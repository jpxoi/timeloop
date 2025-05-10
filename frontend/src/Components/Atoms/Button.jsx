import React from "react";

const Button = ({ params, text, action }) => {
  return (
    <button onClick={action} className={`${params}`}>
      {text}
    </button>
  );
};

export default Button;
