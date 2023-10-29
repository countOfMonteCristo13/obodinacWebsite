import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { images, spareAC, galleryImages } from '../../data';
import ImageSlider from '../ImageSlider/ImageSlider';
import './spareac.css';

const SpareAC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [imgTitle, setImgTitle] = useState('');

  useEffect(() => {
    const body = document.querySelector('body');

    if (toggleMenu) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  });

  const showACMenu = event => {
    const acCard = event.target.parentNode.parentNode;

    const imgElement = acCard.querySelector('.ac');
    const titleValue = imgElement.getAttribute('alt');

    setImgTitle(titleValue);

    setToggleMenu(true);
  };

  return (
    <div className='o__spareAC-wrapper section__padding'>
      <div className='o__spareAC'>
        {spareAC.map(klima => (
          <div className='o__spareAC-klima' key={klima.name}>
            <div className='o__spareAC-klima-img'>
              <img src={klima.image} alt={klima.name} className='ac' />
            </div>
            <div className='o__spareAC-klima-desc'>
              <h2>{klima.name}</h2>
              <p>Klima uredjaj</p>
            </div>
            <div className='o__spareAC-klima-buttons'>
              <button
                className='custom__button more-btn o__spareAC-klima-buttons_button'
                onClick={event => showACMenu(event)}
              >
                Detaljnije...
              </button>
              <Link to='/contact'>
                <button className='custom__button checkout-btn o__spareAC-klima-buttons_button'>
                  Rezerviši
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {toggleMenu && (
        <div className='o__spareAC-menu'>
          <div
            className='o__spareAC-menu_close-btn flex__center'
            onClick={() => setToggleMenu(false)}
          >
            <img src={images.maintenanceWhite} alt='close btn' />
          </div>
          <div className='o__spareAC-menu-desc-wrapper'>
            <div className='o__spareAC-menu-desc'>
              <h2>{imgTitle}</h2>
              <p>
                Veritatis dignissimos aliquid dolorum cumque et reprehenderit dolore, nesciunt omnis
                quae ipsa! Dolorem corrupti doloribus praesentium? A amet provident laboriosam sequi
                quis.
              </p>
              <Link to='/contact'>
                <button
                  className='custom__button checkout-btn o__spareAC-klima-buttons_button'
                  id='reserve-btn'
                >
                  Rezerviši
                </button>
              </Link>
            </div>
          </div>
          <div className='o__spareAC-menu-slider'>
            <ImageSlider images={galleryImages.servisKlimaImages} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpareAC;
