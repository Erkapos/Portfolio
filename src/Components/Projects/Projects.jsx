import React from "react";
import ReactDOM from "react-dom";
import "./Projects.css";
import pokemon from "../Projects/images/pokemon-info-finder-image.png";
import ProjectCard from "./Project-card.jsx";

function Projects() {
  return (
    <div className="projects">
      <h2 className="projects-container">
        <span className="projects-heading">Projects</span>
      </h2>
      <ProjectCard
        title="Pokemon Info Finder"
        content="A website that can search pokemon information using Poke API"
        image={pokemon}
      />
      <ProjectCard title="asd" content="dsadas" image={example} />
    </div>
  );
}

export default Projects;
