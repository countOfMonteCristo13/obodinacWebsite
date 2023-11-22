import React from 'react';
import './offerssection.css';
import { Link } from 'react-router-dom';

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
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
