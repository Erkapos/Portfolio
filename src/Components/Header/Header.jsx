import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";

function HandleClick() {
  const element = document.getElementsByClassName("about");
  if (element) {
    element[0].scrollIntoView({ behavior: "smooth" });
  }
}

function Header() {
  return (
    <div className="header">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <div className="header-container">
        <h1 className="name">Peter Iskandar</h1>
        <h2 className="desc">front end developer</h2>
        <div onClick={HandleClick}>
          <div className="arrow-down">
            <span
              id="arrow-pointing-down"
              className="material-symbols-outlined"
            >
              south
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
