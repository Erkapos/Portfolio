import React from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import hamburger from "./images/hamburger.png";
import { Link } from "react-scroll";

function Navbar() {
  function handleClick() {
    const hamburger = document.querySelector(".dropdown");

    document.querySelector("#dropdown").classList.toggle("active");

    document.querySelector("#dropdown").classList.toggle("hidden");
  }

  return (
    <div id="navbar">
      <div className="mobile-container">
        <a
          onClick={() => {
            handleClick();
          }}
        >
          <img src={hamburger} id="hamburger" />
        </a>
        <div id="dropdown" className="hidden">
          <Link activeClass="active" to="header">
            Home
          </Link>
          <Link activeClass="active" to="about">
            About
          </Link>
          <Link activeClass="active" to="projects">
            Project
          </Link>
        </div>
      </div>
      <div className="tablet-container">
        <Link activeClass="active" to="header">
          Home
        </Link>
        <Link activeClass="active" to="about">
          About
        </Link>
        <Link activeClass="active" to="projects">
          Project
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
