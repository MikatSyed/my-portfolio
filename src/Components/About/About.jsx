import React from "react";
import "./About.css";
import Info from "./Info.jsx";
import AboutImg from "../../assets/me.jpg";
import CV from "../../assets/Sayed-Gaziul-Hoque(resume).pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="about-img" className="about__img" />
 
        <div className="about_data">
          <Info />

          <p className="about__description">
          I’m a MERN Stack Web Application developer who is passionate about making error-free websites with 100% client satisfaction. I have a passion for learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic, goal-oriented, and always work with an end goal in mind.I pride myself on doing quality work and maintain excellent communication. I enjoy working with include ReactJS, JavaScript,Express.js as well as TypeScript.
          </p>

          <a download="" href={CV} className="button button--flex about__btn">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
