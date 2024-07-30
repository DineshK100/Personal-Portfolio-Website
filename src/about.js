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
          Hello! I'm a junior at North Carolina State University, majoring in
          Computer Science. My academic journey has been a blend of rigorous
          coursework and hands-on projects, which have significantly honed my
          technical skills and problem-solving abilities.
        </p>

        <p>
          I love all things tech-related and am actively pursuing a research
          position in Artificial Intelligence and Machine Learning. My academic
          background includes a diverse range of courses such as Data Structures
          & Algorithms, C/Software Tools, Automata, Grammars, & Computability,
          Intro Engineering, and Probability & Statistics. This semester, I'm
          diving deeper into the field with classes in Intro to AI, Natural
          Language Processing, Operating Systems, Software Development
          Fundamentals, and Linear Algebra.
        </p>

        <p>
          When I'm not immersed in my studies, you'll likely find me engaging in
          one of my many hobbies. I love playing basketball, which keeps me
          active and teaches me the importance of teamwork and strategy. As a
          fervent fan of Formula 1, I enjoy following the races and learning
          about the technological innovations in the sport. Creating
          applications is one of my favorite pastimes. I enjoy the challenge of
          turning ideas into functional software and am always looking for new
          technologies and frameworks to learn. Volunteering is also a
          significant part of my life, allowing me to give back to the community
          and gain new perspectives and skills.
        </p>

        <p>
          Looking ahead, I aspire to secure a job in the Data Science or AI
          fields while conducting research on the side. My goal is to produce
          innovative solutions that improve the lives of those around me. I am
          driven by curiosity and a desire to make a difference, valuing
          continuous learning, collaboration, and integrity.
        </p>

        <p>
          With a strong foundation in computer science and a passion for
          technology, I am excited about the future and eager to see where my
          academic and professional journey will take me.
        </p>
      </div>
    </div>
  );
}

export default About;
