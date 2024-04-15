import React, { Suspense, lazy } from "react";

import Home from "./pages/home/Home";
import AboutMe from "./pages/aboutme/AboutMe";
// import Project from "./pages/project/Project";
import ContactMe from "./pages/contactme/ContactMe";
import Navbar from "./components/navbar/Navbar";
const Project = lazy(() => import("./pages/project/Project.jsx"));
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <AboutMe />
      <Suspense fallback={<div>Loading...</div>}>
        <Project />
      </Suspense>
      <ContactMe />
    </div>
  );
};

export default App;
