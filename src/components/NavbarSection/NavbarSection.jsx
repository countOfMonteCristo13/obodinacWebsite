import React, { useState, useEffect } from 'react'
import { images } from '../../constants';
import './navbarsection.css'

import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import NavbarDropdown from '../NavbarDropdown/NavbarDropdown';

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


  const opcijeUsluge = [
    {
      id: 'montaža',
      urlUsluge: '/usluge/montaza-klima-uredjaja',
      urlGalerija: '/galerija/montaza-klima-uredjaja',
      title: 'Montaža klima uredjaja',
      dropdown:true,
      options: [
        {
          id: 'split-sistem',
          url: '/usluge/montaza-klima-uredjaja/split-sistem',
          title: 'Split sistem',
        },
        {
          id: 'multi-sistem',
          url: '/usluge/montaza-klima-uredjaja/multi-sistem',
          title: 'Multi sistem',
        },
        {
          id: 'centralni-sistem',
          url: '/usluge/montaza-klima-uredjaja/centralni-sistem',
          title: 'Centralni (VRF) sistem',
        },
        {
          id: 'kanalski-sistem',
          url: '/usluge/montaza-klima-uredjaja/kanalski-sistem',
          title: 'Kanalski sistem',
        },
      ]
    },
    {
      id: 'servis',
      urlUsluge: '/usluge/servis-klima-uredjaja',
      urlGalerija: '/galerija/servis-klima-uredjaja',
      title: 'Servis klima uredjaja',
      dropdown:true,
      options:[
        {
          id: 'čišćenje-klime',
          url: '/usluge/servis-klima-uredjaja/čišćenje-klime',
          title: 'Čišćenje klime',
        },
        {
          id: 'popravka-elektronike',
          url: '/usluge/servis-klima-uredjaja/popravka-elektronike',
          title: 'Popravka elektronike',
        },
        {
          id: 'punjenje/dopuna-freona',
          url: '/usluge/servis-klima-uredjaja/freon',
          title: 'Punjenje/Dopuna freona',
        },
        {
          id: 'zamena-kondezatora',
          url: '/usluge/servis-klima-uredjaja/zamena-kondezatora',
          title: 'Zamena kondezatora',
        },
      ]
    },
    {
      id: 'polovne',
      urlUsluge: '/usluge/polovni-klima-uredjaji',
      urlGalerija: '/galerija/polovni-klima-uredjaji',
      title: 'Polovni klima uredjaji',
      dropdown:false,
      options:[]
    },
    {
      id: 'grejanje',
      urlUsluge: '/usluge/grejanje',
      urlGalerija: '/galerija/grejanje',
      title: 'Grejanje',
      dropdown:true,
      options:[
        {
          id: 'radijatorsko-grejanje',
          url: '/usluge/grejanje/radijatorsko-grejanje',
          title: 'Radijatorsko grejanje',
        },
        {
          id: 'podno-grejanje',
          url: '/usluge/grejanje/podno-grejanje',
          title: 'Podno grejanje',
        },
      ]
    },
    {
      id: 'ventilacija',
      urlUsluge: '/usluge/ventilacija',
      urlGalerija: '/galerija/ventilacija',
      title: 'Ventilacija',
      dropdown:true,
      options:[
        {
          id: 'mehanička-ventilacija',
          url: '/usluge/ventilacija/mehanička-ventilacija',
          title: 'Mehanička-ventilacija',
        },
        {
          id: 'rekuperatorska-ventilacija',
          url: '/usluge/ventilacija/rekuperatorska-ventilacija',
          title: 'Rekuperatorska ventilacija',
        },
      ]
    },
    {
      id: 'kernovanje',
      urlUsluge: '/usluge/dijamantsko-busenje-rupa',
      urlGalerija: '/galerija/dijamantsko-busenje-rupa',
      title: 'Dijamantsko bušenje rupa',
      dropdown:false,
      options:[]
    }
  ]

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
          {offersDropdownToggleButton && <NavbarDropdown options={opcijeUsluge} galerija={false}/>}
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
          {addOffersDropdownToggleButton && <NavbarDropdown options={opcijeUsluge} galerija={true}/>}
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
