import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';


function App() {
    return (
        <Router>
                <Navbar />
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/menu" element={<Menu />} />
                </Routes>
                <Footer />
        </Router>
    );
}

export default App;
