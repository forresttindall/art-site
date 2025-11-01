import React, { useEffect } from 'react';

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-content">
      <div className="">
        <h1>Web Design</h1>

   


   <div className='project'>
          <div className="featured-image2">
            <img src="/images/creationbase.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> <a className='project-link' target="_blank" href='https://www.creationbase.io/'>Creationbase (agency)</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation, web design & development.
          </p>
        </div>

         
        
    <div className='project'>
          <div className="featured-image2">
            <img src="/images/arrowleaf.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> Arrowleaf (restaurant)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Web Design & Development
          </p>
        
        </div>




        <div className='project'>
          <div className="featured-image2">
            <img src="/images/clearfeed.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">APP:</span> <a className='project-link' target="_blank" href='https://github.com/forresttindall/ClearFeed-RSS-Reader'>ClearFeed</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> UX/UI Design & Development
          </p>
        
        </div>


   <div className='project'>
          <div className="featured-image2">
            <img src="/images/quantumkeep2.png" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> <a className='project-link' target="_blank" href='https://www.quantumkeep.io/'>Quantum Keep (software)</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> UX/UI Design & Development
          </p>
       
        </div>


   <div className='project'>
          <div className="featured-image2">
            <img src="/images/githubactivity.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Project:</span> Github Calendar Graph Component
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> UX/UI Design & Development
          </p>
       
        </div>

   


 

        </div>
      </div>
    
  );
};

export default WebDesign;
