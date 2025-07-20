import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">Lakshita</div>
      <nav className="navbar__links">
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
       
        <a href="#skills">Skills</a>
        
      </nav>
      <div className="navbar__resume">
        <a href="/assets/Your_Resume.pdf" download className="download-btn">
          ⬇️Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
