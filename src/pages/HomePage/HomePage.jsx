import React, { useEffect } from 'react'
import Header from '../../containers/Header/Header'
import AboutUs from '../../containers/AboutUs/AboutUs'
import Offers from '../../containers/Offers/Offers'
import Gallery from '../../containers/Gallery/Gallery'
import Footer from '../../containers/Footer/Footer'

import './homepage.css'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import FAQ from '../../containers/FAQ/FAQ'

const HomePage = () => {


  useEffect(() =>{
    window.scrollTo(0,0);
    

  },[]);



  return (
    <>
      <ScrollUp image={images.upArrow}/>
      <div className='hp slide-enterance1'>
        <Header/>
        <NavbarSection activeLink='nav__home'/>
        <div className='o__line o__line-hidden flex__center'>
			      <div />
		    </div>
        <AboutUs/>
        <Offers/>
        {/* <AdditionalOffers /> */}
        <Gallery />
        <FAQ/>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
