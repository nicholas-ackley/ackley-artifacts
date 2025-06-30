import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Shop from './pages/Shop';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router basename='/ackley-artifacts'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
