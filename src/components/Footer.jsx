import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3 className="footer-title">About TechNova</h3>
                    <p className="footer-text">
                        TechNova, founded in 2025, is your trusted online store <br/>
                        for the latest tech gadgets and innovations.
                    </p>
                </div>
                <div className="footer-contact">
                    <h3 className="footer-title">Contact Us</h3>
                    <p className="footer-text">📩 support@technova.com</p>
                    <p className="footer-text">📞 123-4567</p>
                    <p className="footer-text">🏠 123 Bergen, Norway</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-text">© 2025 TechNova. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
