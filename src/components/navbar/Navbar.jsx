import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { ReactComponent as Moon } from "../../images/Moon.svg";
import { ReactComponent as Sun } from "../../images/Sun.svg";

const Navbar = () => {
  const [selectedTheme, setselectedTheme] = useState("dark");
  const [isToggle, setIsToggle] = useState(false);
  const setDark = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  const setLignt = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  useEffect(() => {
    setselectedTheme(localStorage.getItem("theme"));
    if (selectedTheme === "dark") {
      setDark();
    } else {
      setLignt();
    }
  }, []);
  const setToglethem = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLignt();
    }
  };
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
      <div className={Styles.darkMode}>
        <input
          className={Styles.darkModeInput}
          type="checkbox"
          id="darkmode-toggle"
          onChange={setToglethem}
          defaultChecked={selectedTheme==="dark"}
        />
        <label className={Styles.darkModeLabel} htmlFor="darkmode-toggle">
          <Sun className={Styles.ds} />
          <Moon className={Styles.dm} />
        </label>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
