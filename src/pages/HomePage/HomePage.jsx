import React, { useEffect } from 'react'
import {Header,AboutUs,Offers,Gallery,Footer,NavbarSection,FAQ} from '../../components'
import './homepage.css'
import {ScrollUp} from '../../utils'
import { images } from '../../data'

const HomePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='hp slide-enterance1'>
        <Header />
        <NavbarSection activeLink='nav__home' />
        <div className='o__line o__line-hidden flex__center'>
          <div />
        </div>
        <AboutUs />
        <Offers />
        <Gallery />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
