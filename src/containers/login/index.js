import React, { useState } from "react";

import Button from "../../components/button";
import Header from "../../components/header";

import "./styles.scss";
import { colors } from "../../styles/colors";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ isError: false, message: "" });

  const validateEmail = (input) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (state.email === "" || state.password === "") {
      setError({ isError: true, message: "All fields are required." });
    } else {
      if (validateEmail(state.email)) {
        if (state.password.length < 6) {
          setError({
            isError: true,
            message: "Password must be of at least 6 characters.",
          });
        } else {
          setError({
            isError: true,
            message: "Incorrect email address or password.",
          });
        }
      } else {
        setError({ isError: true, message: "Invalid email address." });
      }
    }
  };

  return (
    <div className="login">
      <div className="empty-container">
        <Header rightContent={false} />
      </div>

      <div className="login-container">
        <p className="title">Login</p>
        <p className="label">Email address</p>
        <input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={state.email}
          onFocus={() => setError({ isError: false, message: "" })}
          onChange={(e) => setState({ ...state, email: e?.target.value })}
          style={
            error.isError
              ? {
                  borderColor: colors.roseRed,
                  background: colors.dimGrey,
                }
              : { borderColor: null, background: null }
          }
        />
        <div className="password">
          <p className="label">Password</p>
          <p className="label blue-text">Forgot your password?</p>
        </div>
        <input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={state.password}
          onFocus={() => setError({ isError: false, message: "" })}
          onChange={(e) => setState({ ...state, password: e?.target.value })}
          style={
            error.isError
              ? {
                  borderColor: colors.roseRed,
                  background: colors.dimGrey,
                }
              : { borderColor: null, background: null }
          }
        />
        {error.isError && <p className="error-msg">{error.message}</p>}
        <div className="btn" onClick={() => handleSubmit()}>
          <Button text="Login" />
        </div>

        <div className="lower-text">
          <p>
            New to MyJobs? <span className="blue-text">Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
