import React from "react";
import ReactDOM from "react-dom";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div id="navbar">
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
  );
}

export default Navbar;
