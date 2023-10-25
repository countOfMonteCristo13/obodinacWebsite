import React, { useEffect } from 'react'
import './gallerypage.css'
import { images } from '../../data'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'
import BlueLine from '../../components/BlueLine/BlueLine'
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme'


const GalleryPage = ({ gImages, title }) => {

  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__gallery' />
        <div className='headtext flex__center'>
          <h2>{title}</h2>
        </div>
        <BlueLine />
        <div className="gallery__grid section__padding">
          {gImages.map((image, index) => (
            <div key={index} className="gallery__img">
              <img src={image} alt={`Slika ${index}`} />
            </div>
          ))}
        </div>
        <BlueLine />
        <KontaktDugme />
      </div>
    </>
  )
}

export default GalleryPage;




