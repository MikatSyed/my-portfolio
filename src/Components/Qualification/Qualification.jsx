import React, { useState } from "react";
import './Qualification.css'
const Qualification = () => {
    const [toggleState,setToggleState] = useState(1);

    const toggleTab = (index) =>{
        setToggleState(index);
    }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState === 2 ?"qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Sc in CSE</h3>
                <span className="qualification__subtitle">
                  Port City International University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Complete Web Development</h3>
                <span className="qualification__subtitle">
                Programming Hero Batch-3
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">JavaScript Simplified</h3>
                <span className="qualification__subtitle">
                  Web Dev Simplified(kyle)
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              {/* <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> */}

              {/* <div>
                <h3 className="qualification__title">JavaScript Simplified</h3>
                <span className="qualification__subtitle">
                  Bangladesh- Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2018 - 2020
                </div>
              </div> */}
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior Software Engineer </h3>
                <span className="qualification__subtitle">
                  Syscon Solution Ltd.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2023(February - Running)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

       

  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
