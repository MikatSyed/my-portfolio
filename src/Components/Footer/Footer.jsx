import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mikat Syed</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/invites/contact/?i=9lhmrnri2ebf&utm_content=1gqjf7b"
            className="footer__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/syedmilka.cricket"
            className="footer__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-facebook"></i>
          </a>

          <a
            href="https://github.com/MikatSyed"
            className="footer__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>

<span className="footer__copy">&#169; Mikat_Syed. All rights reserved</span>

      </div>
    </footer>
  );
};

export default Footer;
