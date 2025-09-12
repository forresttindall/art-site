import React, { useState } from 'react';
import '../App.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['PROJECTS', 'PHOTOGRAPHY', 'WRITING', 'ILLUSTRATION', 'BIOGRAPHY', 'CONTACT'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
  };

  return (
    <nav className="navigation">
      <div className="logo" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li>
          <button 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => handleNavClick('home')}
          >
            HOME
          </button>
        </li>
        {navItems.map((item) => (
          <li key={item}>
            <button 
              className={currentPage === item.toLowerCase() ? 'active' : ''}
              onClick={() => handleNavClick(item.toLowerCase())}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;