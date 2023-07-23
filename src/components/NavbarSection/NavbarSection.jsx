import React, {useState,useEffect} from 'react'
import { images } from '../../constants';
import './navbarsection.css'

import { Link } from 'react-router-dom';

const NavbarSection = ({activeLink}) => {
    const [toggleMenu,setToggleMenu] = useState(false);
    const [homePage,setHomePage] = useState(false);
    const closeWindow = () =>{
        if(window.innerWidth > 767){
        setToggleMenu(false);
        }
    }
    window.addEventListener('resize',closeWindow);

    useEffect(() =>{
      const activeNavLink = document.querySelector(`#${activeLink}`);
      const navbar = document.querySelector('.o__navbarSection');
      const burgerBtn = document.querySelector('.burger');

      
      if(toggleMenu){
        const menuId = activeLink + '-menu';
        const activeNavLinkMenu = document.querySelector(`#${menuId}`)
        activeNavLinkMenu.classList.add('menu__shadow-link');
        console.log(activeLink + '-menu');
        console.log(activeNavLinkMenu)
      }
      
      if(activeLink === 'nav__home'){
        setHomePage(true);
      }

      activeNavLink.classList.add('btm-border');


      const handleScroll = () => {
        if (window.scrollY > 0) {
          burgerBtn.classList.add('burger-shadow');
          navbar.classList.add('o__navbarSection-shadow');
        }else{
          burgerBtn.classList.remove('burger-shadow');
          navbar.classList.remove('o__navbarSection-shadow');
        }
    }
  
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    },[activeLink,toggleMenu])
    
      return (
        <nav className='o__nav'>
            <div className="o__navbarSection">
                <Link to={'/'}><p className="o__navbarSection-link" id='nav__home'>Naslovna</p></Link>
                <Link to={'/about'}><p className="o__navbarSection-link" id='nav__about'>O nama</p></Link>
                <Link to={'/offers'}><p className="o__navbarSection-link" id='nav__offers'>Naša ponuda</p></Link>
                {
                  !homePage &&
                  <img src={images.obodinacFooter2} alt="obodinac logo" />
                }
                
                <Link to={'/gallery'}><p className="o__navbarSection-link" id='nav__gallery'>Galerija</p></Link>
                <Link to={'/addoffers'}><p className="o__navbarSection-link" id='nav__addoffers'>Dodatne usluge</p></Link>
                <Link to={'/contact'}><p className="o__navbarSection-link" id='nav__contact'>Kontakt</p></Link>
                
            </div>
    
            <div className='o__header_menu'>
                <div className='o__header_menu-button burger'  id={`${toggleMenu ? 'hide-btn' : ''}`} onClick={() => setToggleMenu(true)}>
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
                  <Link to={'/'}><li className='menu-link' id='nav__home-menu'>Naslovna</li></Link> 
                  <Link to={'/about'}><li className='menu-link' id='nav__about-menu'>O nama</li></Link> 
                  <Link to={'/offers'}><li className='menu-link' id='nav__offers-menu'>Naša ponuda</li></Link> 
                  <Link to={'/gallery'}><li className='menu-link' id='nav__gallery-menu'>Galerija</li></Link> 
                  <Link to={'/addoffers'}><li className='menu-link' id='nav__addoffers-menu'>Dodatne usluge</li></Link> 
                  <Link to={'/contact'}><li className='menu-link' id='nav__contact-menu'>Kontakt</li></Link> 
                </ul>
              </div>
              )
              }
    
            </div>

        </nav>
      )
}

export default NavbarSection
