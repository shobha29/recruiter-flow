import React from "react";
import { Link } from "react-router-dom";

import Button from "../button";
import { downArrowIcon } from "../../asserts/images";

import "./styles.scss";

const Header = ({ isButton = false, profile = false, isPost = false }) => {
  return (
    <div className="header-container">
      <div className="header-title">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          My<span>Jobs</span>
        </Link>
      </div>

      {isButton && (
        <Button solidButton={false} text={"Login/Signup"} routeTo={"/login"} />
      )}

      {profile && (
        <div className="right-content">
          <div className="post-job">
            <p>Post a Job</p>
            {isPost && <div className="post-blue-line" />}
          </div>
          <div className="profile-circle">R</div>
          <img alt="down arrow" src={downArrowIcon} />
        </div>
      )}
    </div>
  );
};

export default Header;
