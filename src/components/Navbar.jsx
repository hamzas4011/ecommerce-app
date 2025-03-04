import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ cartSize }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">TechNova</Link>
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/menu" className="navbar-link">Menu</Link></li>
                    <li>
                        <Link to="/cart" className="navbar-link">
                            🛒 Basket ({cartSize})
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
