// Skills
import React from "react";
import {
  FaJs,
  FaReact,
  FaGithub,
  FaDocker,
  FaNodeJs,
  FaCloud,
} from "react-icons/fa";

const Skills = () => {
  const skillsArr = [
    {
      name: "JavaScript",
      icon: FaJs,
    },
    {
      name: "NodeJS",
      icon: FaNodeJs,
    },
    {
      name: "Reactjs",
      icon: FaReact,
    },
    {
      name: "Cloud",
      icon: FaCloud,
    },
    {
      name: "Git",
      icon: FaGithub,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
  ];

  return (
    <div id="skills" className="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-holder">
        {skillsArr.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <i key={index} className="skill-cards">
              <Icon className="skill-icon" />
              <p className="skill">{skill.name}</p>
            </i>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
