import React from 'react';
import './additionaloffers.css';
import { Link } from 'react-router-dom';
import images from '../../data/Images/images';
import texts from '../../data/Texts/texts';
import HeadTitle from '../../utils/HeadTitle/HeadTitle';

const AdditionalOffers = () => {
  return (
    <div>
      <HeadTitle title='Dodatne usluge' />

      <div className='o__additional_section'>
        <div className='o__additional_container'>
          <div className='o__additional_container-part flex__center part_1'>
            <div className='o__additional-img-wrapper'>
              <img src={images.kirnerica} alt='kirnerica' />
            </div>
          </div>
          <div className='o__additional_container-part part_2'>
            <p>{texts.tekstNaslovna.dodatneUslugeD}</p>
            <Link to='/addoffers'>
              <button className='custom__button more-btn' type='button'>
                Detaljnije...
              </button>
            </Link>
          </div>
          <div className='o__additional_container-part flex__center part_3'>
            <div className='o__additional-img-wrapper'>
              <img src={images.servisKlime} alt='servis klime' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOffers;
