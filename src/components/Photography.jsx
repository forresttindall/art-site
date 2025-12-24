import React, { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


const images = [
  { id: 30, src: '30.jpg', alt: 'Photography 30' },
  { id: 31, src: '31.jpg', alt: 'Photography 31' },
  { id: 32, src: '32.jpg', alt: 'Photography 32' },
  { id: 33, src: '33.jpg', alt: 'Photography 33' },
  { id: 34, src: '34.jpg', alt: 'Photography 34' },
  { id: 35, src: '35.jpg', alt: 'Photography 35' },
  { id: 36, src: '36.jpg', alt: 'Photography 36' },
  { id: 37, src: '37.jpg', alt: 'Photography 37' },
  { id: 38, src: '38.jpg', alt: 'Photography 38' },
  { id: 39, src: '39.jpg', alt: 'Photography 39' },
  { id: 40, src: '40.jpg', alt: 'Photography 40' },
  { id: 41, src: '41.jpg', alt: 'Photography 41' },
  { id: 42, src: '42.jpg', alt: 'Photography 42' },
  { id: 43, src: '43.jpg', alt: 'Photography 43' },
  { id: 44, src: '44.jpg', alt: 'Photography 44' },
  { id: 45, src: '45.jpg', alt: 'Photography 45' },
  { id: 46, src: '46.jpg', alt: 'Photography 46' },
  { id: 47, src: '47.jpg', alt: 'Photography 47' },
  { id: 48, src: '48.jpg', alt: 'Photography 48' },
  { id: 49, src: '49.jpg', alt: 'Photography 49' },
  { id: 50, src: '50.jpg', alt: 'Photography 50' },
  { id: 51, src: '51.jpg', alt: 'Photography 51' },
  { id: 52, src: '52.jpg', alt: 'Photography 52' },
];

const Photography = () => {
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

    // Initialize PhotoSwipe
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.masonry-grid',
      children: '.masonry-item',
      pswpModule: () => import('photoswipe')
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
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

export default Photography;
