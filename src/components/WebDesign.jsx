import React, { useEffect } from 'react';

const WebDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <div className="homepage">
      <div className="page-content">
        <h1>Web Design</h1>

   

 <div className='project'>
          <p className="mono-text">
            <span className="bold">Brand:</span> <a href="https://ricocosign.com">Ricochet</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Asset Design, Web Design
          </p>
          <p className="mono-text">
            <span className="bold">Team:</span> <a href="https://superbase.co">Superbase</a>
          </p>
            <p className="mono-text">
            <span className="bold">Team Members:</span> Mickey Martin, Madi Cleave, Tyler Crab 
          </p>
          <div className="mosaic-grid">
            <img src="/images/ricochet mockup.png" alt="Featured artwork" />
            <img src="/images/Exportable tables.PNG" alt="Featured artwork" />
            <img src="/images/Hourly Sales.PNG" alt="Featured artwork" />
            <img src="/images/cashflow managment.PNG" alt="Featured artwork" />
            <img src="/images/quickbooks integration.PNG" alt="Featured artwork" />
          
            
          </div>
        
        </div>


   <div className='project'>
          <p className="mono-text">
            <span className="bold">Brand:</span> <a className='project-link' target="_blank" href='https://www.creationbase.io/'>Creationbase (agency)</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Brand Identity Creation, Web Design & Development.
          </p>
          <div className="featured-image2">
            <img src="/images/new site.png" alt="Featured artwork" />
          </div>
        </div>

         
        
    <div className='project'>
          <p className="mono-text">
            <span className="bold">Brand:</span> Arrowleaf (restaurant)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> Web Design & Development
          </p>
          <div className="featured-image2">
            <img src="/images/arrowleaf.png" alt="Featured artwork" />
          </div>
        
        </div>




        <div className='project'>
          <p className="mono-text">
            <span className="bold">APP:</span> <a className='project-link' target="_blank" href='https://github.com/forresttindall/ClearFeed-RSS-Reader'>ClearFeed</a>
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> UX/UI Design & Development
          </p>
          <div className="featured-image2">
            <img src="/images/clearfeed.png" alt="Featured artwork" />
          </div>
        
        </div>


   <div className='project'>
          <p className="mono-text">
            <span className="bold">Brand:</span> Fast Burger (restaurant)
          </p>
          <p className="mono-text">
            <span className="bold">Work:</span> UX/UI Design & Development
          </p>
          <div className="featured-image2">
            <img src="/images/fastburger.png" alt="Featured artwork" />
          </div>
       
        </div>


 

   


 

        </div>
      </div>
    
  );
};

export default WebDesign;
