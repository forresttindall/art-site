import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Art Framer</h1>
        
 <div className="featured-image">
            <img src="/images/artmat.jpg" alt="Featured artwork" />
          </div>
 <p className="mono-text">
        <span className="bold">Description:</span> An Internal Design Tool
      </p>
       <p className="mono-text">
        How it works-  Manipulate the code, upload, screenshot.  Art Framer is a tool built solely for use by a design engineer. What you see below is the latest installment.
      </p>
    
       
    
      <p className="mono-text">
        <span className="bold">medium:</span> REACT, Vercel, Git
      </p>
      <p className="mono-text">
        <span className="bold">DATE:</span> 11.2.2025 - Ongoing
      </p>
      <p className="mono-text">
        <span className="bold">Location:</span> 43.816141236656456, -115.8452728429651
      </p>


   

   <div className="spacer"></div>
    <div className="spacer"></div>
     <div className="spacer"></div>
      <div className="spacer"></div>

 {/*--------------------------EDIT BELOW HERE--------------------------*/}

        <div className='project'>
          <div className="featured-image">
            <img src="/images/IMG_2605.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">PROJECT:</span> <Link to="/paperwork" className="project-link">PAPERWORK</Link>
          </p>
          <p className="mono-text">
            <span className="bold">Description:</span> Rebuilding the discipline of creation.
          </p>
          <p className="mono-text">
            <span className="bold">medium:</span> Mixed Media
          </p>
          <p className="mono-text">
            <span className="bold">DATE:</span> 11.02.2025
          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;