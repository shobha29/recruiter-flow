import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/button";
import Header from "../../components/header";
import { colors } from "../../styles/colors";
import { recruiterIcon, candidateIcon } from "../../asserts/images";
import { EMAIL_REGEX, PASSWORD_LENGTH } from "../../constants";

import "./styles.scss";

const Signup = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    skills: "",
  });
  const [nameError, setNameError] = useState({ isError: false, message: "" });
  const [emailError, setEmailError] = useState({ isError: false, message: "" });
  const [passError, setPassError] = useState({ isError: false, message: "" });

  const validateEmail = (input) => {
    if (input.match(EMAIL_REGEX)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (state.name === "") {
      setNameError({ isError: true, message: "The field is mandatory." });
    }

    if (state.email === "") {
      setEmailError({ isError: true, message: "The field is mandatory." });
    } else if (!validateEmail(state.email)) {
      setEmailError({
        isError: true,
        message: "Incorrect email address.",
      });
    }

    if (state.createPassword === "" || state.confirmPassword === "") {
      setPassError({ isError: true, message: "The field is mandatory." });
    } else if (state.createPassword !== state.confirmPassword) {
      setPassError({
        isError: true,
        message: "Passwords do not match.",
      });
    } else if (
      state.createPassword.length < PASSWORD_LENGTH ||
      state.confirmPassword.length < PASSWORD_LENGTH
    ) {
      setPassError({
        isError: true,
        message: "Password must be of at least 6 characters.",
      });
    }
  };

  return (
    <div className="signup">
      <div className="empty-container">
        <Header />
      </div>

      <div className="signup-container">
        <p className="title">Signup</p>

        <div className="input-field">
          <p className="top-text">I'm a*</p>
          <div className="top-btn-parent">
            <div className="top-btn recruiter-btn">
              <img src={recruiterIcon} alt="recruiter" />
              <p>Recruiter</p>
            </div>
            <div className="top-btn candidate-btn">
              <img src={candidateIcon} alt="candidate" />
              <p>Candidate</p>
            </div>
          </div>
        </div>

        <div className="input-field">
          <label for="full-name">Full Name*</label>
          <input
            placeholder="Enter your full name"
            type="text"
            id="full-name"
            value={state.name}
            onFocus={() => setNameError({ isError: false, message: "" })}
            onChange={(e) => setState({ ...state, name: e?.target.value })}
            style={{
              borderColor: nameError.isError ? colors.roseRed : null,
            }}
          />
        </div>
        {nameError.isError && <p className="error-msg">{nameError.message}</p>}

        <div className="input-field">
          <label for="email">Email Address*</label>
          <input
            placeholder="Enter your email"
            type="email"
            id="email"
            value={state.email}
            onFocus={() => setEmailError({ isError: false, message: "" })}
            onChange={(e) => setState({ ...state, email: e?.target.value })}
            style={{
              borderColor: emailError.isError ? colors.roseRed : null,
            }}
          />
        </div>
        {emailError.isError && (
          <p className="error-msg">{emailError.message}</p>
        )}

        <div className="password">
          <div className="input-field left-pass">
            <label for="pass1">Create Password*</label>
            <input
              placeholder="Enter your password"
              type="password"
              id="pass1"
              value={state.createPassword}
              onFocus={() => setPassError({ isError: false, message: "" })}
              onChange={(e) =>
                setState({ ...state, createPassword: e?.target.value })
              }
              style={{
                borderColor: passError.isError ? colors.roseRed : null,
              }}
            />
          </div>

          <div className="input-field right-pass">
            <label for="pass2">Confirm Password*</label>
            <input
              placeholder="Enter your password"
              type="password"
              id="pass2"
              value={state.confirmPassword}
              onFocus={() => setPassError({ isError: false, message: "" })}
              onChange={(e) =>
                setState({ ...state, confirmPassword: e?.target.value })
              }
              style={{
                borderColor: passError.isError ? colors.roseRed : null,
              }}
            />
          </div>
        </div>
        {passError.isError && <p className="error-msg">{passError.message}</p>}

        <div className="input-field">
          <label for="skill">Skills</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="skill"
            value={state.skills}
            onChange={(e) => setState({ ...state, skills: e?.target.value })}
          />
        </div>

        <div className="btn" onClick={() => handleSubmit()}>
          <Button text="Signup" />
        </div>

        <div className="lower-text">
          <p>
            Have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="blue-text"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
