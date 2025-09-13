import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/" onClick={closeMobileMenu}>
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
      
      <button 
        className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


     <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>

           <li>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
        </li>



  

           <li>
          <Link 
            to="/photography" 
            className={isActive('/photography') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Photography
          </Link>
        </li>

        <li>
          <Link 
            to="/writing" 
            className={isActive('/writing') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Writing
          </Link>
        </li>
        <li>
          <Link 
            to="/illustration" 
            className={isActive('/illustration') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Illustration
          </Link>
        </li>
     
     
          <li>
          <Link 
            to="/Biography" 
            className={isActive('/Biography') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Biography
          </Link>
        </li>

        <li>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;