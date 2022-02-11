import React from "react";
import * as componentStyles from "./About.module.css";

const About = () => {
  return (
    <div className={componentStyles.about}>
      <div className={componentStyles.box}>
        <div className={componentStyles.aboutTitle}>
          <h1 className={componentStyles.aboutTitleText}>About Me</h1>
        </div>
        <div className={componentStyles.aboutContent}>
          <p className={componentStyles.aboutContentText}>
            Hi, I'm Sayantan Mondal, a full stack developer based in New Delhi,
            India. I have a passion for learning new technologies and building
            things that help people. I am currently a second year undergraduate
            student at Manipal University Jaipur, pursuing my B.Tech in Computer
            and Communication Engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
