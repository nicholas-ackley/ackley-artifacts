import React from 'react';

import '../styles/Plates.css'; // use your shared shop styles
import decorImage from '../images/random.jpg'; // replace with your actual image


const Decoration: React.FC = () => {
  const decorProducts = [
    { src: decorImage, alt: 'Decor 1', name: 'Wall Hanging #1', price: '$60' },
    { src: decorImage, alt: 'Decor 2', name: 'Decorative Tile #2', price: '$45' },
    { src: decorImage, alt: 'Decor 3', name: 'Ornamental Plate #3', price: '$50' },
    { src: decorImage, alt: 'Decor 4', name: 'Wall Hanging #4', price: '$55' },
    { src: decorImage, alt: 'Decor 5', name: 'Decorative Tile #5', price: '$48' },
    { src: decorImage, alt: 'Decor 6', name: 'Ornamental Plate #6', price: '$52' },
    { src: decorImage, alt: 'Decor 7', name: 'Wall Hanging #7', price: '$58' },
    { src: decorImage, alt: 'Decor 8', name: 'Decorative Tile #8', price: '$47' },
    { src: decorImage, alt: 'Decor 9', name: 'Ornamental Plate #9', price: '$49' },
  ];

  return (
    <div className="shop-page">
      <h1 className="shop-title" data-aos="fade-down" data-aos-duration="1200">DECORATION</h1>
      <p className="shop-description" data-aos="fade-up" data-aos-duration="1200">
        Explore handcrafted decorative pieces to add character and artistry to your living spaces. Each item is thoughtfully designed and hand-finished for a unique touch.
      </p>

      <div className="shop-grid">
        {decorProducts.map((item, index) => (
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

export default Decoration;
