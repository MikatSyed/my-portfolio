import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
            href="https://www.instagram.com/invites/contact/?i=9lhmrnri2ebf&utm_content=1gqjf7b"
            className="home__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/syedmilka.cricket"
            className="home__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-facebook"></i>
          </a>

          <a
            href="https://github.com/MikatSyed"
            className="home__social-icon"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>
    </div>
  );
};

export default Social;
