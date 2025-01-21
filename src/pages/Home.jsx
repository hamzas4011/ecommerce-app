import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Welcome to the Home Page</h1>
            <img 
                src="/images/tech-gadget.jpg" 
                alt="Tech gadget" 
                className="home-image" 
            />
            <p className="home-content">
                This is where your content goes!
            </p>
        </div>
    );
}

export default Home;
