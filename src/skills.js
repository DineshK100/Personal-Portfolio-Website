import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skills-heading">
        <h1>Skills</h1>
        <hr />
      </div>

      <div>
        <div className="skills-header">
          <h1>Programming Languages</h1>
        </div>
        <div className="image-grid">
          <img alt="java" src="./java.png" draggable="false" />
          <img alt="python" src="./python.png" draggable="false" />
          <img alt="c" src="./c.png" draggable="false" />
          <img alt="react" src="./download.png" draggable="false" />
          <img alt="next" src="./nextjs.png" draggable="false" />
          <img alt="js" src="./js.jpeg" draggable="false" />
          <img alt="r" src="./r.jpeg" draggable="false" />
          <img alt="html" src="./html.png" draggable="false" />
          <img alt="css" src="./css.png" draggable="false" />
        </div>
      </div>

      <div>
        <div className="frontend">
          <h1>Frontend</h1>
        </div>
        <div className="image-grid">
          <img alt="bootstrap" src="./boostrap.png" draggable="false" />
          <img alt="mui" src="./mui.jpeg" draggable="false" />
          <img alt="tailwind" src="./tailwind.png" draggable="false" />
        </div>
      </div>

      <div>
        <div className="databases">
          <h1>Databases</h1>
        </div>
        <div className="image-grid">
          <img alt="mongo" src="./mongo.png" draggable="false" />
          <img alt="post" src="./postgre.png" draggable="false" />
        </div>
      </div>

      <div>
        <div className="web">
          <h1>Web Frameworks</h1>
        </div>
        <div className="image-grid">
          <img alt="flask" src="./flask.png" draggable="false" />
          <img alt="django" src="./django.png" draggable="false" />
        </div>
      </div>

      <div>
        <div className="tools">
          <h1>Tools</h1>
        </div>
        <div className="image-grid">
          <img alt="eclipse" src="./eclipse.png" draggable="false" />
          <img alt="pycharm" src="./pycharm.jpeg" draggable="false" />
          <img alt="git" src="./git.png" draggable="false" />
          <img alt="vs" src="./vs.png" draggable="false" />
          <img alt="flask" src="./flask.png" draggable="false" />
          <img
            alt="androidstudio"
            src="./androidstudio.png"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
