import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h4 className="product-title">{product.name}</h4>
        <p className="product-subtitle">From ₹{product.basePrice.toLocaleString()}</p>
      </div>
      <button className="emi-button">View EMIs</button>
    </div>
  );
};

export default ProductCard;