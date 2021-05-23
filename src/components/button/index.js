import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Button = ({ solidButton = true, text = "", routeTo }) => {
  return (
    <div
      className={solidButton ? "button solid-button" : "button login-button"}
    >
      <Link to={routeTo} style={{ textDecoration: "none", color: "white" }}>
        {text}
      </Link>
    </div>
  );
};

export default Button;
