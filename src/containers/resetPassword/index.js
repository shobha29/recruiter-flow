import React, { useState } from "react";

import Button from "../../components/button";
import Header from "../../components/header";
import { colors } from "../../styles/colors";
import { PASSWORD_LENGTH } from "../../constants";

import "./styles.scss";

const ResetPassword = () => {
  const [state, setState] = useState({ newPassword: "", confirmPassword: "" });
  const [error, setError] = useState({ isError: false, message: "" });

  const handleSubmit = () => {
    if (state.newPassword === "" || state.confirmPassword === "") {
      setError({ isError: true, message: "All field are mandatory." });
    } else if (state.newPassword !== state.confirmPassword) {
      setError({
        isError: true,
        message: "Passwords do not match.",
      });
    } else if (
      state.newPassword.length < PASSWORD_LENGTH ||
      state.confirmPassword.length < PASSWORD_LENGTH
    ) {
      setError({
        isError: true,
        message: "Password must be of at least 6 characters.",
      });
    }
  };

  return (
    <div className="reset-password">
      <div className="empty-container">
        <Header isButton={true} />
      </div>

      <div className="reset-container">
        <p className="title">Reset your password?</p>

        <p className="message-text">Enter your new password below.</p>

        <div className="input-field">
          <label for="newPass">New password</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="newPass"
            value={state.newPassword}
            onFocus={() => setError({ isError: false, message: "" })}
            onChange={(e) =>
              setState({ ...state, newPassword: e?.target.value })
            }
            style={{
              borderColor: error.isError ? colors.roseRed : null,
            }}
          />
        </div>

        <div className="input-field">
          <label for="confirmPass">Confirm new password</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="confirmPass"
            value={state.confirmPassword}
            onFocus={() => setError({ isError: false, message: "" })}
            onChange={(e) =>
              setState({ ...state, confirmPassword: e?.target.value })
            }
            style={{
              borderColor: error.isError ? colors.roseRed : null,
            }}
          />
        </div>
        {error.isError && <p className="error-msg">{error.message}</p>}

        <div className="btn" onClick={() => handleSubmit()}>
          <Button text="Reset" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
