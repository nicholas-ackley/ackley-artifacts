import React from 'react';
import '../styles/Plates.css'; // your CSS file
import plateImage from '../images/random.jpg'; // replace with your actual image

const Plates: React.FC = () => {
  const plateProducts = [
    { src: plateImage, alt: 'Plate 1', name: 'Stoneware Plate #1', price: '$40' },
    { src: plateImage, alt: 'Plate 2', name: 'Stoneware Plate #2', price: '$42' },
    { src: plateImage, alt: 'Plate 3', name: 'Stoneware Plate #3', price: '$45' },
    { src: plateImage, alt: 'Plate 4', name: 'Stoneware Plate #4', price: '$38' },
    { src: plateImage, alt: 'Plate 5', name: 'Stoneware Plate #5', price: '$50' },
    { src: plateImage, alt: 'Plate 6', name: 'Stoneware Plate #6', price: '$47' },
    { src: plateImage, alt: 'Plate 7', name: 'Stoneware Plate #7', price: '$44' },
    { src: plateImage, alt: 'Plate 8', name: 'Stoneware Plate #8', price: '$46' },
    { src: plateImage, alt: 'Plate 9', name: 'Stoneware Plate #9', price: '$49' },
  ];

  return (
    <div className="shop-page">
      <h1 className="shop-title" data-aos="fade-down" data-aos-duration="1200">Plates & Platters</h1>
      <p className="shop-description" data-aos="fade-up" data-aos-duration="1200">
        Each piece is handcrafted from high-fire stoneware clay, thrown on the wheel and glazed with food-safe finishes. Perfect for everyday use or as timeless display pieces.
      </p>

      <div className="shop-grid">
        {plateProducts.map((item, index) => (
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

export default Plates;
