import React from 'react';

const Photography = () => {
  // List of all photography images from the /images folder
  const images = [
    '1.jpg',
    '1 2.jpg',
    '2.jpg',
    '3.jpg',
    '7.jpg',
    '9.jpg',
    '11.jpg',
    '14.jpg',
    '_DSC1385.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '_DSC1298-3.jpg',
    '_DSC1377-2.jpg',
    '_DSC1439.jpg',
  ];

  return (
    <div className="page-content">
      <h1>Photography</h1>
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

export default Photography;