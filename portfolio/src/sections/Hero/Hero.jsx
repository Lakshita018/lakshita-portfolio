import React, { useEffect, useState, useRef } from "react";
import "./Hero.css";
import NeuralNetworkBG from "../../components/NeuralNetworkBG";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HeroTypingAnimation from "../../components/HeroTypingAnimation";

const Hero = () => {
  const [showIcons, setShowIcons] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowIcons(entry.isIntersecting); // hide icons if hero is not visible
      },
      { threshold: 0.7 } // 30% of hero must be visible to keep icons
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <NeuralNetworkBG />
      <div className="hero-content">
        <HeroTypingAnimation />
        <h1>
          Hi, I'm <span className="highlight">Lakshita Gupta</span>
          <br />
          <span className="typing-title">Computer Engineer</span>
        </h1>

        <p className="subtitle">
          Exploring the frontiers of computer science with a focus on machine learning,
          cyber security, and algorithm optimization.
        </p>
        <div className="hero-buttons">
          <a href="#education" className="btn primary">Learn More</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="scroll-down">
          <span className="jump">Scroll Down</span>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>

        {/* Icons will only be shown if hero is in view */}
        {showIcons && (
          <div className="pill-social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
