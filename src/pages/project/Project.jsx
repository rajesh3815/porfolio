import React from "react";
import Styles from "./Project.module.css";
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
            <img src="" alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>Express</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>Creating Notes in a particular way to handels</p>
            <div className={Styles.btnDiv}>
              <button>code</button> <button>Live</button>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.imgcontainer}>
            <img src="" alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>Express</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>Creating Notes in a particular way to handels</p>
            <div className={Styles.btnDiv}>
              <button>code</button> <button>Live</button>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.imgcontainer}>
            <img src="" alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>Express</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>Creating Notes in a particular way to handels</p>
            <div className={Styles.btnDiv}>
              <button>code</button> <button>Live</button>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.imgcontainer}>
            <img src="" alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>Express</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>Creating Notes in a particular way to handels</p>
            <div className={Styles.btnDiv}>
              <button>code</button> <button>Live</button>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.imgcontainer}>
            <img src="" alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>Express</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>Creating Notes in a particular way to handels</p>
            <div className={Styles.btnDiv}>
              <button>code</button> <button>Live</button>
            </div>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.imgcontainer}>
            <img src="" alt="" />
          </div>
          <div className={Styles.carddetails}>
            <span>
              <p>Pocket Notes</p>
              <p>Active</p>
            </span>
            <div>
              <span>Express</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
            <p>Creating Notes in a particular way to handels</p>
            <div className={Styles.btnDiv}>
              <button>code</button> <button>Live</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
