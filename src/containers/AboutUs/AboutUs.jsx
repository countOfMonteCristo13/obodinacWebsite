import {React} from 'react'
import { images } from '../../constants'
import './aboutus.css'

import { Link } from 'react-router-dom'

const AboutUs = () => {


  return (
    <div className='o__aboutUs  section__padding'>
        <div className='o__aboutUs_details'>
            <h2>Ovlašćeni servis klima uređaja</h2>
            <p>
              <span>
                "Obodinac" je porodična firma koja je u ovom poslu već dugo godina. 
                Osnovana je davne 1991. godine u Novom Sadu.
              </span>
              <span>
                Našim dugogodišnjim iskustvom, predanim radom, znanjem i trudom postali smo 
                jedna od vodećih firmi koja se bavi klimatizacijom, grejanjem i ventilacijom.
                Posedujemo najsavremeniju opremu koja nam omogućava da kvalitetno, brzo 
                i bezbedno obavimo posao.
              </span>
              <span>
                Dokaz našeg kvalitetnog rada su 
                naši zadovoljni stalni klijenti koji su naša najbolja preporuka
              </span> 
                
            </p>
            <Link to={'/about'}> <button className='custom__button more-btn' type='button'>Detaljnije...</button></Link>
        </div>

        <div className='o__aboutUs_img'>
            <img src={images.aboutUs} alt="family" />
        </div>

      

    </div>
  )
}

export default AboutUs
