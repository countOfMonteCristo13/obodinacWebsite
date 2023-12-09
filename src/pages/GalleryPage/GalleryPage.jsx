import React, { useEffect, useState } from 'react';
import './gallerypage.css';
import { IKImage } from 'imagekitio-react';
import { NavbarSection } from '../../components';
import { BlueLine } from '../../utils';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const GalleryPage = ({ gImages, title }) => {
  const [filterGalleryImages, setFilterGalleryImages] = useState('Sve');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFilterGalleryImages('Sve');
  }, [title]);

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
        {gImages.Sve.map(image => {
          const lowerFilter = filterGalleryImages.toLowerCase();
          if (lowerFilter === 'sve') {
            return (
              <div key={image} className='gallery__img'>
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={image}
                  lqip={{ active: true, quality: 20 }}
                  loading='lazy'
                />
              </div>
            );
          }
          if (image.includes(lowerFilter)) {
            return (
              <div key={image} className='gallery__img'>
                <IKImage
                  urlEndpoint={urlEndpoint}
                  path={image}
                  lqip={{ active: true }}
                  loading='lazy'
                />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
