import React from 'react';

const ProductCard = ({ name, price, description, image }) => (
    <div className="product-card">
        <img className="product-image" src={image} alt={name} />
        <div className="product-details">
            <h2 className="product-name">{name}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">Ціна: ${price}</p>
        </div>
    </div>
);

export default ProductCard;
