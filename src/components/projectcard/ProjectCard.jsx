// ProjectCard.js
import React from "react";
import Styles from "./ProjectCard.module.css";
import LazyLoad from "react-lazyload";
const ProjectCard = ({
  image,
  background,
  title,
  status,
  technologies,
  description,
  codeLink,
  liveLink,
  onClick,
}) => (
  <div onClick={onClick} className={Styles.card}>
    <div style={{ background }} className={Styles.imgcontainer}>
      <LazyLoad height={200} offset={100}>
        <img src={image} alt={title} />
      </LazyLoad>
    </div>
    <div className={Styles.carddetails}>
      <span>
        <p>{title}</p>
        <p>{status}</p>
      </span>
      <div>
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
      <p>{description}</p>
      <div className={Styles.btnDiv}>
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button onClick={(e) => e.stopPropagation()}>Code</button>
        </a>
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <button onClick={(e) => e.stopPropagation()}>Live</button>
          </a>
        )}
      </div>
    </div>
  </div>
);

export default ProjectCard;
