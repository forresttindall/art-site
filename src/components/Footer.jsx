import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>Designed and Coded by Forrest Tindall &copy; {currentYear} | Boise, Idaho, USA, Earth</p>
    </footer>
  );
};

export default Footer;