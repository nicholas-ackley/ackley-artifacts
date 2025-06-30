import React from 'react';
import '../styles/Plates.css'; // use your shared shop styles

import frogHouseImage from '../images/random.jpg'; // replace with your actual frog house image

const FrogHouse: React.FC = () => {
  const frogHouseProducts = [
    { src: frogHouseImage, alt: 'Frog House 1', name: 'Frog House #1', price: '$35' },
    { src: frogHouseImage, alt: 'Frog House 2', name: 'Frog House #2', price: '$38' },
    { src: frogHouseImage, alt: 'Frog House 3', name: 'Frog House #3', price: '$40' },
    { src: frogHouseImage, alt: 'Frog House 4', name: 'Frog House #4', price: '$36' },
    { src: frogHouseImage, alt: 'Frog House 5', name: 'Frog House #5', price: '$42' },
    { src: frogHouseImage, alt: 'Frog House 6', name: 'Frog House #6', price: '$39' },
    { src: frogHouseImage, alt: 'Frog House 7', name: 'Frog House #7', price: '$37' },
    { src: frogHouseImage, alt: 'Frog House 8', name: 'Frog House #8', price: '$41' },
    { src: frogHouseImage, alt: 'Frog House 9', name: 'Frog House #9', price: '$43' },
  ];

  return (
    <div className="shop-page">
      <h1 className="shop-title" data-aos="fade-down" data-aos-duration="1200">FROG HOUSES</h1>
      <p className="shop-description" data-aos="fade-up" data-aos-duration="1200">
        Discover handcrafted frog houses perfect for adding charm to your garden. Each house is uniquely glazed and shaped to provide a cozy shelter for your garden’s amphibian friends.
      </p>

      <div className="shop-grid">
        {frogHouseProducts.map((item, index) => (
          <div
            key={index}
            className="shop-item"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay={index * 100}
            data-aos-easing="ease-in-out"
          >
            <img src={item.src} alt={item.alt} className="shop-image" />
            <div className="shop-info">
              <p className="shop-name">{item.name}</p>
              <p className="shop-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrogHouse;
