import React, { useState } from "react";
import "./Services.css";

const Services = () => {
    const [modalToggle,SetModalToggle] = useState(0);

    const toggleTab = (index) =>{
        SetModalToggle(index);
    }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="container">
      <div className="services__container  grid">

        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
             Frontend <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={modalToggle === 1 ? "services__modal active-modal" : "services__modal"  }>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

              <h3 className="services__modal-title"> Frontend <br /> Development</h3>
              <p className="services__modal-description">
                Services with more than 3 year of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  To ensure that website visitors can easily interact with the page
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  building reusable codes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Backend <br /> Development
            </h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div  className={modalToggle === 2 ? "services__modal active-modal" : "services__modal"  }>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

              <h3 className="services__modal-title"> Backend <br /> Development</h3>
              <p className="services__modal-description">
                Services with more than 3 year of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Write clean code to develop functional web applications
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Collaborate with Front-end developers to integrate user-facing elements with server side logic</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Troubleshoot and debug applications
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                  Produce clean, efficient code based on specifications
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
            Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={()=> toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={modalToggle === 3 ? "services__modal active-modal" : "services__modal" }>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={()=> toggleTab(0)}></i>

              <h3 className="services__modal-title">  Ui/Ux <br /> Designer</h3>
              <p className="services__modal-description">
                Services with more than 3 year of experience. Providing quality
                work to clients and companies
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">web page development.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interations.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

</div>
      </div>
    </section>
  );
};

export default Services;
