"use client"
import React from "react";
import '../styles/product.css';

const Product = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image}  className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{title}</h3>
        <p className="product-description">{price}</p>
      </div>
    </div>
  );
};

export default Product;
