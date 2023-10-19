import React, { useEffect } from 'react'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import { images } from '../../constants'
import './aboutuspage.css'

import ScrollUp from '../../components/ScrollUp/ScrollUp'
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme'

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='o__aboutPage slide-enterance1'>
        <NavbarSection activeLink='nav__about' />
        <div className='o__aboutPage_section'>
          <div className='o__aboutPage_section-img'>
            <img src={images.aboutUs} alt="o nama" />
          </div>
          <div className='o__aboutPage_section-description flex__center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facere laborum! Autem, ratione eveniet sequi perspiciatis saepe labore quo doloremque dolorem nihil id corporis, commodi laudantium error. Odio, porro tempore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facere laborum! Autem, ratione eveniet sequi perspiciatis saepe labore quo doloremque dolorem nihil id corporis, commodi laudantium error. Odio, porro tempore?</p>
          </div>
          <div className='o__aboutPage_section-description_line-wrapper'>
            <div className='o__aboutPage_section-description_line' />
          </div>
          <KontaktDugme />
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
