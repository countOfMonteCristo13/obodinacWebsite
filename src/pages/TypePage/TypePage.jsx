import React, { useEffect } from 'react'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import BlueLine from '../../components/BlueLine/BlueLine'
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme'
import OffersSection from '../../components/OffersSection/OffersSection'
import { images } from '../../constants'

const ServiceTypePage = ({type}) => {

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <>
      <ScrollUp image={images.upArrow}/>
      <div>
        <NavbarSection activeLink='nav__offers'/>
        <div className='headtext flex__center'>
            <h2>{type.title}</h2>
        </div>
        <BlueLine />
        <OffersSection description={type.text} alt={type.title} image={type.img} />
        <BlueLine/>
        <KontaktDugme/>
        
      </div>
    </>
  )
}

export default ServiceTypePage
