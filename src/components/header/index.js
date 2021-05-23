import React from "react";
import { Link } from "react-router-dom";

import Button from "../button";

import "./styles.scss";

const Header = ({ rightContent = true }) => {
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-title">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            My<span>Jobs</span>
          </Link>
        </div>
        {rightContent && (
          <Button
            solidButton={false}
            text={"Login/Signup"}
            routeTo={"/login"}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
