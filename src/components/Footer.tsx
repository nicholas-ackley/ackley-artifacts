import React from 'react';
import '../styles/Footer.css';
import email from '../images/email.png';
import insta from '../images/insta.png';
import etsy from '../images/etsy.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1000">
      <div className="footer-contact">
        <p data-aos="fade-right" data-aos-delay="200">I'm Social!</p>
        <div className="footer-icons">
          <img src={email} alt="Email" className="footer-icon" data-aos="zoom-in" data-aos-delay="300" />
          <img src={insta} alt="Instagram" className="footer-icon" data-aos="zoom-in" data-aos-delay="400" />
          <img src={etsy} alt="Etsy" className="footer-icon" data-aos="zoom-in" data-aos-delay="500" />
        </div>
      </div>

      <div className="footer-signup" data-aos="fade-left" data-aos-delay="600">
        <p>Sign up to be notified about new listings!</p>
        <div className="signup-input">
          <img src={email} alt="Email Icon" className="signup-email-icon" />
          <input type="email" placeholder="Enter your email" />
          <button type="submit" className="signup-button">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
