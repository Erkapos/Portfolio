import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function ProjectCard(props) {
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState();
  useEffect(function () {
    const observer = new IntersectionObserver(function (entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
    observer.observe(myRef.current);
  });

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
      <div
        ref={myRef}
        className={"right-flex " + (isVisible ? "animation-come-right" : "")}
      >
        <h2>{props.title}</h2>
        <p id="project-description">{props.content}</p>
        {props.note !== '' ? <p id="note">{props.note}</p> : null}

        <div id="language-used">
          {props.language.map((each) => {
            return <div id="language">{each}</div>;
          })}
        </div>
        <Button target="_blank" href={props.tryLink} variant="contained">
          Try it !
        </Button>
        {/* <AnimationOnScroll animateIn="animate__bounceIn">
          <h2>{props.title}</h2>
          <p id="project-description">{props.content}</p>
          <Button target="_blank" href={props.tryLink} variant="contained">
            Try it !
          </Button>
        </AnimationOnScroll> */}
      </div>
    </div>
  );
}

export default ProjectCard;
