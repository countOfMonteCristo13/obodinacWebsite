import React, { useEffect } from 'react'
import './servicePage.css'
import {NavbarSection} from '../../components'
import {ScrollUp,ContactUsButton,BlueLine,TypeCard} from '../../utils'
import { images } from '../../data'

const ServicePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

  const serviceTypes = [
    {
      img: images.ciscenjeKlimaUredjajaKartica,
      title: 'Čišćenje klima uređaja',
      url: '/usluge/servis-klima-uređaja/čišćenje-klime'
    },
    {
      img: images.elektronika,
      title: 'Popravka elektronike',
      url: '/usluge/servis-klima-uređaja/popravka-elektronike'
    },
    {
      img: images.freon,
      title: 'Punjenje/Dopuna freona',
      url: '/usluge/servis-klima-uređaja/freon'
    },
    {
      img: images.kondezator,
      title: 'Zamena kondezatora',
      url: '/usluge/servis-klima-uređaja/zamena-kondezatora'
    }
  ];

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>Servis klima uredjaja</h2>
          <p>
            Servis klima uređaja je važan postupak koji se preporučuje, bar jednom godišnje,
            kako bi se održala optimalna funkcionalnost i produžio vek trajanja klima uređaja.
            Ovo podrazumeva proveru i čišćenje maske, filtera i turbine unutrašnje jedinice, kao i proveru i čišćenje spoljne jedinice.
            U slučaju da se otkrije kvar, servis klima uređaja obuhvata popravke i zamene oštećenih ili neispravnih delova.
            Ukoliko vam je potreban servis ili održavanje klima uređaja, kontaktirajte nas.
            Naša ekipa će vam pružiti profesionalne usluge i brinuti se o vašem klima uređaju kako biste uživali u
            udobnom i kvalitetnom vazduhu u vašem prostoru.
          </p>
        </div>

        <div className='sistemi__klima-headtext flex__center'>
          <h2>Tipovi servisa</h2>
        </div>
        <div className='sistemi__klima section__padding'>
          <div className='sistemi__klima-cards'>
            {
              serviceTypes.map((sistem) => (
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

export default ServicePage
