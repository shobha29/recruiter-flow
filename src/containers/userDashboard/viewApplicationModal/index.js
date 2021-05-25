import React, { useCallback } from "react";
import Modal from "react-modal";

import { closeIcon, cvIcon } from "../../../asserts/images";

import "./styles.scss";

const ViewApplicationModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleOnClick = useCallback((flag) => () => setIsModalVisible(flag), [
    setIsModalVisible,
  ]);

  const customStyles = {
    content: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      background:
        "transparent linear-gradient(232deg, rgba(48,63,96, .4) 0%, rgba(26,37,60, .4) 100%) 0% 0% no-repeat padding-box",
    },
  };

  const applicantList = [];

  // const applicantList = [
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  //   {
  //     name: "Eliza lucas",
  //     email: "abc123@email.com",
  //     skills: "Coding, designing, graphics, website, app ui",
  //   },
  // ];

  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={handleOnClick(!isModalVisible)}
      style={customStyles}
    >
      <div className="modal-container">
        <div className="modal-top-container">
          <p>Applicants for this job</p>
          <img
            alt="close"
            src={closeIcon}
            onClick={() => setIsModalVisible(false)}
          />
        </div>

        <p className="total-application">
          {applicantList.length !== 0
            ? `Total ${applicantList.length} applications`
            : `${applicantList.length} applications`}
        </p>

        <div className="application-container">
          {applicantList.length !== 0 ? (
            applicantList.map((item) => (
              <div className="application-card">
                <div className="card-top">
                  <div className="profile-circle">{item.name[0]}</div>
                  <div className="name-email">
                    <p className="bold-text">{item.name}</p>
                    <p className="fade-text">{item.email}</p>
                  </div>
                </div>
                <div className="card-bottom">
                  <p className="bold-text skill-text">Skills</p>
                  <p className="fade-text">{item.skills}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-application">
              <img
                className="application-icon"
                src={cvIcon}
                alt="application"
              />
              <p>No applications available</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ViewApplicationModal;
