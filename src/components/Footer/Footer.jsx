import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="creator-name">Lakshita Gupta</span>
          </div>
          
          <div className="footer-center">
            <span className="made-with-love">
              Created with 
              <span className="heart">♥</span> 
              love
            </span>
          </div>
          
          <div className="footer-right">
            <span className="copyright">© {currentYear} All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;