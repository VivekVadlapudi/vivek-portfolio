// Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Vivek's Portfolio</div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><Link to="home" smooth duration={500} onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth duration={500} onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="certifications" smooth duration={500} onClick={() => setIsOpen(false)}>Certifications</Link></li>
          <li><Link to="projects" smooth duration={500} onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="contact" smooth duration={500} onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;