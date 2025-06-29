// Home.jsx
import React from "react";
import { Link } from "react-scroll";
import "../App.css";
import resumePDF from "../assets/resume.pdf";
import bgImg from "../assets/bg.png";

const Home = () => {
  return (
    <section className="firstSection" id="home">
      <div className="home-container">
        <div className="leftSection">
          <div>
            Hi, My name is <span className="purple">Vivek</span>
          </div>
          <div>and I am passionate</div>
          <span id="element">Full Stack Developer</span>
          <div className="buttons">
            <button className="btn" onClick={() => window.open(resumePDF)}>
              Download Resume
            </button>
            <button
              className="btn"
              onClick={() =>
                window.open("https://github.com/viveksai15", "_blank")
              }
            >
              Visit Github
            </button>
          </div>
        </div>
        <div className="rightSection">
          <img src={bgImg} alt="Developer" />
        </div>
      </div>
    </section>
  );
};

export default Home;
