// Projects.js
import React from "react";
import '../App.css';


import jobImg from "../assets/cat.png";
import amazonImg from "../assets/amazon.jpg";
import ytImg from "../assets/youtube.jpg";
import brainImg from "../assets/doctor.jpg";

const projects = [
  {
    title: "JobFinder App",
    desc: "A job search platform with filters, job views, built using React, REST APIs, and JWT auth.",
    img: jobImg,
  },
  {
    title: "Amazon Clone",
    desc: "An e-commerce platform clone with authentication and cart features using MERN stack.",
    img: amazonImg,
  },
  {
    title: "YouTube Clone",
    desc: "Video platform built using React and YouTube Data API for searching and watching videos.",
    img: ytImg,
  },
  {
    title: "Brain Tumor Detection",
    desc: "CNN-based deep learning model for detecting brain tumors in MRI images.",
    img: brainImg,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.img} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="project-links">
              <a href="#" className="btn" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="#" className="btn" target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;