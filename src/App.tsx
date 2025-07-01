import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Shop from './pages/Plates';
import Footer from './components/Footer';
import Decoration from './pages/Decoration';
import FrogHouse from './pages/FrogHouse';
const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  AOS.init({
  disable: 'mobile', 


  duration: 600, // default is 400, adjust if needed
  once: true, // animate only once, not every scroll
  throttleDelay: 99, // default is 99ms
  debounceDelay: 50, // default is 50ms
});


  return (
    <Router basename='/ackley-artifacts'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/froghouse" element={<FrogHouse />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
