import React from 'react';
import '../styles/Menu.css';
import MenuItem from '../components/MenuItem';

function Menu({ addToCart }) {
    const products = [
        { id: 1, name: 'PS5 controller', price: '$99', image: '/images/gadget-1.jpg', loading: "lazy" },
        { id: 2, name: 'Headphones', price: '$199', image: '/images/gadget-2.jpg', loading: "lazy" },
        { id: 3, name: 'Drone', price: '$299', image: '/images/gadget-3.jpg', loading: "lazy" },
        { id: 4, name: 'Camera', price: '$399', image: '/images/gadget-4.jpg', loading: "lazy" },
        { id: 5, name: 'VR glasses', price: '$499', image: '/images/gadget-5.jpg', loading: "lazy" },
        { id: 6, name: 'Phone', price: '$599', image: '/images/gadget-6.jpg', loading: "lazy" },
    ];

    return (
        <main className="menu" role="main" aria-label="Product catalog">
            <h1 className="menu-title">Our Gadgets</h1>
            <div className="menu-grid" role="list" aria-label="Available products">
                {products.map(product => (
                    <MenuItem
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        loading={product.loading}
                        addToCart={() => addToCart(product)}
                    />
                ))}
            </div>
        </main>
    );
}

export default Menu;
