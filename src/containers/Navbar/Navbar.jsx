import React, {useState} from 'react'
import './navbar.css'
import { images } from '../../constants';

import { Link } from 'react-router-dom';

const Navbar = () => {

const [toggleMenu,setToggleMenu] = useState(false);
const closeWindow = () =>{
	if(window.innerWidth > 770){
	setToggleMenu(false);
	}
}
window.addEventListener('resize',closeWindow);

  return (
    <nav>
		<div className="o__navbar">
				<Link to={'/'}><p className="o__navbar-link">Naslovna</p></Link>
                <Link to={'/about'}><p className="o__navbar-link">O nama</p></Link>
                <Link to={'/offers'}><p className="o__navbar-link">Naša ponuda</p></Link> 
                <Link to={'/gallery'}><p className="o__navbar-link">Galerija</p></Link>
                <Link to={'/addoffers'}><p className="o__navbar-link">Dodatne usluge</p></Link>
                <Link to={'/contact'}><p className="o__navbar-link">Kontakt</p></Link>
		</div>

		<div className='o__header_menu'>
			<div className='o__header_menu-button' onClick={() => setToggleMenu(true)}>
				<div></div>
				<div></div>
				<div></div>
			</div>
	  	{
		  toggleMenu && (
		  <div className='o__header_menu-overlay flex__center slide-bottom'> 
			<div className='o__header_menu-button wrench' onClick={() => setToggleMenu(false)}>
			  <img src={images.maintenanceWhite} alt="wrench and screwdriver" />
			</div>
			<img className='o__header_menu-overlay_logo' src={images.obodinacFooter2} alt="obodinac logo" />
			<ul className='o__header_menu-overlay-links'>
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


		<div className='o__navbar_line flex__center'>
			<div />
		</div>

	</nav>
  )
}

export default Navbar


	
