import React from "react";

import { writingIcon, homeIcon, locationIcon } from "../../asserts/images";
import { Button, Header } from "../../components";

import "./styles.scss";

const UserDashboard = () => {
  // const posts = 0;
  const posts = [
    {
      title: "UI UX Designer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
      location: "Bengaluru",
    },
    {
      title: "Front-end Designer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
      location: "Gurgaon",
    },
    {
      title: "Java Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
      location: "Bengaluru",
    },
    {
      title: "UI UX Designer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
      location: "Bengaluru",
    },
    {
      title: "Front-end Designer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
      location: "Gurgaon",
    },
    {
      title: "Java Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…",
      location: "Bengaluru",
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-empty-container">
        <Header profile={true} />
      </div>

      <div className="job-top-container">
        <div className="top-home-container">
          <img src={homeIcon} alt="home" />
          <p>Home</p>
        </div>
        <p className="job-big-text">Jobs posted by you</p>

        {posts.length && (
          <div className="all-posts-container">
            {posts.map((item) => (
              <div className="job-card">
                <p className="job-card-title">{item.title}</p>
                <p className="job-card-content">{item.content}</p>
                <div className="job-card-bottom">
                  <div>
                    <img src={locationIcon} alt="location" />
                    <p className="location-text">{item.location}</p>
                  </div>
                  <p className="view-application-btn">View Application</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {!posts.length && (
        <div className="no-job-container">
          <img src={writingIcon} alt="writing" />
          <p className="post-show-text">Your posted jobs will show here!</p>
          <Button text="Post a Job" />
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
