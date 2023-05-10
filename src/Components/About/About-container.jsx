import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function AboutContainer(props) {
  const myRef = useRef();
  const [isCardVisible, setIsCardVisible] = useState();
  useEffect(function () {
    const observer = new IntersectionObserver(function (entries) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsCardVisible(true);
      }
    });
    observer.observe(myRef.current);
  });

  return (
    <div
      ref={myRef}
      className={"about-card" + (isCardVisible ? " animation-slide" : "")}
    >
      <div className="about-card-content">
        <h3 className="about-title">
          {props.title} {props.span}
        </h3>
        <p id="about-content">{props.content}</p>
      </div>
    </div>
  );
}

export default AboutContainer;
