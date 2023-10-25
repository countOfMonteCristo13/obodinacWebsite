import React, {useEffect} from 'react'
import './additionalpage.css'
import { images,galleryImages,texts } from '../../data'
import NavbarSection from '../../utils/NavbarSection/NavbarSection'
import ScrollUp from '../../utils/ScrollUp/ScrollUp'
import OffersSection from '../../utils/OffersSection/OffersSection'
import ImageSlider from '../../utils/ImageSlider/ImageSlider'
import SpareAC from '../../utils/SpareAC/SpareAC'

import KontaktDugme from '../../utils/KontaktDugme/KontaktDugme'

const AdditionalPage = () => {
  
  useEffect(() =>{
    window.scrollTo(0,0);
  },[])

  const BlueLine = () =>{
    return(
      <div className='o__addoffersPage_blueline-wrapper'>
        <div className='o__addoffersPage_blueline'/>
      </div>
      
    );
  }

  return (
    <div className='o__addoffersPage-wrapper'>
      <ScrollUp image={images.upArrow}/>
      <div className='o__addoffersPage slide-enterance1'>
          <NavbarSection activeLink='nav__faq'/>
          <OffersSection title='Dijamantsko bušenje rupa' description={texts.tekstDodatno.dijamatnskoD} alt='kernovanje' image={images.kirnerica}/>
          <div className='o__addoffersPage_slider-wrapper'>
            <ImageSlider images={galleryImages.kernovanjeImages}/>
          </div>
          <BlueLine/>
          <OffersSection title='Servis klima uređaja' description={texts.tekstDodatno.servisD} alt='servis klime' image={images.servisKlime} odd='odd'/>
          <div className='o__addoffersPage_slider-wrapper'>
            <ImageSlider images={galleryImages.servisKlimaImages}/>
          </div>
          <BlueLine/>
          <div className='o__addoffersPage_polovne-klime section__padding'>
            <div className='o__addoffersPage_polovne-klime-title'>
              <h2>Polovni klima uređaji</h2>
            </div>
            <div className='o__addoffersPage_polovne-klime-desc'>
              <p>{texts.tekstDodatno.polovneD}</p>
            </div>
          </div>          
          <SpareAC/>
          
          <BlueLine/>
          <KontaktDugme/>
      </div>
    </div>
  )
}

export default AdditionalPage
