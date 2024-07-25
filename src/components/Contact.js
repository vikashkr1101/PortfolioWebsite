import React from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

import myphoto from '../myphoto.jpg'
import './Contact.css'
const Contact = ({ theme }) => {
  return (
    <div className={`contact-container  ${theme} `}>
      <div className='photo'>
      <img className="profile-image glow1" src={myphoto} alt="Your Profile Image" height={400} width={400}/>
      </div>
      <div className="contact-info">
        <h1>Contact Me</h1>
        <div className='form'>
        <form action="#">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className='contact-email'>
          <h2>Contact</h2>
          <a href="mailto:vikash1128kumar@gmail.com">vikash1128kumar@gmail.com</a>
          <br/>
          <br/>
          <h2>Based in</h2>
          <p>Sahibganj,
            <br/>
            Jharkhand
          </p>
          <br/>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fb"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram insta"></i>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

