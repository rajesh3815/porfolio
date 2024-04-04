import React from "react";
import Styles from "./Project.module.css";
const Project = () => {
  return (
    <div id="project" className={Styles.container}>
      <h1>My Recent Work</h1>
      <h2>
        Here are a few past design projects I've worked on. Want to see more?{" "}
        <a href="">Email me</a>
      </h2>
      <div className={Styles.projects}>
        
      </div>
    </div>
  );
};

export default Project;
