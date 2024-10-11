import React from 'react';
import './offerssection.css';
import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const OffersSection = ({ description, image, alt, odd, href }) => {
  return (
    <div className='o__offersSection section__padding' id={odd}>
      <div className='o__offersSection_details'>
        <p>{description}</p>
        {href !== undefined && (
          <Link to={href}>
            <button className='custom__button checkout-btn'>Galerija</button>
          </Link>
        )}
      </div>
      <div className='o__offersSection_img flex__center'>
        <div className='o__offersSection_img-wrapper'>
          <IKImage urlEndpoint={urlEndpoint} path={image} loading='lazy' lqip={{ active: true, quality: 20 }} />
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
