import React from "react";
import * as componentStyles from "./Skills.module.css";
import { IoLogoHtml5 } from "@react-icons/all-files/io/IoLogoHtml5";
import { IoLogoCss3 } from "@react-icons/all-files/io/IoLogoCss3";
import { IoLogoJavascript } from "@react-icons/all-files/io/IoLogoJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { RiGatsbyFill } from "@react-icons/all-files/ri/RiGatsbyFill";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";

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
