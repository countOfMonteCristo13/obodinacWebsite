import React, { useEffect } from 'react';
import './gallerypage.css';
import { IKImage } from 'imagekitio-react';
import images from '../../data/Images/images';
import { NavbarSection } from '../../components';
import { ScrollUp, BlueLine } from '../../utils';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const GalleryPage = ({ gImages, title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__gallery' />
        <div className='headtext flex__center'>
          <h2>{title}</h2>
        </div>
        <BlueLine />
        <div className='gallery__grid section__padding'>
          {gImages.map((image, index) => (
            <div key={image} className='gallery__img'>
              {/* <img src={image} alt={`Slika ${index}`} /> */}
              <IKImage
                urlEndpoint={urlEndpoint}
                path={image}
                lqip={{ active: true }}
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
