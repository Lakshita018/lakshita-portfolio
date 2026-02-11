import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar__logo">Lakshita</div>
        
        {/* Desktop Navigation */}
        <nav className="navbar__links">
          <a href="#hero">Home</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <div className="navbar__resume">
          <a href="/my_resume.pdf" download className="download-btn">
            Resume
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu__content">
          <div className="mobile-menu__header">
            <h2 className="mobile-menu__logo">Lakshita</h2>
            <button className="mobile-menu__close" onClick={closeMenu}>
              ✕
            </button>
          </div>
          
          <nav className="mobile-menu__nav">
            <a href="#hero" className="mobile-menu__link" onClick={closeMenu}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              <span>Home</span>
            </a>
            
            <a href="#projects" className="mobile-menu__link" onClick={closeMenu}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
              <span>Projects</span>
            </a>
            
            <a href="#education" className="mobile-menu__link" onClick={closeMenu}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <span>Education</span>
            </a>
            
            <a href="#experience" className="mobile-menu__link" onClick={closeMenu}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              <span>Experience</span>
            </a>
            
            <a href="#skills" className="mobile-menu__link" onClick={closeMenu}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 12l2 2 4-4"/>
                <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
              </svg>
              <span>Skills</span>
            </a>
            
            <a href="#contact" className="mobile-menu__link" onClick={closeMenu}>
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Contact</span>
            </a>
          </nav>
          
          <div className="mobile-menu__footer">
            <a 
              href="/my_resume.pdf" 
              download 
              className="mobile-download-btn"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;