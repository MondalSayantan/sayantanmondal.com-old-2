import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as componentStyles from "./Header.module.css";

const Header = () => {
  return (
    <div className={componentStyles.header}>
      <div className={componentStyles.headerText}>
        <h1 className={componentStyles.gradientText}>
          Hi. <br />
          I'm Sayantan.
        </h1>
      </div>
      <div>
        <StaticImage src="../../assets/images/header.png" />
      </div>
    </div>
  );
};

export default Header;
