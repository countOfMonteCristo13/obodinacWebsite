import React, {useEffect} from 'react'
import './additionalpage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import OffersSection from '../../components/OffersSection/OffersSection'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import SpareAC from '../../components/SpareAC/SpareAC'

import { Link } from 'react-router-dom'

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
    <>
      <ScrollUp image={images.upArrow}/>
      <div className='o__addoffersPage slide-enterance1'>
          <NavbarSection activeLink='nav__addoffers'/>
          <OffersSection title='Kernovanje' description={desc} alt='kernovanje' image={images.kirnerica}/>
          <div className='o__addoffersPage_slider-wrapper'>
            <ImageSlider/>
          </div>
          <BlueLine/>
          <OffersSection title='Servis klima uredjaja' description={desc} alt='servis klime' image={images.servisKlime} odd='odd'/>
          <div className='o__addoffersPage_slider-wrapper'>
            <ImageSlider/>
          </div>
          <BlueLine/>
          <OffersSection title='Polovni klima uredjaji' description={desc} alt='polovne klime' image={images.klimaUredjajHeader}/>
          
          <SpareAC/>
          
          <BlueLine/>
          <div className='o__addoffersPage_button-wrapper flex__center'>
            <Link to={'/contact'}><button type='button' className='custom__button checkout-btn'>Kontaktirajte Nas</button></Link>
          </div>
      </div>
    </>
  )
}

export default AdditionalPage
