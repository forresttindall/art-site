import React, { useEffect, useRef } from 'react';
  
const images = [
    { id: 11, src: 'IMG_2272-2.jpg', alt: 'Outdoor 11' },
  { id: 23, src: 'gasstation.jpg', alt: 'Outdoor 23' },
    { id: 13, src: '_DSC1392-2.jpg', alt: 'Outdoor 13' },
    { id: 21, src: '_DSC1477.jpg', alt: 'Outdoor 21' },
    { id: 22, src: 'IMG_2792.JPG', alt: 'Outdoor 22' },
    { id: 24, src: 'hero.jpg', alt: 'Outdoor 24' },



];

const LiminalSpaces = () => {
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

export default LiminalSpaces;
