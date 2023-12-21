import React, { useEffect, useState } from 'react';
import './gallerypage.css';
import { NavbarSection } from '../../components';
import { BlueLine } from '../../utils';
import images from '../../data/Images/images';

const GalleryPage = ({ gImages, title }) => {
  const [filterGalleryImages, setFilterGalleryImages] = useState('Sve');
  const [overlayImg, setOverlayImg] = useState('');
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  useEffect(() => {
    setFilterGalleryImages('Sve');
    setOverlay(false);
    const allImages = document.querySelectorAll('.gallery__img');
    allImages.forEach(div => {
      const img = div.querySelector('img');
      function loaded() {
        div.classList.add('loaded');
      }
      if (img.complete) {
        // ako je istina slika je vec skinuta
        loaded();
      } else {
        img.addEventListener('load', loaded);
      }
    });
  }, [title]);

  useEffect(() => {
    const allImages = document.querySelectorAll('.gallery__img');
    allImages.forEach(div => {
      const img = div.querySelector('img');
      function loaded() {
        div.classList.add('loaded');
      }
      if (img.complete) {
        loaded();
      } else {
        img.addEventListener('load', loaded);
      }
    });
  }, [filterGalleryImages]);

  return (
    <div className='gallery-page slide-enterance1' key={title}>
      <NavbarSection activeLink='nav__gallery' />
      <div className='headtext flex__center'>
        <h2>{title}</h2>
      </div>
      <BlueLine />
      <div className='gallery-filter-types flex__center'>
        {Object.keys(gImages).map(filterType => {
          return (
            <div
              key={filterType}
              className={`gallery-filter-type ${filterType === filterGalleryImages && 'active'}`}
              onClick={() => setFilterGalleryImages(filterType)}
            >
              {filterType}
            </div>
          );
        })}
      </div>
      <div className='gallery__grid'>
        {gImages[
          !Object.keys(gImages).includes(filterGalleryImages) ? 'Sve' : filterGalleryImages
        ].map((image, index) => {
          return (
            <div
              key={image.full}
              className='gallery__img blur-load'
              style={{ backgroundImage: `url(${image.blur})` }}
              onClick={() => {
                setOverlay(true);
                setOverlayImg(image.full);
              }}
            >
              <img src={image.full} alt={`#${index} img`} loading='lazy' />
            </div>
          );
        })}
      </div>
      {overlay && (
        <div className='gallery-img-overlay flex__center'>
          <div className='overlay-exit' onClick={() => setOverlay(false)}>
            <img src={images.maintenanceWhite} alt='wrench and screwdriver' />
          </div>
          <div className='overlay-img-wrapper'>
            <img src={overlayImg} alt='overlay img' />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
