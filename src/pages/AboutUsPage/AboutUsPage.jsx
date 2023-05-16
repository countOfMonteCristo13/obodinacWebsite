import React, {useEffect} from 'react'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import { images } from '../../constants'
import './aboutuspage.css'
import { Link } from 'react-router-dom'

const AboutUsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className='o__aboutPage'>
      <NavbarSection image={images.maintenanceWhite} imageLogo={images.obodinacFooter2}/>
      <div className='o__aboutPage_section'>
        <div className='o__aboutPage_section-img'>
            <img src={images.familybg} alt="" />
        </div>
        <div className='o__aboutPage_section-description flex__center'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facere laborum! Autem, ratione eveniet sequi perspiciatis saepe labore quo doloremque dolorem nihil id corporis, commodi laudantium error. Odio, porro tempore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, facere laborum! Autem, ratione eveniet sequi perspiciatis saepe labore quo doloremque dolorem nihil id corporis, commodi laudantium error. Odio, porro tempore?</p>
            <div className='o__aboutPage_section-description_line'/>
            <Link to={'/contact'}><button className='custom__button'>Kontaktirajte Nas</button></Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage
