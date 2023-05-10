import React from "react";
import ReactDOM from "react-dom";
import github from "./images/github.png";
import linkedIn from "./images/linkedin.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={github} alt="github-logo"></img>
      <img src={linkedIn} alt="linkedIn-logo"></img>
    </div>
  );
}

export default Footer;
