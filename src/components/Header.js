import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="Pakistan Medics Logo" className="logo" />
      </div>
      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        type="button"
        aria-label="Toggle navigation" // Accessibility label
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu();
          }
        }} // Keyboard accessibility
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Our Services</Link></li>
        <li><Link to="/stories">Impact Stories</Link></li>
        <li><Link to="/get-involved">Get Involved</Link></li>
        <li><Link to="/medical-camps">Medical Camps</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
