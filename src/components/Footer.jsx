import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
    <footer className="footer">
    <p>&copy; {new Date().getFullYear()} E-commerce</p>
    <div className="footer-contact">
       <p>Tel: +11 22 33 44 55</p>
       <p>Address: 12345 Norway, Oslo</p>
     </div>
    <div className="footer-attribution">
    </div>
    </footer>
    );
}

export default Footer;