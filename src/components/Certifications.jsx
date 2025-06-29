// Certifications.js
import React from "react";
import "../App.css";
import webImg from "../assets/webdevelopment.png";
import backendImg from "../assets/backend.png";
import pythonImg from "../assets/python.png";
import dbImg from "../assets/database1.png";

const certifications = [
  {
    title: "Web Development",
    desc: "Mastered HTML, CSS, and JavaScript to build responsive, interactive user interfaces.",
    img: webImg,
  },
  {
    title: "Backend & Full Stack",
    desc: "Built full-stack apps using Node.js and Express connecting UI to robust server logic.",
    img: backendImg,
  },
  {
    title: "Programming",
    desc: "Proficient in Python for scripting, automation, and algorithm challenges.",
    img: pythonImg,
  },
  {
    title: "Databases",
    desc: "Skilled in SQL for relational database design, queries, and optimization.",
    img: dbImg,
  },
];

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certifications.map((item, index) => (
          <div className="cert-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;