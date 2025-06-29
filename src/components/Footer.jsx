// Footer.js
import React from "react";
import "../App.css";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h3>Vivek's Developer Portfolio</h3>
          <p>Passionate about building full-stack and AI solutions 🚀</p>
        </div>
        <div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-icons">
          <a href="https://github.com/viveksai15" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/viveksai15" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="mailto:vivek@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-rights">
        © 2025 viveksportfolio.com | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
