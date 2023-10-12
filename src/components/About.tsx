// Introduction and Details
import React from "react";
import IMG from "../assets/about.webp";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Me</h1>

      <div className="about-info">
        <p className="about-desc">
          A Software Engineer with Master's degree in Computer Science and 10
          years of experience working with top-tier product companies in field
          of Online-Advertising (media.net), Telecom (Amdocs) and CloudOps
          (Maplelabs).
          <br />
          <br />
          My passion is in exploring emerging technologies to create impactful
          solutions that resonate with everyday life.
          <br />
          <br />
          I am eager to contribute to the industry's evolution and be a catalyst
          for change. My dedication is towards creating innovative solutions
          that drive progress and improved user experiences.
          <br />
          <br />
          Let's embark on the tech journey together!
        </p>

        <div className="about-img">
          <div className="about-img-wrapper">
            <img src={IMG} alt="About Gaurav" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
