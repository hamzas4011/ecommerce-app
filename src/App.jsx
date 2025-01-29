import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <Router>
            <div className="app">
                <Navbar cartSize={cart.length} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
