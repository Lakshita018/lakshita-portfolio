import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">Lakshita</div>
      <nav className="navbar__links">
       
        <a href="#projects">Projects</a>
         <a href="#education">Education</a>
        <a href="#experience">Experience</a>
       
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="navbar__resume">
        <a href="/Lakshita_resume.pdf" download className="download-btn">
          Resume
        </a>
      </div>
    </header>
  );
};

export default Navbar;
