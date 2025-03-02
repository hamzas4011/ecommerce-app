import React, { useState } from "react";
import "../styles/Menu.css";

function MenuItem({ name, price, image, addToCart }) {
    const [added, setAdded] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const handleAddToCart = () => {
        addToCart();
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <div className="menu-item">
            {!loaded && <div className="image-placeholder"></div>}
            <img
                src={image}
                alt={name}
                className={`menu-item-image ${loaded ? "visible" : "hidden"}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
            <h2 className="menu-item-name">{name}</h2>
            <p className="menu-item-price">{price}</p>
            <button className="menu-item-button" onClick={handleAddToCart} disabled={added}>
                {added ? "Added ✅" : "Add to Basket"}
            </button>
        </div>
    );
}

export default MenuItem;
