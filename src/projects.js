import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div>
      {/* <div className="projects-heading">
        <h1>Projects</h1>
        <hr />
      </div> */}

      <div>
        <div className="f1-project">
            <img></img>
          <h2>GridMaster</h2>
          <p>
            A fully functional Formula 1 optimal fantasy team selector as well
            as podium/grid finishes project that is coded in Python backend and
            a React.js frontend. Also makes use of web-scraping technologies,
            databases, flask server, etc
          </p>
          <p href="">Learn more here!</p>
        </div>
        <div className="personal-website">
          <h2>DineshKarnati.com</h2>
          <p>Personal Website showcasing all my frontend skills</p>
          <p href="">Learn more here!</p>
        </div>
        <div className="personal-website"></div>
      </div>
    </div>
  );
}

export default Projects;
