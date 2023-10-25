import React, { useEffect } from 'react'
import ScrollUp from '../../utils/ScrollUp/ScrollUp';
import NavbarSection from '../../utils/NavbarSection/NavbarSection';
import KSistemiCard from '../MontazaPage/KSistemiCard/KSistemiCard';
import BlueLine from '../../utils/BlueLine/BlueLine';
import KontaktDugme from '../../utils/KontaktDugme/KontaktDugme';
import { images , texts} from '../../data';

const VentilacijaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const kSistemi = [
    {
      img: images.ventWhite,
      title: 'Mehanička ventilacija',
      url: '/usluge/ventilacija/mehanička-ventilacija'
    },
    {
      img: images.rekuperatorKartica,
      title: 'Rekuperatorska ventilacija',
      url: '/usluge/ventilacija/rekuperatorska-ventilacija'
    }
  ];


  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>Ventilacija</h2>
          <p>
            {texts.tekstNaslovna.ventilacijaD}
          </p>
        </div>

        <div className='sistemi__klima-headtext flex__center'>
          <h2>Tipovi ventilacije</h2>
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

export default VentilacijaPage
