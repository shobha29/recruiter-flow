import React, { useState } from "react";

import Button from "../../components/button";
import Header from "../../components/header";
import { colors } from "../../styles/colors";

import "./styles.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ isError: false, message: "" });

  const handleSubmit = () => {
    if (email === "") {
      setError({ isError: true, message: "The field is mandatory." });
    }
  };

  return (
    <div className="forgot-password">
      <div className="forgot-empty-container"></div>
      <Header isButton={true} />

      <div className="forgot-container">
        <p className="title">Forgot your password?</p>

        <p className="message-text">
          Enter the email associated with your account and we’ll send you
          instructions to reset your password.
        </p>

        <div className="input-field">
          <label for="email">Email address</label>
          <input
            placeholder="Enter your email"
            type="email"
            id="email"
            value={email}
            onFocus={() => setError({ isError: false, message: "" })}
            onChange={(e) => setEmail(e?.target.value)}
            style={{
              borderColor: error.isError ? colors.roseRed : null,
            }}
          />
        </div>
        {error.isError && <p className="error-msg">{error.message}</p>}

        <div className="btn" onClick={() => handleSubmit()}>
          <Button text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
