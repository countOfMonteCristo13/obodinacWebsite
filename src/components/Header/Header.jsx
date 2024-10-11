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
            <IKImage path={images.obodinac}  lqip={{ active: true }} />
          </div>

          <div className='o__header_images'>
            <IKImage path={images.splitSistem}  lqip={{ active: true }} />
            <IKImage path={images.radiator}  lqip={{ active: true }} />
            <IKImage path={images.vent} lqip={{ active: true }} />
          </div>
        </header>
      </IKContext>
    </div>
  );
};

export default Header;
