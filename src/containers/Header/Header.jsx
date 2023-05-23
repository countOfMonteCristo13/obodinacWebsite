import React from 'react'
import './header.css'
import {images} from '../../constants'
import ScrollUp from '../../components/ScrollUp/ScrollUp'


const Header = () => {




  return (
    <div>

      <header className='o__header section__padding'>
        <div className="o__header_logo" >
          <img src={images.obodinac2} alt='obodinac logo'/>
        </div>

        <div className='o__header_images'>
          <img  src={images.klimaUredjajHeader} alt='klima logo'/>
          <img  src={images.radiator} alt='radiator logo'/>
          <img  src={images.vent} alt='ventilacija logo'/>
        </div>


      </header>
    </div>
  )
}

export default Header
