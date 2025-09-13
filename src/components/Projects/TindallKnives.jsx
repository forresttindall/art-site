import React from 'react';

const TindallKnives = () => {
  // List of all photography images from the /images folder
  const images = [
    '_DSC4434 2.JPG',
    '_DSC4300 3.JPG',
    'newerknife.jpg',
    'IMG_3343.JPG',
    '_DSC3507.JPG',
    'IMG_0678.PNG',
    'IMG_9837 2.JPG',
    'IMG_4712 2.JPG',
  ];

  return (
    <div className="page-content">
      <h1>Tindall Knives</h1>
      <p className="mono-text">
        <span className="bold">Description:</span> Living as a master knifemaker.
      </p>
      <br></br>
      <p className="mono-text">
        J F Tindall Spent the better part of a decade working as a bladesmith. Launching Tindall Knives in 2013. Tindall quickly became a viral sensation shortly after. He released a limited series of knives dubbed the Summit Knife with Best Made Co. in NYC in 2017 which sold out instantly.best
      </p>
      <br></br>
      <p className="mono-text">
        <span className="bold">medium:</span> Steel, Wood, Sweat, Blood
      </p>
      <p className="mono-text">
        <span className="bold">DATE:</span> 11.13.2013 - 9.31.2021
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

export default TindallKnives;
