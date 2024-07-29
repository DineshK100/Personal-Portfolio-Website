import React from "react";
import "./about.css";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function About() {
  const navigateToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/drkarnat/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const navigateToGmail = () => {
    window.open(
      "mailto:dinesh.r.karnati@gmail.com",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const navigateToGithub = () => {
    window.open(
      "https://github.com/DineshK100",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="about">
      <div className="about-card">
        <h2>About Me</h2>
        <div className="media">
          <FaLinkedin onClick={navigateToLinkedIn} className="media-item" />
          <BiLogoGmail onClick={navigateToGmail} className="media-item" />
          <BsGithub onClick={navigateToGithub} className="media-item" />
        </div>

        <p>
          Passionate and self-motivated programmer adept in object-oriented
          programming, algorithm development, and core programming principles.
          Actively pursuing a summer internship in software development to apply
          my skills in a real-world setting.
        </p>

        <p>
          Passionate and self-motivated programmer adept in object-oriented
          programming, algorithm development, and core programming principles.
          Actively pursuing a summer internship in software development to apply
          my skills in a real-world setting.
        </p>

        <p>
          Passionate and self-motivated programmer adept in object-oriented
          programming, algorithm development, and core programming principles.
          Actively pursuing a summer internship in software development to apply
          my skills in a real-world setting.
        </p>

        <p>
          Passionate and self-motivated programmer adept in object-oriented
          programming, algorithm development, and core programming principles.
          Actively pursuing a summer internship in software development to apply
          my skills in a real-world setting.
        </p>
      </div>
    </div>
  );
}

export default About;
