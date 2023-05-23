import React from 'react'
import './additionalpage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'

const AdditionalPage = () => {
  return (
    <>
      <ScrollUp image={images.upArrow}/>
      <div className='slide-enterance1'>
          <NavbarSection activeLink='nav__addoffers'/>
        
      </div>
    </>
  )
}

export default AdditionalPage
