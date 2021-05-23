import React from "react";

import { Button, Header } from "../../components";

import "./styles.scss";
import {
  trevaIcon,
  velocityIcon,
  zootvIcon,
  solayticIcon,
  lightIcon,
  hexLabIcon,
  foxhubIcon,
  avenIcon,
  amaraIcon,
} from "../../asserts/images";

const Home = () => {
  const cardData = [
    {
      titleUp: "Get More Visibility",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      titleUp: "Organize Your Candidates",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      titleUp: "Verify Their Abilities",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  const logoList = [
    trevaIcon,
    velocityIcon,
    zootvIcon,
    solayticIcon,
    lightIcon,
    hexLabIcon,
    foxhubIcon,
    avenIcon,
    amaraIcon,
  ];

  return (
    <div className="home-container">
      <div className="empty-container">
        <Header />
      </div>

      <div className="top-container">
        <div className="left-box">
          <div className="left-content">
            <p className="left-text">Welcome to </p>
            <p className="left-text">
              My<span>Jobs</span>
            </p>
          </div>
          <Button text={"Get Started"} />
        </div>

        <div className="right-content" />
      </div>

      <div className="middle-container">
        <p className="title">Why US</p>
        <div className="card-container">
          {cardData.map((item) => (
            <div className="card">
              <p className="card-title">{item.titleUp}</p>
              <p className="card-content">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bottom-container">
        <p className="title">Companies Who Trust Us</p>
        <div className="logo-container">
          {logoList.map((item) => (
            <img src={item} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
