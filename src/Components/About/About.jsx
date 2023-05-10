import React from "react";
import "./About.css";
import AboutContainer from "./About-container";

function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h2>
          <span className="about-heading">about me</span>
        </h2>
        <div className="about-grid">
          <AboutContainer
            title="Education"
            span=<span className="material-symbols-outlined">school</span>
            content="Fresh graduate from Universitas Pelita Harapan with informatics major on May 2023 with 3.4 GPA. Furthermore, took the time to learn more front-end materials by taking Udemy online course."
          />
          <AboutContainer
            title="Experience"
            span=<span className="material-symbols-outlined">work</span>
            content="I have the privilege to intern at a startup made by PT
            DUTA LASERINDO METAL, NUVOTEK. There i work as a mobile developer where i
            used Flutter to develop the front-end and new features on a 6 months internship."
          />
          <AboutContainer
            title="Hobbies"
            span=<span className="material-symbols-outlined">
              sports_esports
            </span>
            content="Likes playing games from FPS, MOBA, to rhythm games, listening to music, and sleeping. Currently, making an effort to learn how to draw."
          />
        </div>
      </div>
    </div>
  );
}

export default About;
