import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Projects</h1>
        

                  <div className='project'>
          <div className="featured-image">
            <img src="/images/_DSC1513.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/gph" className="project-link">General Purpose Human</Link>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Cultivating a polymath spirit.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Mixed Media
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 9.12.2025 - 
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130975465673544, -115.69113027021278
          </p>
        </div>




        <div className='project'>
          <div className="featured-image">
            <img src="/images/_DSC1439.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/Photography" className="project-link">"Mountain" "Home"</Link>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Capturing the dishonest nomenclature of a flat alien town.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> 35mm Film
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 6.22.2025 - 
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130975465673544, -115.69113027021278
          </p>
        </div>



        <div className='project'>
          <div className="featured-image">
            <img src="/images/_DSC1507.JPG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/paperwork" className="project-link">Paperwork</Link>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Rebuilding the discipline of creation.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Mixed Media
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 9.11.2025 - 
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.130958950600046, -115.69111856513878
          </p>
        </div>





          <div className='project'>
          <div className="featured-image">
            <img src="/images/_DSC9844.JPG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/SiliconMountain" className="project-link">Silicon Mountain</Link>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> The art and science of the computer
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Silicon, Gold, JavaScript
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 8.18.2023 - 9.11.25
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.816141236656456, -115.8452728429651
          </p>
        </div>


        <div className='project'>
          <div className="featured-image">
            <img src="/images/medium-tardigrade.JPG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/Biota" className="project-link">Biota</Link>
          </p>
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
        </div>


        <div className='project'>
          <div className="featured-image">
            <img src="/images/_DSC4434 2.JPG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/TindallKnives" className="project-link">Tindall Knives</Link>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Master Knifemaking
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Steel, Wood, Sweat, Blood
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 6.23.2023 - 9.31.2024
          </p>
          <p className="mono-text">
            <span className="bold">Location:</span> 43.816141236656456, -115.8452728429651
          </p>
        </div>



      </div>
    </div>
  );
};

export default Projects;