import React, { useEffect } from 'react'
import ScrollUp from '../../utils/ScrollUp/ScrollUp'
import NavbarSection from '../../utils/NavbarSection/NavbarSection'
import BlueLine from '../../utils/BlueLine/BlueLine'
import KontaktDugme from '../../utils/KontaktDugme/KontaktDugme'
import OffersSection from '../../utils/OffersSection/OffersSection'
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
        <KontaktDugme />
      </div>
    </>
  )
}

export default TypePage
