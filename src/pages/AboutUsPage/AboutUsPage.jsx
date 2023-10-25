import React, { useEffect } from 'react'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import { images } from '../../data'
import './aboutuspage.css'

import ScrollUp from '../../components/ScrollUp/ScrollUp'
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme'

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='o__aboutPage slide-enterance1'>
        <NavbarSection activeLink='nav__about' />
        <div className='o__aboutPage_section'>
          <div className='o__aboutPage_section-img'>
            <img src={images.aboutUs} alt="o nama" />
          </div>
          <div className='o__aboutPage_section-description'>
            <p>
              "Obodinac" je porodična firma koja je u ovom poslu već dugo godina.
              Osnovana je davne 1991. godine u Novom Sadu.
            </p>
            <p>
              Našim dugogodišnjim iskustvom, predanim radom, znanjem i trudom postali smo
              jedna od vodećih firmi koja se bavi klimatizacijom, grejanjem i ventilacijom.
              Posedujemo najsavremeniju opremu koja nam omogućava da kvalitetno, brzo
              i bezbedno obavimo posao.
            </p>
            <p>
              Dokaz našeg kvalitetnog rada su
              naši zadovoljni stalni klijenti koji su naša najbolja preporuka
            </p></div>
          <div className='o__aboutPage_section-description_line-wrapper'>
            <div className='o__aboutPage_section-description_line' />
          </div>
          <KontaktDugme />
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
