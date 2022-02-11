import React from "react";
import * as componentStyles from "./Skills.module.css";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/Io";
import { FaReact, FaNodeJs } from "react-icons/Fa";
import { RiGatsbyFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className={componentStyles.skills}>
      <div className={componentStyles.skillsContainer}>
        <h1 className={componentStyles.skillsTitle}>Skills</h1>
        <div className={componentStyles.skillsLogo}>
          <div>
            <IoLogoHtml5 color="#fff" size={50} />
          </div>
          <div>
            <IoLogoCss3 color="#fff" size={50} />
          </div>
          <div>
            <IoLogoJavascript color="#fff" size={50} />
          </div>
          <div>
            <FaReact color="#fff" size={50} />
          </div>
          <div>
            <RiGatsbyFill color="#fff" size={50} />
          </div>
          <div>
            <FaNodeJs color="#fff" size={50} />
          </div>
          <div>
            <SiMongodb color="#fff" size={50} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
