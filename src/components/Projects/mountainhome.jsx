import React, { useEffect, useRef } from 'react';


const images = [
  { id: 23, src: 'gasstation.jpg', alt: 'Outdoor 23' },
  { id: 11, src: '14.jpg', alt: 'Outdoor 11' },
  
  { id: 2, src: '3.jpg', alt: 'Outdoor 2' },
  { id: 3, src: '6.jpg', alt: 'Outdoor 3' },
  { id: 5, src: 'truck.jpg', alt: 'Outdoor 5' },
  { id: 7, src: '4.jpg', alt: 'Outdoor 7' },
  { id: 8, src: '11.jpg', alt: 'Outdoor 8' },
  { id: 23, src: '_DSC1571.jpg', alt: 'Outdoor 23' },
  { id: 9, src: '2.jpg', alt: 'Outdoor 9' },
  { id: 10, src: '9.jpg', alt: 'Outdoor 10' },
  { id: 12, src: '16.jpg', alt: 'Outdoor 12' },
  { id: 1, src: '1.jpg', alt: 'Outdoor 1' },
  { id: 13, src: '17.jpg', alt: 'Outdoor 13' },
  { id: 14, src: '18.jpg', alt: 'Outdoor 14' },
  { id: 15, src: '19.jpg', alt: 'Outdoor 15' },
  
  { id: 17, src: 'adrians.jpg', alt: 'Outdoor 17' },
  { id: 18, src: 'york.jpg', alt: 'Outdoor 18' },
  { id: 22, src: 'jerrys.jpg', alt: 'Outdoor 22' },
  { id: 24, src: '_DSC1377-2.jpg', alt: 'Outdoor 24' },
  // { id: 25, src: '_DSC9596.jpg', alt: 'Outdoor 25' },
  // { id: 26, src: '_DSC1706-3.jpg', alt: 'Outdoor 26' },
  //{ id: 27, src: '_DSC4899.jpg', alt: 'Outdoor 27' },
  //{ id: 28, src: '_DSC7999-4.jpg', alt: 'Outdoor 28' },
  //{ id: 29, src: '_DSC6959-3.jpg', alt: 'Outdoor 29' },
  //{ id: 30, src: '_DSC8090.jpg', alt: 'Outdoor 30' },
];

const MountainHome = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Create CSS for masonry layout
    const style = document.createElement('style');
    style.textContent = `
      body, html {
        width: 100%;
        max-width: 100%;
      }
      
      .photography-page {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        position: relative;
      }
      
      .masonry-container {
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
      
      .masonry-grid {
        columns: 2;
        column-gap: 0;
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 0;
      }
      
      @media (max-width: 800px) {
        .masonry-grid {
          columns: 1;
        }
      }
      
      @media (min-width: 1300px) {
        .masonry-grid {
          columns: 3;
        }
      }
      
      .masonry-item {
        break-inside: avoid;
        margin: 0;
        padding: 0;
        display: block;
        width: 100%;
      }
      
      .masonry-item img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0;
        padding: 0;
      }
      
      /* Override app container styles */
      .app {
        width: 100%;
        max-width: 100%;
      }
      
      .main-content {
        padding: 0 !important;
        margin: 0 !important;
        max-width: 100% !important;
        width: 100% !important;
        overflow: hidden !important;
      }
      
      /* Ensure main content doesn't overlap with sticky nav */
      .navigation + .main-content {
        margin-top: 0 !important;
      }
    `;
    document.head.appendChild(style);

    // Initialize the gallery
    const gallery = document.createElement('div');
    gallery.className = 'masonry-grid';
    galleryRef.current.appendChild(gallery);

    // Add images to the gallery
    images.forEach((image) => {
      const figure = document.createElement('figure');
      figure.className = 'masonry-item';
      
      const img = document.createElement('img');
      img.src = `/images/${image.src}`;
      img.alt = image.alt;
      img.loading = 'lazy';
      
      figure.appendChild(img);
      gallery.appendChild(figure);
    });

    return () => {
      gallery.remove();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="photography-page">
      <div ref={galleryRef} className="masonry-container" />
    </div>
  );
};

export default MountainHome;
