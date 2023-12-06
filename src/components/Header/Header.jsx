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
            <img src={images.obodinac} alt='obodinac logo' />
          </div>

          <div className='o__header_images'>
            <IKImage path={images.splitSistem} />
            <IKImage path={images.radiator} />
            <IKImage path={images.vent} />
          </div>
        </header>
      </IKContext>
    </div>
  );
};

export default Header;
