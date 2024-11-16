import React from 'react';

import Game1 from '../assets/game1.png';
import Game2 from '../assets/game2.png';
import Game3 from '../assets/game3.png';
import Game4 from '../assets/game4.png';

// Import the CSS file
import './ProductCards.css';

const ProductCards = () => {
  // Product data
  const products = [
    {
      id: 1,
      image: Game1,
      name: 'Product 1',
      description: 'This is a brief description of Product 1.',
    },
    {
      id: 2,
      image: Game2,
      name: 'Product 2',
      description: 'This is a brief description of Product 2.',
    },
    {
      id: 3,
      image: Game3,
      name: 'Product 3',
      description: 'This is a brief description of Product 3.',
    },
    {
      id: 4,
      image: Game4,
      name: 'Product 4',
      description: 'This is a brief description of Product 4.',
    },
  ];

  return (
    <div className="product-cards-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {/* Product image */}
          <div className="product-image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          {/* Product name and description */}
          <div className="product-text">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
