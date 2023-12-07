import React from 'react';
import './header.css';
import { IKImage, IKContext } from 'imagekitio-react';
import images from '../../data/Images/images';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const Header = () => {
  return (
    <div>
      <IKContext urlEndpoint={urlEndpoint}>
        <header className='o__header'>
          <div className='o__header_logo'>
            <IKImage path={images.obodinac} loading='lazy' lqip={{ active: true }} />
          </div>

          <div className='o__header_images'>
            <IKImage path={images.splitSistem} loading='lazy' lqip={{ active: true }} />
            <IKImage path={images.radiator} loading='lazy' lqip={{ active: true }} />
            <IKImage path={images.vent} loading='lazy' lqip={{ active: true }} />
          </div>
        </header>
      </IKContext>
    </div>
  );
};

export default Header;
