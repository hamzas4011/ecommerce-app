import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-about">
                <h3 className="footer-title">About TechNova</h3>
                <p>
                    TechNova, founded in 2025, is your trusted online store <br />
                    for the latest tech gadgets and innovations.
                </p>
            </div>
            <div className="footer-contact">
                <h3 className="footer-title">Contact Us</h3>
                <p>📩 support@technova.com</p>
                <p>📞 123-4567</p>
                <p>🏠 123 Bergen, Norway</p>
            </div>
        </footer>
    );
}

export default Footer;
