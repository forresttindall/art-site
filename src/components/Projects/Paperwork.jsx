import React from 'react';

const Paperwork = () => {
  // List of all photography images from the /images folder
  const images = [
    '_DSC1507.JPG',
    '_DSC1503.JPG',
    'IMG_1563.jpg',
    'IMG_1585.jpg',
    'IMG_1616.jpg'

  ];

  return (
    <div className="page-content">
      <h1>Paperwork</h1>
      <div>
           <p className="mono-text">
            <span className="bold">Description:</span> Rebuilding the discipline of creation. Paperwork is a daily practice of creation, where the only rule is to finish.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Mixed Media
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 9.11.2025 - Ongoing
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130958950600046, -115.69111856513878
          </p>
        </div>
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

export default Paperwork;
