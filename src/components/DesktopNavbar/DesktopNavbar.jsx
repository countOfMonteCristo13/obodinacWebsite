import React from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import './desktopNavbar.css';

const DesktopNavbar = ({
  setOffersDropdownToggleButton,
  setGalleryDropdownToggleButton,
  toggleMenu,
  offersDropdownToggleButton,
  navbarDropdownLinks,
  galleryDropdownToggleButton,
}) => {
  return (
    <div className='o__desktop-nav'>
      <Link to='/'>
        <p className='o__desktop-nav-link' id='nav__home'>
          Početna
        </p>
      </Link>
      <Link to='/o-nama'>
        <p className='o__desktop-nav-link' id='nav__about'>
          O nama
        </p>
      </Link>
      <div
        className='o__desktop-nav__dropdown'
        onMouseEnter={() => {
          setOffersDropdownToggleButton(true);
        }}
        onMouseLeave={() => {
          setOffersDropdownToggleButton(false);
        }}
      >
        <div className='o__desktop-nav-link' id='nav__offers'>
          Usluge
          {!offersDropdownToggleButton ? (
            <BsChevronDown strokeWidth={1} />
          ) : (
            <BsChevronUp strokeWidth={1} />
          )}
        </div>
        {offersDropdownToggleButton && !toggleMenu && (
          <NavbarDropdown options={navbarDropdownLinks} galerija={false} />
        )}
      </div>
      <div
        className='o__desktop-nav__dropdown'
        onMouseEnter={() => {
          setGalleryDropdownToggleButton(true);
        }}
        onMouseLeave={() => {
          setGalleryDropdownToggleButton(false);
        }}
      >
        <div className='o__desktop-nav-link' id='nav__gallery'>
          Galerija
          {!galleryDropdownToggleButton ? (
            <BsChevronDown strokeWidth={1} />
          ) : (
            <BsChevronUp strokeWidth={1} />
          )}
        </div>
        {galleryDropdownToggleButton && !toggleMenu && (
          <NavbarDropdown
            options={navbarDropdownLinks.filter(option => option.id !== 'polovne')}
            galerija={true}
          />
        )}
      </div>

      <Link to='/najčešća-pitanja'>
        <p className='o__desktop-nav-link' id='nav__faq'>
          Najčešća pitanja
        </p>
      </Link>
      <Link to='/kontakt'>
        <p className='o__desktop-nav-link' id='nav__contact'>
          Kontakt
        </p>
      </Link>
    </div>
  );
};

export default DesktopNavbar;
