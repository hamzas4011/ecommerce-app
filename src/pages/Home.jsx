import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <h1 className="home-title">Welcome to TechNova</h1>
            <img 
                src="/images/tech-gadget.jpg" 
                alt="Tech gadget" 
                className="home-image" 
            />
        </div>
    );
}

export default Home;