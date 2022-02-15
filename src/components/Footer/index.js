import React from "react";
import * as componentStyles from "./Footer.module.css";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

const Footer = () => {
  return (
    <div className={componentStyles.footer}>
      <a href="#navbar">
        <p className={componentStyles.logo}>SM</p>
      </a>
      <p>
        Made with <AiFillHeart color="#e31b23" /> and{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        by{" "}
        <a
          href="https://www.github.com/mondalsayantan"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          MondalSayantan
        </a>
      </p>
    </div>
  );
};

export default Footer;
