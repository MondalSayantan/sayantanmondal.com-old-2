import React, { useState } from "react";
import * as componentStyles from "./NavBar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    {/* <p>
      <a href="#home">Home</a>
    </p> */}
    <p>
      <a href="#about">About Me</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
    <p>
      <a href="#contact">Contact</a>
    </p>
    <p>
      <a
        href="https://blog.sayantanmondal.com/"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        Blog
      </a>
    </p>
  </>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className={componentStyles.navbar} id={"navbar"}>
      <div className={componentStyles.navbarLinks}>
        <div className={componentStyles.navbarLogo}>
          <p>Sayantan Mondal</p>
        </div>
        <div className={componentStyles.navbarMenu}>
          <Menu />
        </div>
      </div>
      <div className={componentStyles.navbarToggle}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className={componentStyles.navbarToggleMenu}>
            {/* <div className=" "> */}
            <Menu />
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
