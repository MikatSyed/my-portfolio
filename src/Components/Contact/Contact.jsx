import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./Contact.css";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wx04g6v', 'template_qj1ep0k', form.current, 'user_gzTiGth1djbjU2f9Envt7')
      e.target.reset();
  };
  return (
    <section className="contact  section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">syednew5000@gmail.com</span>

              <a href="mailto:syednew5000@gmail.com" className="contact__button" target="_blank" rel="noreferrer">Write me <i className="bx bx-right-arrow-alt contact__button-icon"  ></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+8801858832211</span>

              <a href="https://wa.me/qr/HW3EKSREHNC6D1" className="contact__button" target="_blank" rel="noreferrer">Write me <i className="bx bx-right-arrow-alt contact__button-icon"  ></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>

              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">Mi kat Syed</span>

              <a href="https://m.me/syedmilka.cricket" className="contact__button" target="_blank" rel="noreferrer" >Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>



          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form"  ref={form} onSubmit={sendEmail} >

          <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input type="name" name="name" className="contact__form-input" placeholder="Insert your name"/>
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input type="email" name="email" className="contact__form-input" placeholder="Insert your email"/>
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
             <textarea name="project" className="contact__form-input" placeholder="Write your project"cols="30" rows="10"></textarea>
            </div>

            <button className="button button--flex">Send Message</button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
