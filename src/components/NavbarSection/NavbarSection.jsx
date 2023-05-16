import React, {useState} from 'react'
import { images } from '../../constants';
import './navbarsection.css'

import { Link } from 'react-router-dom';

const NavbarSection = ({color,image,imageLogo}) => {
    const [toggleMenu,setToggleMenu] = useState(false);
    const closeWindow = () =>{
        if(window.innerWidth > 770){
        setToggleMenu(false);
        }
    }
    window.addEventListener('resize',closeWindow);
    
      return (
        <nav>
            <div className="o__navbarSection">
                <Link to={'/'}><p className="o__navbarSection-link">Naslovna</p></Link>
                <Link to={'/about'}><p className="o__navbarSection-link">O nama</p></Link>
                <Link to={'/offers'}><p className="o__navbarSection-link">Naša ponuda</p></Link> 
                <img src={images.obodinacFooter2} alt="obodinac logo" />
                <Link to={'/gallery'}><p className="o__navbarSection-link">Galerija</p></Link>
                <Link to={'/addoffers'}><p className="o__navbarSection-link">Dodatne usluge</p></Link>
                <Link to={'/contact'}><p className="o__navbarSection-link">Kontakt</p></Link>
                
            </div>
    
            <div className='o__header_menu'>
                <div className={`o__header_menu-button ${color}`} onClick={() => setToggleMenu(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              {
              toggleMenu && (
              <div className='o__header_menu-overlay flex__center slide-bottom' id={color}> 
                <div className='o__header_menu-button wrench' onClick={() => setToggleMenu(false)}>
                  <img src={image} alt="wrench and screwdriver" />
                </div>
                <img className='o__header_menu-overlay_logo' src={imageLogo} alt="obodinac logo" />
                <ul className={`o__header_menu-overlay-links ${color}`}>
                  <Link to={'/'}><li>Naslovna</li></Link> 
                  <Link to={'/about'}><li>O nama</li></Link> 
                  <Link to={'/offers'}><li>Naša ponuda</li></Link> 
                  <Link to={'/gallery'}><li>Galerija</li></Link> 
                  <Link to={'/addoffers'}><li>Dodatne usluge</li></Link> 
                  <Link to={'/contact'}><li>Kontakt</li></Link> 
                </ul>
              </div>
              )
              }
    
            </div>
    
    
        </nav>
      )
}

export default NavbarSection
