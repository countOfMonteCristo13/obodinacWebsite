import React, { useState, useEffect, useRef } from 'react';
import { IKImage } from 'imagekitio-react';
import images from '../../data/Images/images';
import navbarDropdownLinks from '../../data/navbarDropdownLinks/navbarDropdownLinks';
import DesktopNavbar from '../DesktopNavbar/DesktopNavbar';
import './navbarsection.css';
import MobileNavbar from '../MobileNavbar/MobileNavbar';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const NavbarSection = ({ activeLink }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const [offersDropdownToggleButton, setOffersDropdownToggleButton] = useState(false);
  const [galleryDropdownToggleButton, setGalleryDropdownToggleButton] = useState(false);

  const closeWindow = () => {
    if (window.innerWidth > 768) {
      setToggleMenu(false);
    }
  };
  window.addEventListener('resize', closeWindow);

  useEffect(() => {
    const activeNavLink = document.querySelector(`#${activeLink}`);
    const burgerBtn = document.querySelector('.burger');

    if (toggleMenu) {
      const menuId = `${activeLink}-menu`;
      const activeNavLinkMenu = document.querySelector(`#${menuId}`);
      activeNavLinkMenu.classList.add('menu__link-active');
    }

    if (activeLink === 'nav__home') {
      setHomePage(true);
    }

    activeNavLink.classList.add('active');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        burgerBtn.classList.add('burger-shadow');
      } else {
        burgerBtn.classList.remove('burger-shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink, toggleMenu, offersDropdownToggleButton, galleryDropdownToggleButton]);

  return (
    <nav className='o__nav'>
      <DesktopNavbar
        setGalleryDropdownToggleButton={setGalleryDropdownToggleButton}
        setOffersDropdownToggleButton={setOffersDropdownToggleButton}
        toggleMenu={toggleMenu}
        offersDropdownToggleButton={offersDropdownToggleButton}
        homePage={homePage}
        navbarDropdownLinks={navbarDropdownLinks}
        galleryDropdownToggleButton={galleryDropdownToggleButton}
      />

      <div className='o__header_menu'>
        <div
          className='o__header_menu-button burger'
          id={`${toggleMenu ? 'hide-btn' : ''}`}
          onClick={() => setToggleMenu(true)}
        >
          <img src={images.burger} alt='burger menu' />
        </div>
        {toggleMenu && (
          <div className='o__header_menu-overlay flex__center slide-bottom'>
            <div
              className='o__header_menu-button wrench'
              id={`${!toggleMenu ? 'hide-btn' : ''}`}
              onClick={() => setToggleMenu(false)}
            >
              <img src={images.maintenanceWhite} alt='wrench and screwdriver' />
            </div>
            <div className='o__header_menu-overlay_logo'>
              <IKImage urlEndpoint={urlEndpoint} path={images.obodinacFooter2} />
            </div>
            <div className='o__header_menu-overlay_links flex__center'>
              <MobileNavbar />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarSection;
