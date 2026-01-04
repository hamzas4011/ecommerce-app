import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ cartSize }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">TechNova</Link>
                <ul className="navbar-links">
                    <li><Link to="/" className="navbar-link">Home</Link></li>
                    <li><Link to="/menu" className="navbar-link">Menu</Link></li>
                    <li>
                        <Link to="/cart" className="navbar-link cart-link">
                            <span>🛒</span> Cart
                            {cartSize > 0 && <span className="cart-badge">{cartSize}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
