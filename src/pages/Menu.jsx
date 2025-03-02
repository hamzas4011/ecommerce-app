import React, { useState } from 'react';
import '../styles/Menu.css';
import MenuItem from '../components/MenuItem';

function Menu({ addToCart }) {
    const products = [
        { id: 1, name: 'Gadget 1', price: '$99', image: '/images/gadget-1.jpg' },
        { id: 2, name: 'Gadget 2', price: '$199', image: '/images/gadget-2.jpg' },
        { id: 3, name: 'Gadget 3', price: '$299', image: '/images/gadget-3.jpg' },
        { id: 4, name: 'Gadget 4', price: '$399', image: '/images/gadget-4.jpg' },
        { id: 5, name: 'Gadget 5', price: '$499', image: '/images/gadget-5.jpg' },
        { id: 6, name: 'Gadget 6', price: '$599', image: '/images/gadget-6.jpg' },
    ];

    return (
        <div className="menu">
            <h1 className="menu-title">Our Gadgets</h1>
            <div className="menu-grid">
                {products.map(product => (
                    <MenuItem
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        addToCart={() => addToCart(product)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;
