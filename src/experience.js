import React from "react";
import "./experience.css";

function Experience() {
  return (
    <div>
      <div className="skills-heading">
        <h1>Experience</h1>
        <hr />
      </div>
      <div className="exp">
        <div class="exp-container">
          <div class="main-timeline">
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">1 Year</span>
                    <span class="year">2022</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">
                  Vandal Search | Software Development Engineering Intern
                </h5>
                <p class="description">
                  Utilized Next.js, CSS, HTML, and Material-UI to design and
                  develop the user interface to optimize the overall customer
                  experience. Gained insights into web-scraping mechanics and
                  database management by closely collaborating with my manager
                  through MongoDB. Attained a comprehensive understanding of
                  software development cycles within corporate environments,
                  marking my inaugural experience in this domain.
                </p>
              </div>
            </div>

            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">3 months</span>
                    <span class="year">2022</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">InPrintAI | Internship Shadowing</h5>
                <p class="description">
                  Briefly gained exposure to Python libraries such as Deepface
                  Live and DeepFake Lab, exploring their functionalities.
                  Introduced to Rest APIs and SQL Databases, observing their
                  applications and data transportation processes in a practical
                  setting. Contributed to webpage development, involved in
                  front-end feature implementation, and collaborated on
                  efficient database management for seamless integration.
                </p>
              </div>
            </div>

            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                <div class="date-outer">
                  <span class="date">
                    <span class="month">1 Year</span>
                    <span class="year">2021</span>
                  </span>
                </div>
              </div>
              <div class="timeline-content">
                <h5 class="title">Algebra Tutoring | Tutor</h5>
                <p class="description">
                  Facilitated algebra instruction for 5th to 8th-grade students
                  during summer sessions. Raised over $5000 for initiatives
                  supporting 'Sponsor-A-Child' and 'Sanitation, Hygiene, And
                  Empowerment' programs for the Girl Child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
