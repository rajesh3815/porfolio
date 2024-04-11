import React from "react";
import Styles from "./Project.module.css";
import pocket from "../../images/notes.webp";
import job from "../../images/project/job-description.png";
import stp from "../../images/project/game.png";
import quize from "../../images/project/quize.png";
import exten from "../../images/project/tracking.svg";
import ball from "../../images/project/ballbounce.png";
import resume from "../../images/project/icon-resume.svg";
import prof from "../../images/project/user.png";
import cofee from "../../images/project/coffee.png";
// import land from "../../images/project/landing-page.png";

const Project = () => {
  return (
    <div id="project" className={Styles.container}>
      <h1>My Recent Work</h1>
      <h2>
        Here are a few past design projects I've worked on. Want to see more?{" "}
        <a href="mailto:rkraja730@gmail.com">Email me</a>
      </h2>
      <div className={Styles.projects}>
        <div className={Styles.card}>
          <div className={Styles.imgcontainer}>
            <img src={pocket} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>React</span>
              <span>JavaScript</span>
              <span>tailwind</span>
            </div>
            <p>
              Save notes efficiently within the app for easy access and
              organization.
            </p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/react-module-test"
                target="_blank"
              >
                <button>code</button>
              </a>
              <a href="https://my-pockets-notes.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#76e0f5" }}
            className={Styles.imgcontainer}
          >
            <img src={resume} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Resume Builder</p>
              <p>Active</p>
            </span>
            <div>
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
            <p>
              It helps to Build Your resume and can download in a pdf format.
            </p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/resume-Builder"
                target="_blank"
              >
                <button>code</button>
              </a>
              <a
                href="https://resume-for-yourself.netlify.app/"
                target="_blank"
              >
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#fa8c84" }}
            className={Styles.imgcontainer}
          >
            <img src={job} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Job Listing</p>
              <p>Active</p>
            </span>
            <div>
              <span>React</span>
              <span>Express</span>
              <span>mongoDB</span>
            </div>
            <p>
              Streamlined app connecting job seekers with employers for seamless
              hiring.
            </p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/joblisting-fronted"
                target="_blank"
              >
                <button>code</button>
              </a>
              <a href="https://careerjunction.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#d384fa" }}
            className={Styles.imgcontainer}
          >
            <img src={stp} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Rock-paper-scissors</p>
              <p>Active</p>
            </span>
            <div>
              <span>Html</span>
              <span>localStorag</span>
              <span>JavaScript</span>
            </div>
            <p>
              Interactive web app for playing rock-paper-scissors with computer{" "}
            </p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/javascriptModuleProject"
                target="_blank"
              >
                <button>code</button>
              </a>
              <a href="https://stp-game.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#4753f5" }}
            className={Styles.imgcontainer}
          >
            <img src={quize} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Quize App</p>
              <p>Active</p>
            </span>
            <div>
              <span>Html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <p>
              Engaging quiz web app for interactive learning and knowledge
              assessment
            </p>
            <div className={Styles.btnDiv}>
              <a href="https://github.com/rajesh3815/Quiz-app" target="_blank">
                <button>code</button>
              </a>
              <a href="https://teal-mousse-83b62d.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#95f547" }}
            className={Styles.imgcontainer}
          >
            <img src={exten} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Chrome Extension</p>
              <p>Active</p>
            </span>
            <div>
              <span>Html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <p>
              Chrome extension to save and organize tab links for later access
            </p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/chromeExtension"
                target="_blank"
              >
                <button>code</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#7cd5f2" }}
            className={Styles.imgcontainer}
          >
            <img src={prof} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Profile Finder</p>
              <p>Active</p>
            </span>
            <div>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>
              GitHub profile finder web app to search and discover user
              profiles.
            </p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/wdp-main-projesct"
                target="_blank"
              >
                <button>code</button>
              </a>
              <a
                href="https://astonishing-buttercream-f12e66.netlify.app/"
                target="_blank"
              >
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#bf7cf2" }}
            className={Styles.imgcontainer}
          >
            <img src={ball} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Bounceball-Game</p>
              <p>Active</p>
            </span>
            <div>
              <span>Html</span>
              <span>css</span>
              <span>javaScript</span>
            </div>
            <p>Bounce Ball - test your reflexes!</p>
            <div className={Styles.btnDiv}>
              <a href="https://github.com/rajesh3815/Games" target="_blank">
                <button>code</button>
              </a>
              <a href="https://bounceballsgame.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>

        <div className={Styles.card}>
          <div
            style={{ background: "#a3651d" }}
            className={Styles.imgcontainer}
          >
            <img src={cofee} alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Landing Page</p>
              <p>Active</p>
            </span>
            <div>
              <span>Html</span>
              <span>css</span>
            </div>
            <p>Simple responsive landing page</p>
            <div className={Styles.btnDiv}>
              <a
                href="https://github.com/rajesh3815/landing-page"
                target="_blank"
              >
                <button>code</button>
              </a>
              <a href="https://cofeeshopslanding.netlify.app/" target="_blank">
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
