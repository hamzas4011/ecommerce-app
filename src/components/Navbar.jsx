import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-container">
        <ul className="navbar-links">
            <li>Home</li>
            <li>Menu</li>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar;