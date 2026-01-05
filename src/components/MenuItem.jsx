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

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!added) {
                handleAddToCart();
            }
        }
    };

    return (
        <article className="menu-item" role="article" aria-label={`Product: ${name}, Price: ${price}`}>
            {!loaded && <div className="image-placeholder" aria-hidden="true"></div>}
            <img
                src={image}
                alt={`${name} product image`}
                className={`menu-item-image ${loaded ? "visible" : "hidden"}`}
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
            <h2 className="menu-item-name">{name}</h2>
            <p className="menu-item-price" aria-label={`Price: ${price}`}>{price}</p>
            <button 
                className="menu-item-button" 
                onClick={handleAddToCart}
                onKeyDown={handleKeyDown}
                disabled={added}
                aria-label={added ? `${name} added to cart` : `Add ${name} to shopping cart`}
                aria-pressed={added}
                type="button"
            >
                {added ? "Added ✅" : "Add to Basket"}
            </button>
        </article>
    );
}

export default MenuItem;
