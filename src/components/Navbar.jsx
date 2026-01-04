import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar({ cartSize }) {
    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" aria-label="TechNova Home">TechNova</Link>
                <ul className="navbar-links" role="menubar">
                    <li role="none"><Link to="/" className="navbar-link" role="menuitem" aria-label="Go to home page">Home</Link></li>
                    <li role="none"><Link to="/menu" className="navbar-link" role="menuitem" aria-label="View products menu">Menu</Link></li>
                    <li role="none">
                        <Link to="/cart" className="navbar-link cart-link" role="menuitem" aria-label={`Shopping cart with ${cartSize} item${cartSize !== 1 ? 's' : ''}`}>
                            <span aria-hidden="true">🛒</span> Cart
                            {cartSize > 0 && <span className="cart-badge" aria-label={`${cartSize} items in cart`}>{cartSize}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
