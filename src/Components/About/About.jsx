import React from "react";
import "./About.css";
import Info from "./Info.jsx";
import AboutImg from "../../assets/me.jpg";
import CV from "../../assets/Syed-Gaziul-Haque(resume2).pdf";

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
            MERN Stack web developer, I create web pages with UI / UX user
            interface, i have years of experiance and many clients with the
            project carried out.
          </p>

          <a download="" href={CV} className="button button--flex about__btn">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
