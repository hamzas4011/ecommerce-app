import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-about">
                <h3 className="footer-title">About TechNova</h3>
                <p className="footer-text">
                    TechNova, founded in 2025, is your trusted online <br/> store for the latest tech gadgets and innovations.
                </p>
            </div>
            <div className="footer-contact">
                <h3 className="footer-title">Contact Us</h3>
                <p className="footer-text">📩 support@technova.com</p>
                <p className="footer-text">📞 123-4567</p>
                <p className="footer-text">🏠 123 Bergen, Norway</p>
            </div>
        </footer>
    );
}

export default Footer;
