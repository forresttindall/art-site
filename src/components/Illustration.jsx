import React from 'react';

const Illustration = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Illustration</h1>
        
        <div className='project'>
          <div className="featured-image">
            <img src="/images/beer-3.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Title:</span> Coyote Howls
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Digital
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 12.29.2023
          </p>
     
        </div>

        <div className='project'>
          <div className="featured-image">
            <img src="/images/ram-skull.jpg" alt="Featured artwork" />
          </div>
   <p className="mono-text">
            <span className="bold">Title:</span> Big Horn
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Ink & Paper
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 12.13.2023
          </p>
        </div>


        <div className='project'>
          <div className="featured-image">
            <img src="/images/mountain-best.jpg" alt="Featured artwork" />
          </div>
        <p className="mono-text">
            <span className="bold">Title:</span> Mountain minimal
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Ink & Paper
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 7.20.2023
          </p>
        </div>

        </div>
      </div>
    
  );
};

export default Illustration;