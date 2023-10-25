import React, { useEffect } from 'react'
import {ScrollUp,ContactUsButton,SpareAC,BlueLine} from '../../utils'
import {NavbarSection} from '../../components'
import { images,texts } from '../../data';

const SpareACPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>Polovni klima uređaji</h2>
          <p>
            {texts.tekstDodatno.polovneD}
          </p>
        </div>

        <div className='sistemi__klima-headtext flex__center'>
          <h2>Ponuda</h2>
        </div>
        <SpareAC />
        <BlueLine />
        <ContactUsButton />
      </div>
    </>
  )
}

export default SpareACPage
