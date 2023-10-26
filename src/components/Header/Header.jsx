import React from 'react'
import './header.css'
import { images } from '../../data'


const Header = () => {

  return (
    <div>
      <header className='o__header'>
        <div className="o__header_logo" >
          <img src={images.obodinac} alt='obodinac logo' />
        </div>

        <div className='o__header_images'>
          <img src={images.splitSistem} alt='klima logo' />
          <img src={images.radiator} alt='radiator logo' />
          <img src={images.vent} alt='ventilacija logo' />
        </div>
      </header>
    </div>
  )
}

export default Header
