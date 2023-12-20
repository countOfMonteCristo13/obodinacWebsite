/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../../data/Images/images';
import ImageSlider from '../ImageSlider/ImageSlider';
import './spareac.css';
import useSpareACs from '../../hooks/useSpareACs';
import Loader from '../Loader/Loader';

const SpareAC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [imgTitle, setImgTitle] = useState('');
  const [sliderImgs, setSliderImgs] = useState([]);

  const { data, isLoading, error } = useSpareACs('acs/get-spare-acs');

  useEffect(() => {
    const body = document.querySelector('body');

    if (toggleMenu) {
      body.classList.add('overflow-hidden');
    } else {
      body.classList.remove('overflow-hidden');
    }
  });

  const showACMenu = (event, ac) => {
    const acCard = event.target.parentNode.parentNode;

    const imgElement = acCard.querySelector('.ac');
    const titleValue = imgElement.getAttribute('alt');

    setImgTitle(ac.title);
    setSliderImgs(ac.sliderImgs);

    setToggleMenu(true);
  };

  return (
    <div className='o__spareAC-wrapper section__padding'>
      {isLoading ? (
        <Loader width={64} height={64} border={4} />
      ) : (
        <div className='o__spareAC'>
          {data.length === 0 ? (
            <h2 className='o__spareAC-no-ac-info'>Na stanju trenutno nema polovnih klima</h2>
          ) : (
            data.map(klima => (
              <div className='o__spareAC-klima' key={klima._id}>
                <div className='o__spareAC-klima-img'>
                  <img src={klima.coverImg} alt={klima.title} className='ac' />
                </div>
                <div className='o__spareAC-klima-desc'>
                  <h2>{klima.title}</h2>
                  <p>Klima uredjaj</p>
                </div>
                <div className='o__spareAC-klima-buttons'>
                  <button
                    className='custom__button more-btn o__spareAC-klima-buttons_button'
                    onClick={event => showACMenu(event, klima)}
                  >
                    Detaljnije...
                  </button>
                  <Link to='/kontakt'>
                    <button className='custom__button checkout-btn o__spareAC-klima-buttons_button'>
                      Rezerviši
                    </button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      )}

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
              <p>{data[0].description}</p>
              <Link to='/kontakt'>
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
            <ImageSlider images={sliderImgs} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpareAC;
