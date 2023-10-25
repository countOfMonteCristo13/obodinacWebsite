import React, { useEffect } from 'react'
import ScrollUp from '../../utils/ScrollUp/ScrollUp';
import NavbarSection from '../../utils/NavbarSection/NavbarSection';
import KSistemiCard from '../MontazaPage/KSistemiCard/KSistemiCard';
import BlueLine from '../../utils/BlueLine/BlueLine';
import KontaktDugme from '../../utils/KontaktDugme/KontaktDugme';
import { images,texts } from '../../data';


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
            {texts.tekstNaslovna.grejanjeD}
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
