import React, { useEffect } from 'react';

const GraphicDesign= () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Graphic Design</h1>

   

        <div className='project'>
          <div className="mosaic-grid">
            <img src="/images/analog2.png" alt="Featured artwork" />
            <img src="/images/analogflyer.png" alt="Featured artwork" />
            <img src="/images/bac.png" alt="Featured artwork" />
            <img src="/images/propagranda 3.png" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Boise Analog Club
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand Identity Creation And Design
          </p>
        
        </div>


 <div className='project'>
          <div className="mosaic-grid">
            <img src="/images/westsidegun mockup 1.png" alt="Featured artwork" />
            <img src="/images/westside gunn album 1-1.png" alt="Featured artwork" />
            <img src="/images/conway the machine 1 mockup.png" alt="Featured artwork" />
            <img src="/images/conway album 1-1.png" alt="Featured artwork" />
             <img src="/images/gee tee album 1 mockup.png" alt="Featured artwork" />
            <img src="/images/gee tee album 1-1.png" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Album Art
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Creative Direction and Design
          </p>
        
        </div>

     <div className='project'>
          <div className="featured-image">
            <img src="/images/LRK.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Lost River Knives
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand Identity Creation And Design
          </p>
        
        </div>
        
  



        <div className='project'>
          <div className="featured-image">
            <img src="/images/OPEN NETIZEN.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Open Netizen (non-profit organization)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand Identity Creation And Design
          </p>
        
        </div>


 



   <div className='project'>
          <div className="featured-image">
            <img src="/images/paradoxlabscard.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Paradox Labs (Tech)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand Identity Creation And Design
          </p>
        </div>

   
     <div className='project'>
          <div className="mosaic-grid">
            <img src="/images/launch art.png" alt="Featured artwork" />
            <img src="/images/new creationbase mockup.jpg" alt="Featured artwork" />
            <img src="/images/name film art.PNG" alt="Featured artwork" />
            <img src="/images/PROPAGANDA 4.PNG" alt="Featured artwork" />
            
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Creationbase (agency)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand Identity Creation And Design
          </p>
        
        </div>

 

        </div>
      </div>
    
  );
};

export default GraphicDesign;
