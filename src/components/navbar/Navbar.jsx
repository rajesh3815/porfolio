import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className={Styles.container}>
      <div onClick={() => scrollToSection("home")} className={Styles.logo}>
        <span>&lt;rajesh.dev&nbsp;/&gt;</span>
      </div>
      {/* <div className={Styles.container__wrapper}> */}
      <ul
        className={`${Styles.container__right} ${
          isToggle ? "" : Styles.displayNone
        } `}
      >
        <li>
          <Link to="/home" onClick={() => scrollToSection("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutme" onClick={() => scrollToSection("aboutme")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => scrollToSection("project")}>
            projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => scrollToSection("contactme")}>
            Contact
          </Link>
        </li>
      </ul>
      <div
        className={Styles.toggleMenue}
        onClick={() => setIsToggle(!isToggle)}
      >
        {isToggle ? <RxCross2 /> : <GiHamburgerMenu />}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
