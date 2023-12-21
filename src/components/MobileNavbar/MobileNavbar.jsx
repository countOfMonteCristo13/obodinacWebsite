import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import {
  mobileNavbarLinks,
  galleryNavbarLinks,
  offersNavbarLinks,
} from '../../data/MobileNavbarLinks/MobileNavbarLinks';
import './mobileNavbar.css';

const MobileNavbar = () => {
  const [optionOptions, setOptionOptions] = useState([]);
  const [slider, setSlider] = useState('slider1');
  const [navLinkClicked, setNavLinkClicked] = useState('');

  const toSliderTwo = () => {
    setSlider('slider2');
    setNavLinkClicked('Galerija');
  };

  const toSliderThree = () => {
    setSlider('slider3');
    setNavLinkClicked('Usluge');
  };

  const showDropdown = options => {
    setSlider('slider4');
    setOptionOptions(options);
  };

  const closeDropdown = () => {
    if (slider === 'slider4') {
      if (navLinkClicked === 'Usluge') {
        setSlider('slider3');
      } else if (navLinkClicked === 'Galerija') {
        setSlider('slider2');
      }
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
                      onClick={() => {
                        switch (navbarLink.title) {
                          case 'Galerija':
                            toSliderTwo();
                            break;
                          case 'Usluge':
                            toSliderThree();
                            break;
                          default:
                            toSliderTwo();
                        }
                      }}
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
            {galleryNavbarLinks.map(navLink => (
              <Link to={navLink.url} key={navLink.id}>
                <li className='o__mobile_nav-link'>{navLink.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}

      {slider === 'slider3' && (
        <div className='slider slider2 slide-enterance1'>
          <BsChevronLeft
            size={32}
            strokeWidth={2}
            className='go-back-btn'
            onClick={closeDropdown}
          />
          <ul className='o__mobile-nav-list'>
            {offersNavbarLinks.map(navLink => (
              <div className='o__mobile_nav-link-wrapper' key={navLink.id}>
                <Link to={navLink.url}>
                  <li className='o__mobile_nav-link'>{navLink.title}</li>
                </Link>
                {navLink.dropdown && (
                  <BsChevronRight
                    strokeWidth={1}
                    className='dropdown-menu__btn'
                    onClick={e => showDropdown(navLink.options)}
                  />
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
      {slider === 'slider4' && (
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
