import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>J. F. Tindall, Artist</h1>
        <div className="featured-image">
          <img src="/images/_DSC1439.jpg" alt="Featured artwork" />
        </div>
        <p className="mono-text">
          <span className="bold">PROJECT:</span> "Mountain" "Home"
        </p>
        <p className="mono-text">
          <span className="bold">TITLE:</span> Insomnia
        </p>
        <p className="mono-text">
          <span className="bold">DATE:</span> 9.2.2025
        </p>
        <p className="mono-text">
          <span className="bold">Location:</span> 43.12647723632509, -115.69539592773637
        </p>
      </div>

    
    </div>
  );
};

export default Homepage;