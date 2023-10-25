import React, { useEffect } from 'react'
import { tekstDodatno } from '../../data/tekst';
import SpareAC from '../../components/SpareAC/SpareAC';
import BlueLine from '../../components/BlueLine/BlueLine';
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme';
import NavbarSection from '../../components/NavbarSection/NavbarSection';
import ScrollUp from '../../components/ScrollUp/ScrollUp';
import { images } from '../../data';

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
            {tekstDodatno.polovneD}
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
