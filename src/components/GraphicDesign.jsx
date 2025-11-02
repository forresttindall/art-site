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
          <div className="featured-image">
            <video src="/images/cbliquid.mov" autoPlay loop muted playsInline />
            <img src="/images/banner.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Creationbase (agency)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation and design
          </p>
        
        </div>


     <div className='project'>
          <div className="featured-image">
            <img src="/images/lrk.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Tindall Knives
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation and design
          </p>
        
        </div>
        
  



        <div className='project'>
          <div className="featured-image">
            <img src="/images/design/Open-Netizen.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Open Netizen (non-profit organization)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation and design
          </p>
        
        </div>


   <div className='project'>
          <div className="featured-image">
            <img src="/images/design/logo.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Lavendair (software)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation and design
          </p>
       
        </div>



   <div className='project'>
          <div className="featured-image">
            <img src="/images/design/paradoxlabsgreensmaller.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Paradox Labs (Tech)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation and design
          </p>
        </div>

   


 

        </div>
      </div>
    
  );
};

export default GraphicDesign;
