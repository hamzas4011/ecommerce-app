import React, { useState } from 'react';
import '../styles/Menu.css';
import MenuItem from '../components/MenuItem';

function Menu() {
    const products = [
        { id: 1, name: 'Gaming controller', price: '$99', image: '/images/gadget-1.jpg' },
        { id: 2, name: 'Headset', price: '$199', image: '/images/gadget-2.jpg' },
        { id: 3, name: 'Drone', price: '$299', image: '/images/gadget-3.jpg' },
        { id: 4, name: 'Camera', price: '$399', image: '/images/gadget-4.jpg' },
        { id: 5, name: 'VR glasses', price: '$499', image: '/images/gadget-5.jpg' },
        { id: 6, name: 'Phone', price: '$599', image: '/images/gadget-6.jpg' },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="menu">
            <h1 className="menu-title">Our Gadgets</h1>
            <div className="searchbar-container">
                <input
                    type="text"
                    placeholder="Search gadgets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="searchbar"
                />
            </div>
            <div className="menu-grid">
                {filteredProducts.map(product => (
                    <MenuItem
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default Menu;

