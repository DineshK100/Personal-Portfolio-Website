import React, { useState } from "react";
import "./skills.css";
import Modal from "./components/modal";

const skillsData = {
  programmingLanguages: [
    {
      name: "Java",
      description:
        "4+ years experience in Java programming for web applications. Initially learnt in high school, I have developed many projects such as card game replica algorithms and compete in programs like Advent Of Code through it. This is my preferred programming language",
    },
    {
      name: "Python",
      description:
        "3+ years experience in Python for data analysis, machine learning, and web development. Utilized python for my Formula 1 Fantasy Predictor project and have done numerous experimental learning projects and tutorials in it",
    },
    {
      name: "c",
      description: "1 year experience in C through the C course at college",
    },
    {
      name: "ReactJS",
      description:
        "3+ years proficient in ReactJS for dynamic web development. Utilized it in this website as well as my other projects.",
    },
    {
      name: "NextJS",
      description:
        "1 year experience in NextJS (used in my Vandal Search internship) for web development.",
    },
    {
      name: "Javascript",
      description:
        "3+ years experience in JavaScript including React and Next for web development",
    },
    {
      name: "R",
      description:
        "1 year experience in R for data analysis. Was taught R in my Statistics class in college",
    },
    {
      name: "HTML",
      description:
        "4+ years experience in HTML for web development. Learnt HTML in middle school and have used it ever since to structure my websites",
    },
    {
      name: "CSS",
      description:
        "4+ years experience in CSS for frontend web design. Learnt CSS along with HTML and have used it in nearly every project for styling",
    },
    {
      name: "DotNet",
      description: "1 year experience in .NET for a high school coding course",
    },
  ],
  frontend: [
    {
      name: "Bootstrap",
      description:
        "1 year experience in utlizing Bootstrap to enhance my frontend web design. Made use of this software in this website as well as my F1 Fantasy Predictor project",
    },
    {
      name: "MaterialUI",
      description:
        "1 year experience in using MUI. Was taught it when I was interning for Vandal Search to develop universal styles for the website",
    },
    {
      name: "Tailwind",
      description:
        "2 months experience in Tailwind. Experimented with Tailwind in contrast to Bootstrap and while doing so learned quite a few things about the software",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      description:
        "2+ years experience in MongoDB. Learnt it when I was interning for Vandal Search and have utilized it along with flask for my F1 project",
    },
    {
      name: "PostgreSQL",
      description:
        "2 months experience in PostgreSQL. I had to learn it to utilize it with my flask and react application in my f1 project",
    },
  ],
  web: [
    {
      name: "Flask",
      description:
        "1+ years experience in Flask. Mainly used and learnt it when I was developing my backend server for the F1 application",
    },
    {
      name: "Django",
      description:
        "3 months experience in Django. Learnt this when I was getting into Python, developed a small food store application through a course aimed at learning the fundamentals of Django",
    },
  ],
  tools: [
    {
      name: "Eclipse",
      description:
        "My regular code editor when utilizing Java. Mainly used in college for school activities",
    },
    {
      name: "PyCharm",
      description:
        "Used when I want to develop a project solely in Python. I used it when I was first learning Python and Django",
    },
    {
      name: "Git",
      description: "Regular software used for code manangement",
    },
    {
      name: "VSCode",
      description: "Day-to-day code editor for nearly all my projects",
    },
    {
      name: "VS",
      description:
        "Used when I was learning .NET for my high school coding class",
    },
    {
      name: "AndroidStudio",
      description:
        "Use when I am developing software for the App Development Club at my university",
    },
  ],
};

function Skills() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleSkillClick = (description) => {
    setModalContent(description);
    setShowModal(true);
  };

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
          {skillsData.programmingLanguages.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item"
              onClick={() => handleSkillClick(skill.description)}
            >
              <img
                src={`./${skill.name.toLowerCase().replace(" ", "")}.png`}
                alt={skill.name}
                draggable="false"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="frontend">
          <h1>Frontend</h1>
        </div>
        <div className="image-grid">
          {skillsData.frontend.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item"
              onClick={() => handleSkillClick(skill.description)}
            >
              <img
                src={`./${skill.name.toLowerCase().replace(" ", "")}.png`}
                alt={skill.name}
                draggable="false"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="databases">
          <h1>Databases</h1>
        </div>
        <div className="image-grid">
          {skillsData.databases.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item"
              onClick={() => handleSkillClick(skill.description)}
            >
              <img
                src={`./${skill.name.toLowerCase().replace(" ", "")}.png`}
                alt={skill.name}
                draggable="false"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="web">
          <h1>Web Frameworks</h1>
        </div>
        <div className="image-grid">
          {skillsData.web.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item"
              onClick={() => handleSkillClick(skill.description)}
            >
              <img
                src={`./${skill.name.toLowerCase().replace(" ", "")}.png`}
                alt={skill.name}
                draggable="false"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="tools">
          <h1>Tools</h1>
        </div>
        <div className="image-grid">
          {skillsData.tools.map((skill, idx) => (
            <div
              key={idx}
              className="skill-item"
              onClick={() => handleSkillClick(skill.description)}
            >
              <img
                src={`./${skill.name.toLowerCase().replace(" ", "")}.png`}
                alt={skill.name}
                draggable="false"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        content={modalContent}
      />
    </div>
  );
}

export default Skills;
