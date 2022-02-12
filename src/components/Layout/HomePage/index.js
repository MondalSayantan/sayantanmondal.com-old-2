import React from "react";
import Header from "../../Header";
import NavBar from "../../NavBar";
import About from "../../About";
import Skills from "../../Skills";
import Projects from "../../Projects";

import * as componentStyles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={componentStyles.background}>
        <NavBar />
        <Header />
        <About />
      </div>
      <div className={componentStyles.skills}>
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default HomePage;
