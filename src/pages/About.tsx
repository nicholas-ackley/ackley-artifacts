import React from 'react';
import aboutImage from '../images/random.jpg';
import logo from '../images/random.jpg'; // replace with your actual logo path
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title" data-aos="fade-down" data-aos-duration="1200">ABOUT</h1>
      <div className="about-content">
        <img
          src={aboutImage}
          alt="About Ackley Artifacts"
          className="about-image"
          data-aos="fade-right"
          data-aos-duration="1200"
        />
        <div className="about-text" data-aos="fade-left" data-aos-duration="1200">
          <img src={logo} alt="Logo" className="about-logo" data-aos="zoom-in" data-aos-duration="1000" />
          <p data-aos="fade-up" data-aos-duration="1200">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <hr data-aos="fade-up" data-aos-duration="800" />
          <p className="about-quote" data-aos="fade-up" data-aos-duration="1200">
            entially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br /><br />
            op publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br /><br />
            – Rhonda Ackley
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
