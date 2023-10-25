import React, { useEffect } from 'react'
import SpareAC from '../../utils/SpareAC/SpareAC';
import BlueLine from '../../utils/BlueLine/BlueLine';
import KontaktDugme from '../../utils/KontaktDugme/KontaktDugme';
import NavbarSection from '../../utils/NavbarSection/NavbarSection';
import ScrollUp from '../../utils/ScrollUp/ScrollUp';
import { images,texts } from '../../data';

const PolovneKlimePage = () => {
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
        <KontaktDugme />
      </div>
    </>
  )
}

export default PolovneKlimePage
