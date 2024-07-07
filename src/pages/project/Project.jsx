// Project.js
import React from "react";
import Styles from "./Project.module.css";
import { projects } from "../../constants/Constant";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectCard from "../../components/projectcard/ProjectCard";
const Project = () => {
  const tastNotification = () => {
    toast.info("Click live to see project", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  return (
    <div id="project" className={Styles.container}>
      <h1>My Recent Work</h1>
      <h2>
        Here are a few past design projects I've worked on. Want to see more?{" "}
        <a href="mailto:rkraja730@gmail.com">Email me</a>
      </h2>
      <div className={Styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            background={project.background}
            title={project.title}
            status={project.status}
            technologies={project.technologies}
            description={project.description}
            codeLink={project.codeLink}
            liveLink={project.liveLink}
            onClick={tastNotification}
          />
        ))}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Project;
