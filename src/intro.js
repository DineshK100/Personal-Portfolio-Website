import React, {useEffect} from "react";
import "./intro.css";

import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";

const Intro = () => {

  return (
    <div className="page-background" id="home">
      <div id="intro-wrapper" className="intro-wrapper">
        <section className="intro">
          <div className="introInfo">
            <span className="hi">Hi, my name is</span>
            <h1 className="introName">Dinesh Karnati.</h1>
            <h2 className="introTagline">Passionate Software Engineer</h2>
          </div>
        </section>

        <div className="image-1">
          <img alt="headshot" src="./headshot.jpeg" draggable="false" />
        </div>
        <div className="image-2">
          <img alt="another pic" src="./headshot.jpeg" draggable="false" />
        </div>
        <div className="image-3">
          <img alt="other pic pic" src="./headshot.jpeg" draggable="false" />
        </div>
        <div className="image-4">
          <img alt="other pic pic" src="./headshot.jpeg" draggable="false" />
        </div>
      </div>
      <div className="motivational-quote">
        <h1>
          "There will be obstacles. There will be doubters. There will be
          mistakes. But with hard work, there are no limits."
        </h1>
      </div>
      <div className="buttons">
        <button className="buttons-display" type="button">
          Portfolio
        </button>
        <button className="buttons-display" type="button">
          Resume
        </button>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
};

export default Intro;