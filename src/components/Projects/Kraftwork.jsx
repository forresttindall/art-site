import React from 'react';
import { Link } from 'react-router-dom';

const Kraftwork = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Kraftwork</h1>
        

                      <div className='project'>
          <div className="featured-image">
            <img src="/images/IMG_1618 2.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> MK1 Camera Leash
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Building a camera leash from scratch.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Parachute cord, micro cord, heatshrink tube
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 9.15.2025 
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130975465673544, -115.69113027021278
          </p>
        </div>

                  <div className='project'>
          <div className="featured-image">
            <img src="/images/_DSC0181.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> Piggyback
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> LoRa radio cellphone texting device.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Heltec V3, wire, switch, battery, PLA.
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 10.26.2024
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130975465673544, -115.69113027021278
          </p>
        </div>


      </div>
    </div>
  );
};

export default Kraftwork;
