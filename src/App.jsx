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

    const removeFromCart = (itemToRemove) => {
        setCart((prevCart) => {
            const indexToRemove = prevCart.findIndex(item => item.id === itemToRemove.id);
            if (indexToRemove === -1) return prevCart;

            const newCart = [...prevCart];
            newCart.splice(indexToRemove, 1);
            return newCart;
        });
    };

    return (
        <Router>
            <div className="app">
                <Navbar cartSize={cart.length} />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
