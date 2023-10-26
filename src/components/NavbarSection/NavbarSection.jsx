import React, { useState, useEffect, useRef } from 'react'
import { images, navbarDropdownLinks } from '../../data';
import './navbarsection.css'

import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';
import NavbarMenuDropdown from '../NavbarMenuDropdown/NavbarMenuDropdown';

const NavbarSection = ({ activeLink }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [homePage, setHomePage] = useState(false);

  const [offersDropdownToggleButton, setOffersDropdownToggleButton] = useState(false);
  const [galleryDropdownToggleButton, setGalleryDropdownToggleButton] = useState(false);
  const [offersDropdownHeight,setOffersDropdownHeight] = useState(0);
  const [galleryDropdownHeight,setGalleryDropdownHeight] = useState(0);

  const menuOffersDropdownRef = useRef(null);
  const menuGalleryDropdownRef = useRef(null);

  const closeWindow = () => {
    if (window.innerWidth > 768) {
      setToggleMenu(false);
    }
  }
  window.addEventListener('resize', closeWindow);

  useEffect(() => {
    const activeNavLink = document.querySelector(`#${activeLink}`);
    const burgerBtn = document.querySelector('.burger');

    if(offersDropdownToggleButton && window.innerWidth < 769){
      console.log(menuOffersDropdownRef.current.firstChild.scrollHeight,'sta ima')
      setOffersDropdownHeight(menuOffersDropdownRef.current.firstChild.scrollHeight);
    }else{
      setOffersDropdownHeight(0);
    }
    if(galleryDropdownToggleButton && window.innerWidth < 769){
      console.log(menuGalleryDropdownRef.current.firstChild.scrollHeight,'sta ima')
      setGalleryDropdownHeight(menuGalleryDropdownRef.current.firstChild.scrollHeight);
    }else{
      setGalleryDropdownHeight(0);
    }

    if (toggleMenu) {
      const menuId = activeLink + '-menu';
      const activeNavLinkMenu = document.querySelector(`#${menuId}`)
      activeNavLinkMenu.classList.add('menu__shadow-link');
      // console.log(activeLink + '-menu');
      // console.log(activeNavLinkMenu)
    }

    if (activeLink === 'nav__home') {
      setHomePage(true);
    }

    activeNavLink.classList.add('btm-border');

    const handleScroll = () => {
      if (window.scrollY > 0) {
        burgerBtn.classList.add('burger-shadow');
      } else {
        burgerBtn.classList.remove('burger-shadow');
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink, toggleMenu,offersDropdownToggleButton,galleryDropdownToggleButton])

  const closeDropdown = () => {
    setGalleryDropdownToggleButton(false);
    setOffersDropdownToggleButton(false);
  }

  return (
    <nav className='o__nav'>
      <div className="o__navbarSection">
        <Link to={'/'}><p className="o__navbarSection-link" id='nav__home'>Početna</p></Link>
        <Link to={'/o-nama'}><p className="o__navbarSection-link" id='nav__about'>O nama</p></Link>
        <div className='nav__dropdown'>
          <p className="o__navbarSection-link" id='nav__offers' onClick={() => {
            setOffersDropdownToggleButton(!offersDropdownToggleButton);
            setGalleryDropdownToggleButton(false);
          }}>
            Usluge {!offersDropdownToggleButton ? <BsChevronDown strokeWidth={1} /> : <BsChevronUp strokeWidth={1} />}
          </p>
          {(offersDropdownToggleButton && !toggleMenu) && <NavbarDropdown options={navbarDropdownLinks} galerija={false} closeDropdown={closeDropdown} />}
        </div>
        {
          !homePage &&
          <img src={images.obodinacFooter2} alt="obodinac logo" />
        }
        <div className='nav__dropdown'>
          <p className="o__navbarSection-link" id='nav__gallery' onClick={() => {
            setGalleryDropdownToggleButton(!galleryDropdownToggleButton);
            setOffersDropdownToggleButton(false);
          }}>
            Galerija {!galleryDropdownToggleButton ? <BsChevronDown strokeWidth={1} /> : <BsChevronUp strokeWidth={1} />}
          </p>
          {(galleryDropdownToggleButton && !toggleMenu) && <NavbarDropdown options={navbarDropdownLinks} galerija={true} closeDropdown={closeDropdown} />}
        </div>

        <Link to={'/najčešća-pitanja'}><p className="o__navbarSection-link" id='nav__faq'>Najčešća pitanja</p></Link>
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
              <div className='o__header_menu-overlay_logo'>
                <img src={images.obodinacFooter2} alt="obodinac logo" />
              </div>
              <ul className={`o__header_menu-overlay-links`}>
                <Link to={'/'}><li className='menu-link' id='nav__home-menu'>Početna</li></Link>
                <Link to={'/o-nama'}><li className='menu-link' id='nav__about-menu'>O nama</li></Link>
                <div className='menu-link-wrapper'>
                  <p className="menu-link" id='nav__offers-menu' onClick={() => {
                    setOffersDropdownToggleButton(!offersDropdownToggleButton);
                    setGalleryDropdownToggleButton(false);
                  }}>
                    Usluge {!offersDropdownToggleButton ? <BsChevronDown strokeWidth={1} /> : <BsChevronUp strokeWidth={1} />}
                  </p>

                  <div ref={menuOffersDropdownRef} className={`nav-menu__dropdown ${(offersDropdownToggleButton && toggleMenu) ? 'show' : ''}`}
                    style={{height: offersDropdownHeight + 'px'}}
                  >
                    <NavbarMenuDropdown options={navbarDropdownLinks} galerija={false} />
                  </div>

                </div>
                <div className='menu-link-wrapper'>
                  <p className="menu-link" id='nav__gallery-menu' onClick={() => {
                    setGalleryDropdownToggleButton(!galleryDropdownToggleButton);
                    setOffersDropdownToggleButton(false);
                  }}>
                    Galerija {!galleryDropdownToggleButton ? <BsChevronDown strokeWidth={1} /> : <BsChevronUp strokeWidth={1} />}
                  </p>
                    <div ref={menuGalleryDropdownRef} className={`nav-menu__dropdown ${(galleryDropdownToggleButton && toggleMenu) ? 'show' : ''}`}
                    style={{height: galleryDropdownHeight + 'px'}}
                    >
                      <NavbarMenuDropdown options={navbarDropdownLinks} galerija={true} />
                    </div>
                  
                </div>
                <Link to={'/najčešća-pitanja'}><li className='menu-link' id='nav__faq-menu'>Najčešća pitanja</li></Link>
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
