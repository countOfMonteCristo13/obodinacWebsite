import React from 'react'
import Header from '../../containers/Header/Header'
import Navbar from '../../containers/Navbar/Navbar'
import AboutUs from '../../containers/AboutUs/AboutUs'
import Offers from '../../containers/Offers/Offers'
import Gallery from '../../containers/Gallery/Gallery'
import AdditionalOffers from '../../containers/AdditionalOffers/AdditionalOffers'
import Footer from '../../containers/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <AboutUs/>
      <Offers/>
      <Gallery />
      <AdditionalOffers />
      <Footer/>
    </div>
  )
}

export default HomePage
