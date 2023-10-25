import React, { useEffect } from 'react'
import ScrollUp from '../../components/ScrollUp/ScrollUp';
import NavbarSection from '../../components/NavbarSection/NavbarSection';
import KSistemiCard from '../MontazaPage/KSistemiCard/KSistemiCard';
import BlueLine from '../../components/BlueLine/BlueLine';
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme';
import { images } from '../../data';
import { tekstNaslovna } from '../../data/tekst';


const GrejanjePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const kSistemi = [
    {
      img: images.radiatorFooter,
      title: 'Radijatorsko grejanje',
      url: '/usluge/grejanje/radijatorsko-grejanje'
    },
    {
      img: images.podnoGrejanjeKartica,
      title: 'Podno grejanje',
      url: '/usluge/grejanje/podno-grejanje'
    }
  ];


  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>Grejanje</h2>
          <p>
            {tekstNaslovna.grejanjeD}
          </p>
        </div>

        <div className='sistemi__klima-headtext flex__center'>
          <h2>Tipovi grejanja</h2>
        </div>
        <div className='sistemi__klima section__padding'>
          <div className='sistemi__klima-cards'>
            {
              kSistemi.map((sistem) => (
                <KSistemiCard sistem={sistem} key={sistem.title} />
              ))
            }
          </div>
        </div>
        <BlueLine />
        <KontaktDugme />

      </div>
    </>
  )
}

export default GrejanjePage
