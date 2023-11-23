import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { mobileNavbarLinks } from '../../data/MobileNavbarLinks/MobileNavbarLinks';
import navbarDropdownLinks from '../../data/navbarDropdownLinks/navbarDropdownLinks';
import './mobileNavbar.css';

const MobileNavbar = () => {
  const [optionOptions, setOptionOptions] = useState([]);
  const [galleryOrOffers, setGalleryOrOffers] = useState('');
  const sliderOneRef = useRef(null);
  const sliderTwoRef = useRef(null);
  const sliderThreeRef = useRef(null);

  const showDropdown = (e, options) => {
    const linkClicked = e.parentNode.querySelector('a').innerText;
    if (linkClicked === 'Usluge' || linkClicked === 'Galerija') {
      if (linkClicked === 'Usluge') {
        setGalleryOrOffers('offers');
      } else {
        setGalleryOrOffers('gallery');
      }
      sliderOneRef.current.classList.add('slider-left');
      sliderTwoRef.current.classList.add('slider-zero');
    } else {
      sliderTwoRef.current.classList.add('slider-left');
      sliderThreeRef.current.classList.add('slider-zero');
      setOptionOptions(options);
    }
  };

  const closeDropdown = e => {
    const linkClicked = e.parentNode;
    if (linkClicked.classList.contains('slider2')) {
      sliderOneRef.current.classList.remove('slider-left');
      sliderTwoRef.current.classList.remove('slider-zero');
    } else {
      sliderTwoRef.current.classList.remove('slider-left');
      sliderThreeRef.current.classList.remove('slider-zero');
    }
  };

  return (
    <div className='o__mobile-nav'>
      <div ref={sliderOneRef} className='slider slider1'>
        <ul className='o__mobile-nav-list'>
          {Object.values(mobileNavbarLinks).map(navbarLink => (
            <div key={navbarLink.title}>
              <Link to={navbarLink.url}>
                <li className='o__mobile_nav-link' id={navbarLink.id}>
                  {navbarLink.title}
                </li>
              </Link>
              {(navbarLink.title === 'Usluge' || navbarLink.title === 'Galerija') && (
                <BsChevronRight
                  strokeWidth={1}
                  size={16}
                  className='dropdown-menu__btn'
                  onClick={e => showDropdown(e.currentTarget)}
                />
              )}
            </div>
          ))}
        </ul>
      </div>
      <div ref={sliderTwoRef} className='slider slider2'>
        <BsChevronLeft
          size={32}
          strokeWidth={2}
          className='dropdown-menu__btn'
          onClick={e => closeDropdown(e.currentTarget)}
        />
        <ul className='o__mobile-nav-list'>
          {navbarDropdownLinks.map(navbarLink => {
            if (galleryOrOffers === 'gallery' && navbarLink.id === 'polovne') {
              return null;
            }
            return (
              <div key={navbarLink.title}>
                <Link
                  to={galleryOrOffers === 'gallery' ? navbarLink.urlGalerija : navbarLink.urlUsluge}
                >
                  <li className='o__mobile_nav-link'>{navbarLink.title}</li>
                </Link>
                {navbarLink.dropdown && galleryOrOffers !== 'gallery' && (
                  <BsChevronRight
                    strokeWidth={1}
                    size={16}
                    className='dropdown-menu__btn'
                    onClick={e => showDropdown(e.currentTarget, navbarLink.options)}
                  />
                )}
              </div>
            );
          })}
        </ul>
      </div>
      <div ref={sliderThreeRef} className='slider slider3'>
        <BsChevronLeft
          size={32}
          strokeWidth={2}
          className='dropdown-menu__btn'
          onClick={e => closeDropdown(e.currentTarget)}
        />
        <ul className='o__mobile-nav-list'>
          {optionOptions.map(option => (
            <Link to={option.url} key={option.id}>
              <li className='o__mobile_nav-link'>{option.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
