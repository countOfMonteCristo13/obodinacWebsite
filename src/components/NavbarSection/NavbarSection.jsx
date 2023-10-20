import React, { useState, useEffect } from 'react'
import { images } from '../../constants';
import './navbarsection.css'

import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import { navbarDropdownLinks } from '../../constants/navbarDropdownLinks';

const NavbarSection = ({ activeLink }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const [offersDropdownToggleButton, setOffersDropdownToggleButton] = useState(false);
  const [addOffersDropdownToggleButton, setAddOffersDropdownToggleButton] = useState(false);


  const closeWindow = () => {
    if (window.innerWidth > 767) {
      setToggleMenu(false);
    }
  }
  window.addEventListener('resize', closeWindow);

  useEffect(() => {
    const activeNavLink = document.querySelector(`#${activeLink}`);
    // const navbar = document.querySelector('.o__navbarSection');
    const burgerBtn = document.querySelector('.burger');


    if (toggleMenu) {
      const menuId = activeLink + '-menu';
      const activeNavLinkMenu = document.querySelector(`#${menuId}`)
      activeNavLinkMenu.classList.add('menu__shadow-link');
      console.log(activeLink + '-menu');
      console.log(activeNavLinkMenu)
    }

    if (activeLink === 'nav__home') {
      setHomePage(true);
    }

    activeNavLink.classList.add('btm-border');


    const handleScroll = () => {
      if (window.scrollY > 0) {
        burgerBtn.classList.add('burger-shadow');
        // navbar.classList.add('o__navbarSection-shadow');
      } else {
        burgerBtn.classList.remove('burger-shadow');
        // navbar.classList.remove('o__navbarSection-shadow');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink, toggleMenu])


  return (
    <nav className='o__nav'>
      <div className="o__navbarSection">
        <Link to={'/'}><p className="o__navbarSection-link" id='nav__home'>Početna</p></Link>
        <Link to={'/o-nama'}><p className="o__navbarSection-link" id='nav__about'>O nama</p></Link>
        <div className='nav__dropdown'>
          <p className="o__navbarSection-link" id='nav__offers' onClick={() => {
            setOffersDropdownToggleButton(!offersDropdownToggleButton);
            setAddOffersDropdownToggleButton(false);
          }}>
            Usluge {!offersDropdownToggleButton ? <BsChevronDown strokeWidth={1} /> : <BsChevronUp strokeWidth={1} />}
          </p>
          {offersDropdownToggleButton && <NavbarDropdown options={navbarDropdownLinks} galerija={false}/>}
        </div>
        {
          !homePage &&
          <img src={images.obodinacFooter2} alt="obodinac logo" />
        }
        <div className='nav__dropdown'>
          <p className="o__navbarSection-link" id='nav__addoffers' onClick={() => {
            setAddOffersDropdownToggleButton(!addOffersDropdownToggleButton);
            setOffersDropdownToggleButton(false);
          }}>
            Galerija {!addOffersDropdownToggleButton ? <BsChevronDown strokeWidth={1} /> : <BsChevronUp strokeWidth={1} />}
          </p>
          {addOffersDropdownToggleButton && <NavbarDropdown options={navbarDropdownLinks} galerija={true}/>}
        </div>

        <Link to={'/galerija'}><p className="o__navbarSection-link" id='nav__gallery'>Najčešća pitanja</p></Link>
        <Link to={'/kontakt'}><p className="o__navbarSection-link" id='nav__contact'>Kontakt</p></Link>

      </div>

      <div className='o__header_menu'>
        <div className='o__header_menu-button burger' id={`${toggleMenu ? 'hide-btn' : ''}`} onClick={() => setToggleMenu(true)}>
          <img src={images.burger} alt="burger menu" />
        </div>
        {
          toggleMenu && (
            <div className='o__header_menu-overlay flex__center slide-bottom'>
              <div className='o__header_menu-button wrench' id={`${!toggleMenu ? 'hide-btn' : ''}`} onClick={() => setToggleMenu(false)}>
                <img src={images.maintenanceWhite} alt="wrench and screwdriver" />
              </div>
              <img className='o__header_menu-overlay_logo' src={images.obodinacFooter2} alt="obodinac logo" />
              <ul className={`o__header_menu-overlay-links`}>
                <Link to={'/'}><li className='menu-link' id='nav__home-menu'>Početna</li></Link>
                <Link to={'/o-nama'}><li className='menu-link' id='nav__about-menu'>O nama</li></Link>
                <Link to={'/usluge'}><li className='menu-link' id='nav__offers-menu'>Usluge</li></Link>
                <Link to={'/dodatne-usluge'}><li className='menu-link' id='nav__addoffers-menu'>Dodatne usluge</li></Link>
                <Link to={'/galerija'}><li className='menu-link' id='nav__gallery-menu'>Galerija</li></Link>
                <Link to={'/kontakt'}><li className='menu-link' id='nav__contact-menu'>Kontakt</li></Link>
              </ul>
            </div>
          )
        }

      </div>

    </nav>
  )
}

export default NavbarSection
