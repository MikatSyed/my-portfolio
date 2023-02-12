import React from "react";
import Hand from "../../assets/Hand.gif";

const Data = () => {
  return (
    <div className="home__data">
      <h1>
        <span className="home__title">Syed Gaziul Hoque</span> <span className="home__hand"><img src={Hand} alt=""/></span>
      </h1>

      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        I'm a MERN Stack Web Developer based in Bangladesh, and I'm very
        passionate and dedicated to my work.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <i className="uil uil-telegram-alt button__icon"></i>
      </a>
    </div>
  );
};

export default Data;
