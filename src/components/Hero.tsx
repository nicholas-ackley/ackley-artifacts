import React from 'react';
import '../styles/Hero.css';
import ackley from '../images/ackley.png';
import random from '../images/random.jpg';

const Hero: React.FC = () => {
  const collectionImages = [
    { src: random, alt: 'Image 1', name: 'Plate #1', price: '$40' },
    { src: random, alt: 'Image 2', name: 'Bowl #2', price: '$45' },
    { src: random, alt: 'Image 3', name: 'Cup #3', price: '$30' },
    { src: random, alt: 'Image 4', name: 'Vase #4', price: '$60' },
    { src: random, alt: 'Image 5', name: 'Platter #5', price: '$50' },
    { src: random, alt: 'Image 6', name: 'Dish #6', price: '$35' },
  ];

  return (
    <div className="hero">
      <img src={ackley} alt="Ackley Artifacts" className="hero-image" data-aos="fade-down" data-aos-duration="1000" />
      <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">SHOP THE asdasdadCOLLECTION</h2>
      <div className="collection-grid">
        {collectionImages.map((item, index) => (
          <div key={index} className="collection-item" data-aos="zoom-in" data-aos-delay={index * 100}>
            <img src={item.src} alt={item.alt} className="collection-image" />
            <div className="collection-info">
              <p className="collection-name">{item.name}</p>
              <p className="collection-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
