
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">WELCOME TO TECHNOVA</h1>
            <p className="home-description">
                Discover the latest and greatest in technology. From smart devices 
                to everyday essentials, TechNova has everything you need to stay ahead.
            </p>
            <Link to="/menu" className="home-shop-now">Shop Now</Link>
            <img 
                src="/images/tech-gadget.jpg" 
                alt="Tech gadget" 
                className="home-image" 
            />
        </div>
    );
}

export default Home;






/*
import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">WELCOME TO TECHNOVA</h1>
            <img 
                src="/images/tech-gadget.jpg" 
                alt="Tech gadget" 
                className="home-image" 
            />
        </div>
    );
}

export default Home;

*/