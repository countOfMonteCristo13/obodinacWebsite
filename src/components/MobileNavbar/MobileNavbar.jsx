import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { mobileNavbarLinks } from '../../data/MobileNavbarLinks/MobileNavbarLinks';
import navbarDropdownLinks from '../../data/navbarDropdownLinks/navbarDropdownLinks';
import './mobileNavbar.css';

const MobileNavbar = () => {
  const [optionOptions, setOptionOptions] = useState([]);
  const [galleryOrOffers, setGalleryOrOffers] = useState('');
  const [slider, setSlider] = useState('slider1');

  const showDropdown = (e, options) => {
    const linkClicked = e.parentNode.innerText;
    if (linkClicked === 'Usluge' || linkClicked === 'Galerija') {
      if (linkClicked === 'Usluge') {
        setGalleryOrOffers('offers');
      } else {
        setGalleryOrOffers('gallery');
      }
    } else {
      setOptionOptions(options);
    }

    if (slider === 'slider1') {
      setSlider('slider2');
    } else {
      setSlider('slider3');
    }
  };

  const closeDropdown = () => {
    if (slider === 'slider3') {
      setSlider('slider2');
    } else {
      setSlider('slider1');
    }
  };

  return (
    <div className='o__mobile-nav'>
      {slider === 'slider1' && (
        <div className='slider slider1 slide-enterance1'>
          <ul className='o__mobile-nav-list'>
            {Object.values(mobileNavbarLinks).map(navbarLink => (
              <div key={navbarLink.title}>
                {navbarLink.title === 'Usluge' || navbarLink.title === 'Galerija' ? (
                  <div className='o__mobile_nav-link-wrapper'>
                    <li className='o__mobile_nav-link' id={navbarLink.id}>
                      {navbarLink.title}
                    </li>
                    <BsChevronRight
                      strokeWidth={1}
                      className='dropdown-menu__btn'
                      onClick={e => showDropdown(e.currentTarget)}
                    />
                  </div>
                ) : (
                  <Link to={navbarLink.url}>
                    <li className='o__mobile_nav-link' id={navbarLink.id}>
                      {navbarLink.title}
                    </li>
                  </Link>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
      {slider === 'slider2' && (
        <div className='slider slider2 slide-enterance1'>
          <BsChevronLeft
            size={32}
            strokeWidth={2}
            className='go-back-btn'
            onClick={closeDropdown}
          />
          <ul className='o__mobile-nav-list'>
            {navbarDropdownLinks.map(navbarLink => {
              if (galleryOrOffers === 'gallery' && navbarLink.id === 'polovne') {
                return null;
              }
              return (
                <div key={navbarLink.title} className='o__mobile_nav-link-wrapper'>
                  <Link
                    to={
                      galleryOrOffers === 'gallery' ? navbarLink.urlGalerija : navbarLink.urlUsluge
                    }
                  >
                    <li className='o__mobile_nav-link'>{navbarLink.title}</li>
                  </Link>
                  {navbarLink.dropdown && galleryOrOffers !== 'gallery' && (
                    <BsChevronRight
                      strokeWidth={1}
                      className='dropdown-menu__btn'
                      onClick={e => showDropdown(e.currentTarget, navbarLink.options)}
                    />
                  )}
                </div>
              );
            })}
          </ul>
        </div>
      )}
      {slider === 'slider3' && (
        <div className='slider slider3 slide-enterance1'>
          <BsChevronLeft
            size={32}
            strokeWidth={2}
            className='go-back-btn'
            onClick={closeDropdown}
          />

          <ul className='o__mobile-nav-list'>
            {optionOptions.map(option => (
              <Link to={option.url} key={option.id}>
                <li className='o__mobile_nav-link'>{option.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
