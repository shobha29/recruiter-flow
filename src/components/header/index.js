import React from "react";
import Button from "../button";

import "./styles.scss";

const Header = ({ rightContent = true }) => {
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-title">
          <p>
            My<span>Jobs</span>
          </p>
        </div>
        {rightContent && <Button solidButton={false} text={"Login/Signup"} />}
      </div>
    </div>
  );
};

export default Header;
