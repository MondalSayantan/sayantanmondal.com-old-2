import React from "react";
import Header from "../../Header";
import NavBar from "../../NavBar";
import About from "../../About";
import Skills from "../../Skills";

import * as componentStyles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={componentStyles.background}>
        <NavBar />
        <Header />
        {/* </div> */}
        {/* <div className={componentStyles.about}> */}
        <About />
        {/* </div> */}
      </div>
      <div className={componentStyles.skills}>
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
