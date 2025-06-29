// About.js
import React from "react";
import "../App.css";
import aboutImage from "../assets/vivek.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hey! I'm <span className="highlight">Vivek Sai</span> — a passionate tech
            enthusiast and a <span className="highlight">Computer Science graduate</span>
            with a specialization in <span className="highlight">Artificial Intelligence</span>
            from Bharath Institute of Higher Education & Research.
          </p>
          <p>
            I love solving problems and building end-to-end products. My expertise
            lies in the <span className="highlight">MERN stack</span>, along with experience
            in <span className="highlight">deep learning</span> for healthcare projects like
            <span className="highlight"> brain tumor detection</span>.
          </p>
          <p>
            I'm looking for exciting full-time opportunities where I can grow as a
            <span className="highlight"> Full Stack Developer</span> and contribute to
            impactful real-world products 🚀.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="Vivek Sai" />
        </div>
      </div>
    </section>
  );
};

export default About;