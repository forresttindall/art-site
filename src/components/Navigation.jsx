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
      <div className="navigation-content">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img src="/images/logo2.png" alt="Logo" />
          </Link>
        </div>
        
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>


   <li>
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Biography
          </Link>
        </li>


           <li>
          <Link 
            to="/projects" 
            className={isActive('/projects') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Projects
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
            to="/graphicdesign" 
            className={isActive('/graphicdesign') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Graphic Design
          </Link>
        </li>

          <li>
          <Link 
            to="/webdesign" 
            className={isActive('/webdesign') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Web Design
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
            to="/writing" 
            className={isActive('/writing') ? 'active' : ''}
            onClick={closeMobileMenu}
          >
            Writing
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
      </div>
    </nav>
  );
};

export default Navigation;