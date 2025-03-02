import React, { useState } from "react";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem";

function Menu({ addToCart }) {
    const products = [
        { id: 1, name: 'Gadget 1', price: '$99', image: '/images/gadget-1.webp' },
        { id: 2, name: 'Gadget 2', price: '$199', image: '/images/gadget-2.webp' },
        { id: 3, name: 'Gadget 3', price: '$299', image: '/images/gadget-3.webp' },
        { id: 4, name: 'Gadget 4', price: '$399', image: '/images/gadget-4.webp' },
        { id: 5, name: 'Gadget 5', price: '$499', image: '/images/gadget-5.webp' },
        { id: 6, name: 'Gadget 6', price: '$599', image: '/images/gadget-6.webp' },
        { id: 7, name: 'Gadget 7', price: '$699', image: '/images/gadget-7.webp' },
        { id: 8, name: 'Gadget 8', price: '$799', image: '/images/gadget-8.webp' },
    ];

    const [visibleProducts, setVisibleProducts] = useState(6);

    const loadMore = () => {
        setVisibleProducts((prev) => prev + 3);
    };

    return (
        <div className="menu">
            <h1 className="menu-title">Our Gadgets</h1>
            <div className="menu-grid">
                {products.slice(0, visibleProducts).map(product => (
                    <MenuItem
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        addToCart={() => addToCart(product)}
                    />
                ))}
            </div>
            {visibleProducts < products.length && (
                <button className="load-more" onClick={loadMore}>Load More</button>
            )}
        </div>
    );
}

export default Menu;
