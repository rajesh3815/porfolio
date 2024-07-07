import React from "react";
import Styles from "./Home.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import waving from "../../images/waving.png";
import css from "../../images/css (1).svg";
import html from "../../images/HTML5.svg";
import react from "../../images/react-1.svg";
import js from "../../images/javascript.svg";
import java from "../../images/java-icon.svg";
import tailwind from "../../images/tailwindcss-icon.svg";
import node from "../../images/nodejs-icon.svg";
import mongo from "../../images/mongo.png";
import redux from "../../images/redux.svg";
import resume from "../../images/Rajesh.resume.pdf";
// import profilepic from '../../images/project/profilepic.jpg'
const Home = () => {
  return (
    <div id="home" className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.content__hero}>
          <div className={Styles.content__hero__left}>
            <p className={Styles.content__hero__left__desc}>
              Full-Stack Web Developer
            </p>
            <img src={waving} className={Styles.imgMedia} alt="" />
            <p className={Styles.content__hero__left__about}>
              Hi, I'm Rajesh Kumar . A passionate Full-Stack Devloper based in
              India Odisha. 📍
            </p>
            <span className={Styles.spansLogo}>
              <a
                style={{ fontSize: "1.7rem" }}
                href="https://www.linkedin.com/in/rajesh111/"
                target="_blank"
                rel="noreferrer"
              >
                <CiLinkedin />
              </a>
              <a
                href="https://github.com/rajesh3815"
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub />
              </a>

              <a
                href="https://auth.geeksforgeeks.org/user/rajeshrout130/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
                target="_blank"
                rel="noreferrer"
              >
                <SiGeeksforgeeks />
              </a>
              <a
                href="https://leetcode.com/rkrajesh730/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLeetcode />
              </a>
            </span>
          </div>
          <div className={Styles.content__hero__img}></div>
        </div>
        <a
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            letterSpacing: ".5px",
            width: "100%",
          }}
          href={resume}
          target="_blank"
        >
          <button className={Styles.button29}>
            resume <LiaDownloadSolid />
          </button>
        </a>{" "}
        <div className={Styles.skills}>
          <p>Tech Stack</p>
          <div className={Styles.skillsLogo}>
            <span className={Styles.m}>
              <img src={html} alt="html" />
              <img src={css} alt="css" />
            </span>
            <span>
              <img src={js} alt="js" />
              <img src={java} alt="java" />
            </span>
            <span>
              <img src={react} alt="react" />
              <img src={redux} alt="redux" />
            </span>
            <span>
              <img src={node} alt="node" />
              <img src={mongo} alt="mongo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
