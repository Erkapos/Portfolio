import React from "react";
import ReactDOM from "react-dom";
import "./Projects.css";
import pokemon from "../Projects/images/pokemon-info-finder-image.png";
import udemy from "../Projects/images/udemy.png";
import ProjectCard from "./Project-card.jsx";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects-container">
        <span className="projects-heading">Projects</span>
      </h2>
      <ProjectCard
        title="Pokemon Info Finder"
        content="A website that can search pokemon information using Poke API by putting pokemon name inside the search bar."
        tryLink="https://master--astounding-chimera-f05bfb.netlify.app"
        language={["react js", "tailwind", "axios"]}
        image={pokemon}
        note=""
      />
      <ProjectCard
        title="Udemy Clone"
        content="Cloning udemy website to practice implementing design with responsive capabilities"
        image={udemy}
        language={["html", "tailwind", "javascript", ]}
        tryLink="https://main--cute-muffin-b9e36b.netlify.app/"
        note="**  Note : website is designed for front-end purposes only, buttons are not functional"
      />
    </div>
  );
}

export default Projects;
