import React, { useEffect } from 'react'
import {NavbarSection,OffersSection} from '../../components'
import {ScrollUp,ContactUsButton,BlueLine} from '../../utils'
import { images } from '../../data'

const TypePage = ({ type }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>{type.title}</h2>
        </div>
        <BlueLine />
        <OffersSection description={type.text} alt={type.title} image={type.img} />
        <BlueLine />
        <ContactUsButton />
      </div>
    </>
  )
}

export default TypePage
