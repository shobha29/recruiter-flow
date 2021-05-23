import React from "react";

import "./styles.scss";

const Button = ({ solidButton = true, text = "" }) => {
  return (
    <div
      className={solidButton ? "button solid-button" : "button login-button"}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
