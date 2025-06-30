import React from 'react';
import aboutImage from '../images/random.jpg';
import logo from '../images/random.jpg'; // Replace with your actual logo path
import '../styles/about.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ABOUT</h1>
      <div className="about-content">
        <img src={aboutImage} alt="About Ackley Artifacts" className="about-image" />
        <div className="about-text">
          <img src={logo} alt="Logo" className="about-logo" />
          <p>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <hr />
          <p className="about-quote">
           entially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br /><br />
            My technts. The process of transforming an idea into a product takes time – about a month per build with planning, coding, testing, and deployment.”
            <br /><br />
            – Rhonda Ackley
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
