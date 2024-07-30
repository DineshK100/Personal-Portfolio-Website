import React from "react";
import "./projects.css";
import Carousel from "./components/Carousel";
import slidesData from "./carouselData.json";

function Projects() {
  const { slides } = slidesData;

  return (
    <div className="projects">
      <div className="skills-heading">
        <h1>Projects</h1>
        <hr />
      </div>

      <div>
        <div className="f1-project">
          <Carousel data={slides} className = "f1-images"/>
          <div className="f1-container">
            <div className="f1-info">
              <h2>GridMaster</h2>
              <p>
                A fully functional Formula 1 optimal fantasy team selector as
                well as podium/grid finishes project that is coded in Python
                backend and a React.js frontend. Also makes use of web-scraping
                technologies, databases, flask server, etc
              </p>
            </div>

            <a className = "link" target="_blank" href='https://github.com/DineshK100/Formula-1-Fantasy-Predictor'>Learn more here!</a>
          </div>
        </div>

        <div className="personal-website">
          
          <div className="personal-container">
            <div className="personal-info">
              <h2>Personal Website</h2>
              <p>
                A fully functional Formula 1 optimal fantasy team selector as
                well as podium/grid finishes project that is coded in Python
                backend and a React.js frontend. Also makes use of web-scraping
                technologies, databases, flask server, etc
              </p>
            </div>

            <a className = "link" target="_blank" href='https://github.com/DineshK100/Portfolio'>Learn more here!</a>
          </div>

          <Carousel data={slides} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
