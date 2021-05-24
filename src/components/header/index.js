import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../button";
import { downArrowIcon } from "../../asserts/images";

import { colors } from "../../styles/colors";

import "./styles.scss";

const Header = ({ isButton = false, profile = false, isPost = false }) => {
  const [isLogout, setIsLogout] = useState(false);

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
            <Link
              to="/userDashboard/postJob"
              style={{ textDecoration: "none" }}
            >
              <p>Post a Job</p>
            </Link>
            {isPost && <div className="post-blue-line" />}
          </div>
          <div className="profile-circle">R</div>
          <img
            alt="down arrow"
            src={downArrowIcon}
            onClick={() => setIsLogout(!isLogout)}
          />
          {isLogout && (
            <div className="logout">
              <div className="logout-triangle" />
              <Link
                to="/"
                style={{ textDecoration: "none", color: colors.blue }}
              >
                <p>Logout</p>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
