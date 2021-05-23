import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Button = ({ solidButton = true, text = "", routeTo }) => {
  return (
    <Link to={routeTo} style={{ textDecoration: "none", color: "white" }}>
      <div
        className={solidButton ? "button solid-button" : "button login-button"}
      >
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default Button;
