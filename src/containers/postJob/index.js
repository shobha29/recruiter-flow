import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Header, Button } from "../../components";
import { homeIcon } from "../../asserts/images";

import { colors } from "../../styles/colors";

import "./styles.scss";

const PostJob = () => {
  const [state, setState] = useState({
    jobTitle: "",
    description: "",
    location: "",
  });
  const [titleError, setTitleError] = useState({ isError: false, message: "" });
  const [descriptionError, setDescriptionError] = useState({
    isError: false,
    message: "",
  });
  const [locationError, setLocationError] = useState({
    isError: false,
    message: "",
  });

  const handleSubmit = () => {
    if (
      state.jobTitle === "" &&
      state.description === "" &&
      state.location === ""
    ) {
      setTitleError({ isError: true, message: "" });
      setDescriptionError({ isError: true, message: "" });
      setLocationError({ isError: true, message: "All fields are mandatory." });
    } else {
      if (state.jobTitle === "") {
        setTitleError({ isError: true, message: "This field is mandatory." });
      }
      if (state.description === "") {
        setDescriptionError({
          isError: true,
          message: "This field is mandatory.",
        });
      }
      if (state.location === "") {
        setLocationError({
          isError: true,
          message: "This field is mandatory.",
        });
      }
    }
  };

  return (
    <div className="jobPost">
      <div className="jobPost-empty-container">
        <Header profile={true} isPost={true} />
      </div>

      <div className="top-job-home-container">
        <Link to="/userDashboard">
          <img src={homeIcon} alt="home" />
        </Link>
        <p>
          <Link
            to="/userDashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>Home </span>
          </Link>
          {`> Post a Job`}
        </p>
      </div>

      <div className="postJob-container">
        <p className="title">Post a Job</p>

        <div className="input-field">
          <label for="job-title">Job title*</label>
          <input
            placeholder="Enter job title"
            type="text"
            id="job-title"
            value={state.jobTitle}
            onFocus={() => setTitleError({ isError: false, message: "" })}
            onChange={(e) => setState({ ...state, jobTitle: e?.target.value })}
            style={{
              borderColor: titleError.isError ? colors.roseRed : null,
            }}
          />
        </div>
        {titleError.isError && (
          <p className="error-msg">{titleError.message}</p>
        )}

        <div className="input-field">
          <label for="job-description">Description*</label>
          <textarea
            placeholder="Enter job description"
            type="textarea"
            id="job-description"
            value={state.description}
            onFocus={() => setDescriptionError({ isError: false, message: "" })}
            onChange={(e) =>
              setState({ ...state, description: e?.target.value })
            }
            style={{
              borderColor: descriptionError.isError ? colors.roseRed : null,
            }}
          />
        </div>
        {descriptionError.isError && (
          <p className="error-msg">{descriptionError.message}</p>
        )}

        <div className="input-field">
          <label for="job-location">Location*</label>
          <input
            placeholder="Enter location"
            type="text"
            id="job-location"
            value={state.location}
            onFocus={() => setLocationError({ isError: false, message: "" })}
            onChange={(e) => setState({ ...state, location: e?.target.value })}
            style={{
              borderColor: locationError.isError ? colors.roseRed : null,
            }}
          />
        </div>

        {locationError.isError && (
          <p className="error-msg">{locationError.message}</p>
        )}

        <div className="btn" onClick={() => handleSubmit()}>
          <Button text="Post" />
        </div>
      </div>
    </div>
  );
};

export default PostJob;
