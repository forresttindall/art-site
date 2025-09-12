import React from 'react';
import '../App.css';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const navItems = ['PROJECTS', 'PHOTOGRAPHY', 'WRITING', 'ILLUSTRATION', 'BIOGRAPHY', 'CONTACT'];   

  return (
    <nav className="navigation">
      <div className="logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
        <img src="/images/redx.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <button 
            className={currentPage === 'home' ? 'active' : ''}
            onClick={() => setCurrentPage('home')}
          >
            HOME
          </button>
        </li>
        {navItems.map((item) => (
          <li key={item}>
            <button 
              className={currentPage === item.toLowerCase() ? 'active' : ''}
              onClick={() => setCurrentPage(item.toLowerCase())}
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