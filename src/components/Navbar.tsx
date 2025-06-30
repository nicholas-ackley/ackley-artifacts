import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">Ackley Artifacts</div>
      <div className="navbar-center">
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            SHOP ▼
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="dropdown-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <NavLink
                  to="/#"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-link active-link' : 'dropdown-link'
                  }
                  onClick={() => setIsDropdownOpen(false)}
                >
                  All Products
                </NavLink>
                <NavLink
                  to="/shop/plates"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-link active-link' : 'dropdown-link'
                  }
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Plates & Platters
                </NavLink>
                <NavLink
                  to="/shop/novelty"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-link active-link' : 'dropdown-link'
                  }
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Novelty
                </NavLink>
                <NavLink
                  to="/shop/vases"
                  className={({ isActive }) =>
                    isActive ? 'dropdown-link active-link' : 'dropdown-link'
                  }
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Vases & Lamp Bases
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'about-link active-link' : 'about-link'
          }
        >
          ABOUT
        </NavLink>
      </div>
      <div className="navbar-right">
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-bag"></i>
      </div>
    </nav>
  );
};

export default Navbar;
