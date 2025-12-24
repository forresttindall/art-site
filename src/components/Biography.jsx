import React, { useEffect } from 'react';

const Biography = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
     <div className="homepage">
      <div className="homepage-content">
      <h1>Biography</h1>
      

     


      <div className="featured-image2">
        <div className="biography-image">
        <img src="/images/IMG_4027-3 2.jpg" alt="Biography photo" />
        </div>
      </div>
      
<p className="mono-text spacer-text">
  J. F. Tindall is a Fullstack Creative from Boise, Idaho, raised in the wide landscapes of the American West. His work spans photography, design, art, and web development, blending technical precision with visual storytelling.
</p>

<p className="mono-text spacer-text">
  He began making art early, first through drawing and writing, then discovering film photography at thirteen. In 2012, he began designing logos, websites, and he launched <em>Tindall Knives</em>, beginning an over decade-long career as a bladesmith. Around the same time, he started a parallel path in photography, focusing on outdoor and product photography for the knife and tool industry. His photography has been featured in multiple publications, including <em>Popular Mechanics Magazine</em>.
</p>

<p className="mono-text spacer-text">
  Years spent shaping steel by hand in the mountains became a study in patience, discipline, and craftsmanship, qualities that continue to define his creative work today. Through photography, design, writing, illustration, and mixed media, Tindall explores identity, society, and the subtle contradictions of modern life, examining the space between what we call things and what they truly are.
</p>

<p className="mono-text spacer-text">
  His work has appeared in exhibitions, global publications, and bespoke retailers, reflecting an ongoing effort to bridge the personal and the universal.
</p>



<div className="spacer"></div>
 <div className='spacer'></div>
      <h1>Publications</h1>
    
        <div className='project'>
           <div className="featured-image">
            <img src="/images/IMG_3005.jpg" alt="Featured artwork" />
            <img src="/images/IMG_3004.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Publication:</span> Popular Mechanics Magazine
          </p>
           <p className="mono-text">
            <span className="bold">Description:</span> Magazine Feature
          </p>
          <p className="mono-text">
            <span className="bold">Date:</span> JULY/AUG 2017
          </p>
        </div>

 <div className='project'>
           <div className="featured-image">
            <img src="/images/campfire.JPG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Publication:</span> Sun Valley Magazine
          </p>
            <p className="mono-text">
            <span className="bold">Description:</span> Magazine Feature
          </p>
          <p className="mono-text">
            <span className="bold">Date:</span> 9.23.2019
          </p>
        </div>

 <div className='project'>
           <div className="featured-image">
            <img src="/images/IMG_8359.JPG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Publication:</span> Condor Knife And Tool
          </p>
            <p className="mono-text">
            <span className="bold">Description:</span> Catalog Cover
          </p>
          <p className="mono-text">
            <span className="bold">Date:</span> 1.30.2017
          </p>
        </div>

 <div className='project'>
           <div className="featured-image">
            <img src="/images/_DSC9182.jpg" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Publication:</span> SHOT Show
          </p>
            <p className="mono-text">
            <span className="bold">Description:</span> Exhibit Wall
          </p>
          <p className="mono-text">
            <span className="bold">Date:</span> 2016 & 2017
          </p>
  </div>
    
 <div className='project'>
           <div className="featured-image">
            <img src="/images/bestmade.PNG" alt="Featured artwork" />
          </div>
          <p className="mono-text">
            <span className="bold">Publication:</span> Best Made Co. NYC
          </p>
            <p className="mono-text">
            <span className="bold">Description:</span> Limited Edition Knife Collaboration 
          </p>
          <p className="mono-text">
            <span className="bold">Date:</span> 2017
          </p>
        </div>

      </div>
    </div>
   
  );
};

export default Biography;