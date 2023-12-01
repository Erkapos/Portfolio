import React from "react";
import ReactDOM from "react-dom";
import github from "./images/github.png";
import linkedIn from "./images/linkedin.png";
import email from "./images/email.png";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/erkapos" target="_blank">
          <img src={github} alt="github-logo"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/peter-iskandar-99507723a/"
          target="_blank"
        >
          <img src={linkedIn} alt="linked-in-logo"></img>
        </a>
        <a href="mailto:peteriskandar150@gmail.com">
          <img src={email} alt="email-logo"></img>
        </a>
      </div>

      <br />
      <p>Created by Peter Iskandar</p>
      <br />
      <p>{currentYear}</p>
    </div>
  );
}

export default Footer;
