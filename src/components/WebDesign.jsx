import React from 'react';

const WebDesign= () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1>Web Design</h1>

   
        
    <div className='project'>
          <div className="featured-image">
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
          <div className="featured-image">
            <img src="/images/creationbase.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> <a className='project-link'href='https://www.creationbase.io/'>Creationbase (agency)</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand identity creation, web design & development.
          </p>
        </div>


        <div className='project'>
          <div className="featured-image">
            <img src="/images/clearfeed.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">APP:</span> <a className='project-link'href='https://github.com/forresttindall/ClearFeed-RSS-Reader'>ClearFeed</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> UX/UI Design & Development
          </p>
        
        </div>


   <div className='project'>
          <div className="featured-image">
            <img src="/images/quantumkeep2.png" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Brand:</span> <a className='project-link'href='https://www.quantumkeep.io/'>Quantum Keep (software)</a>
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
