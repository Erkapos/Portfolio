import React from "react";
import ReactDOM from "react-dom";
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
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 19"
          />
          <AboutContainer
            title="Experience"
            span=<span className="material-symbols-outlined">work</span>
            content="I have the greatest opportunity to intern at a startup made by PT
            DUTA LASERINDO METAL. There i work as a mobile developer where i
            used"
          />
          <AboutContainer
            title="Hobbies"
            span=<span className="material-symbols-outlined">
              sports_esports
            </span>
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 19"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
