import React, { useEffect } from 'react'
import {NavbarSection} from '../../components'
import {ScrollUp,ContactUsButton,BlueLine,TypeCard} from '../../utils'
import { images,texts } from '../../data';


const HeatingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const heatingTypes = [
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
              heatingTypes.map((sistem) => (
                <TypeCard sistem={sistem} key={sistem.title} />
              ))
            }
          </div>
        </div>
        <BlueLine />
        <ContactUsButton />

      </div>
    </>
  )
}

export default HeatingPage
