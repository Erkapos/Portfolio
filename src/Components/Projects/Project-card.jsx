import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function ProjectCard(props) {
  return (
    <div className="projects-flex">
      <p className="left-flex">
        <img
          className="project-image"
          alt="example image"
          src={props.image}
        ></img>
      </p>
      {/* + (isVisible ? "animation-come-right" : "") */}
      <div className={"right-flex "}>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <h2>{props.title}</h2>
          <p id="project-description">{props.content}</p>
          <Button variant="contained">Try it !</Button>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default ProjectCard;
