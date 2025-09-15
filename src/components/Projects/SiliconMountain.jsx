import React from 'react';
import { Link } from 'react-router-dom';

const SiliconMountain = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Silicon Mountain</h1>
        

                  <div className='project'>
          <div className="featured-image">
            <img src="/images/clearfeed.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <a href="https://github.com/forresttindall/ClearFeed-RSS-Reader" className="project-link" target="_blank" rel="noopener noreferrer">ClearFeed</a>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Open source ad free, distraction free RSS app.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Software
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 7.28.2025 
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130975465673544, -115.69113027021278
          </p>
        </div>

           <div className='project'>
          <div className="featured-image">
            <img src="/images/quantumkeep2.png" alt="Featured artwork" />
          </div>
          <p className="mono-text">
             <span className="bold">PROJECT:</span> <a href="https://github.com/forresttindall/QuantumKeep" className="project-link" target="_blank" rel="noopener noreferrer">QuantumKeep</a>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Quantum random enhanced file encryption.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Software
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 1.10.2025 
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130975465673544, -115.69113027021278
          </p>
        </div>

        </div>
        
      </div>
  );
};

export default SiliconMountain;
