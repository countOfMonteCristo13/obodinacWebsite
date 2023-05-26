import React, { useEffect } from 'react'
import Header from '../../containers/Header/Header'
import AboutUs from '../../containers/AboutUs/AboutUs'
import Offers from '../../containers/Offers/Offers'
import Gallery from '../../containers/Gallery/Gallery'
import AdditionalOffers from '../../containers/AdditionalOffers/AdditionalOffers'
import Footer from '../../containers/Footer/Footer'

import './homepage.css'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'

const HomePage = () => {

  useEffect(() =>{
    window.scrollTo(0,0);

    const line = document.querySelector('.o__line');
    console.log(line);
  },[]);


  return (
    <>
      <ScrollUp image={images.upArrow}/>
      <div className='hp slide-enterance1'>
        <Header/>
        <NavbarSection activeLink='nav__home'/>
        <div className='o__line flex__center'>
			      <div />
		    </div>
        <AboutUs/>
        <Offers/>
        <Gallery />
        <AdditionalOffers />
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
