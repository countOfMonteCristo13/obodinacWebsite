import React, {useEffect} from 'react'
import './additionalpage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import OffersSection from '../../components/OffersSection/OffersSection'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import SpareAC from '../../components/SpareAC/SpareAC'

import { Link } from 'react-router-dom'

import { servisKlimaImages,kernovanjeImages } from '../../constants/galleryImages'
import { tekstDodatno } from '../../constants/tekst'

const desc = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';



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
          <NavbarSection activeLink='nav__addoffers'/>
          <OffersSection title='Dijamantsko bušenje rupa' description={tekstDodatno.dijamatnskoD} alt='kernovanje' image={images.kirnerica}/>
          <div className='o__addoffersPage_slider-wrapper'>
            <ImageSlider images={kernovanjeImages}/>
          </div>
          <BlueLine/>
          <OffersSection title='Servis klima uređaja' description={tekstDodatno.servisD} alt='servis klime' image={images.servisKlime} odd='odd'/>
          <div className='o__addoffersPage_slider-wrapper'>
            <ImageSlider images={servisKlimaImages}/>
          </div>
          <BlueLine/>
          <div className='o__addoffersPage_polovne-klime section__padding'>
            <div className='o__addoffersPage_polovne-klime-title'>
              <h2>Polovni klima uređaji</h2>
            </div>
            <div className='o__addoffersPage_polovne-klime-desc'>
              <p>{tekstDodatno.polovneD}</p>
            </div>
          </div>          
          <SpareAC/>
          
          <BlueLine/>
          <div className='o__addoffersPage_button-wrapper section__padding flex__center'>
            <Link to={'/contact'}><button type='button' className='custom__button checkout-btn'>Kontaktirajte Nas</button></Link>
          </div>
      </div>
    </div>
  )
}

export default AdditionalPage
