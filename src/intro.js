import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="page-background">
      <div id="intro-wrapper" className="intro-wrapper">
        <section className="intro">
          <div className="introInfo">
            <span className="hi">Hi, my name is</span>
            <h1 className="introName">Dinesh Karnati.</h1>
            <h2 className="introTagline">Passionate Software Engineer</h2>
          </div>
        </section>

          <div class="image-1">
            <img alt="headshot" src="./headshot.jpeg" />
          </div>
          <div class="image-2">
            <img alt="another pic" src="./headshot.jpeg" />
          </div>
          <div class="image-3">
            <img alt="other pic pic" src="./headshot.jpeg" />
          </div>
          <div class="image-4">
            <img alt="other pic pic" src="./headshot.jpeg" />
          </div>

          <div>
            
          </div>
      </div>

    
    </div>
  );
};

export default Intro;
