import React from 'react';

const Biota = () => {
  // List of all photography images from the /images folder
  const images = [
    'medium-tardigrade.JPG',
    'rotifer-life-stages.jpg',
    'large-copepod.jpg',
    'rotifer-life-stages-2.jpg',
    'nematode-vertical-1.jpg',
    'copepods-1.jpg',
    '_DSC1510.jpg', // Use the JPG version from public/images
  ];

  return (
    <div className="page-content">
      <h1>Biota</h1>
      <p className="mono-text">
        <span className="bold">Description:</span> Gaining a little perspective on a big universe.
      </p>
      <p className="mono-text">
        <span className="bold">medium:</span> Digital Microscopy
      </p>
      <p className="mono-text">
        <span className="bold">DATE:</span> 6.23.2023 - 9.31.2024
      </p>
      <p className="mono-text">
        <span className="bold">Location:</span> 43.816141236656456, -115.8452728429651
      </p>
      

      <div className="masonry-grid">
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img 
              src={`/images/${image}`} 
              alt={`Photography ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biota;
