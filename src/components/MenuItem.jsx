import React from 'react';
import '../styles/Menu.css';

function MenuItem({ name, price, image, addToCart }) {
    return (
        <div className="menu-item">
            <img src={image} alt={name} className="menu-item-image" />
            <h2 className="menu-item-name">{name}</h2>
            <p className="menu-item-price">{price}</p>
            <button className="menu-item-button" onClick={addToCart}>
                Add to Basket
            </button>
        </div>
    );
}

export default MenuItem;
