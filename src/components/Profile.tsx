// Avatar and Name
import React from "react";
import Avatar from "../assets/gg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Profile = () => {
  return (
    <div id="profile" className="profile">
      <div className="profile-container">
        <div className="profile-section">
          <img className="profile-img" alt="avatar" src={Avatar} />

          <div className="profile-content">
            <div className="profile-headline">Gaurav Gupta</div>
            <div className="profile-text">Software Engineer</div>
          </div>

          <div className="profile-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i>
                <FaGithub />
              </i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-link"
            >
              <i>
                <FaLinkedin />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
