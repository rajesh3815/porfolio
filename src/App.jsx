import React from "react";

import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutme/AboutMe";
import Project from "./pages/project/Project";
import ContactMe from "./pages/contactme/ContactMe";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <AboutMe />
      <Project />
      <ContactMe />
    </div>
  );
};

export default App;
