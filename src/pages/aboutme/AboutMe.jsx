import React from "react";
import Styles from "./AboutMe.module.css";
import uiux from "../../images/uiux.png";
import frontend from "../../images/frontend.svg";
import full from "../../images/fullstack.png";

const AboutMe = () => {
  return (
    <div id="aboutme" className={Styles.container}>
      <div className={Styles.pitch}>
        <div className={Styles.pitchContainer}>
          <h1>Hy I am Rajesh Nice to Meet You</h1>
          <p>
            <span style={{ color: "red" }}>&lt;p&gt;</span> In the field of
            technology, Things i can do for you. As a full-stack developer
            specializing in the MERN stack, I have completed several projects in
            this field. Despite being a fresher, I can develop quality,
            scalable, and user-friendly web apps using my skills. Additionally,
            I have solved over 500+ coding questions on various platforms using
            the Java programming language, which enhanced my problem-solving
            abilities. Regarding my core technical skills, I excel in React and
            can create RESTful APIs in Express. Furthermore, I possess soft
            skills such as strong communication, a quick learning attitude,
            maintained an 8.5 CGPA throughout my career.{" "}
            <span style={{ color: "red" }}>&lt;/p&gt;</span>
          </p>
        </div>
      </div>
      <div className={Styles.skillblock}>
        <div className={Styles.skillblockDiv}>
          <span>
            <img src={uiux} alt="" />
          </span>

          <h1>Designer</h1>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p>Things I enjoy designing:</p>
          <p>UX, UI, Web, Apps, Logos</p>
          <p>Design Tools:</p>
          <ul>
            <li>Figma</li>
            <li>Pen&Paper</li>
            <li>Sketch</li>
            <li>Google Fonts</li>
          </ul>
        </div>
        <div className={Styles.skillblockDiv}>
          <span>
            <img src={frontend} alt="" />
          </span>

          <h1>Frontend Developer</h1>
          <p>
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
          <p>Languages I speak:</p>
          <p>HTML, CSS,javaScript,reactJs, Git</p>
          <p>Dev Tools:</p>
          <ul>
            <li>VS Code</li>
            <li>Bootstrap</li>
            <li>Chakra Ui</li>
            <li>Git&Github</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Chrome DevTools</li>
            <li>Redux DevTool</li>
            <li>React DevTool</li>
          </ul>
        </div>
        <div className={Styles.skillblockDiv} style={{ borderRight: "none" }}>
          <span>
            {" "}
            <img src={full} alt="" />
          </span>

          <h1>Full-Stack Developer</h1>
          <p>
            I contribute to translating conceptual ideas into fully functional
            products through the development .
          </p>
          <p>Languages I speak:</p>
          <p>HTML, CSS, JavaScript, React.js, Node.js, SQL</p>
          <p>Frameworks & Tools:</p>
          <ul>
            <li>React.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
