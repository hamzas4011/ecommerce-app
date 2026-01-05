import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <main className="home" role="main">
            <div className="home-content-box">
                <h1 className="home-title">WELCOME TO TECHNOVA</h1>
                <p className="home-description">
                    Discover the latest and greatest in technology. From smart devices 
                    to everyday essentials, TechNova has everything you need to stay ahead.
                </p>
                <Link to="/menu" className="home-shop-now" aria-label="Browse our products and shop now">Shop Now</Link>
            </div>
            <img 
                src="/images/tech-gadget.jpg" 
                alt="Modern technology gadgets and devices displayed on a sleek surface" 
                className="home-image" 
                loading="lazy"
            />
        </main>
    );
}

export default Home;