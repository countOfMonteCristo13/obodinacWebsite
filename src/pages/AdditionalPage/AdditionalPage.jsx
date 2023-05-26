import React from 'react'
import './additionalpage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'

import OffersSection from '../../components/OffersSection/OffersSection'

const desc = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';


const AdditionalPage = () => {
  return (
    <>
      <ScrollUp image={images.upArrow}/>
      <div className='slide-enterance1'>
          <NavbarSection activeLink='nav__addoffers'/>
          <OffersSection title='Kernovanje' description={desc} alt='kernovanje' image={images.kirnerica}/>
          <OffersSection title='Servis klima uredjaja' description={desc} alt='servis klime' image={images.servisKlime} odd='odd'/>
          <OffersSection title='Polovni klima uredjaji' description={desc} alt='polovne klime' image={images.klimaUredjajHeader}/>
        
      </div>
    </>
  )
}

export default AdditionalPage
