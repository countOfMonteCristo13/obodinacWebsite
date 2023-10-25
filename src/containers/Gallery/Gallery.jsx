import React from 'react'
import './gallery.css'
import HeadTitle from '../../utils/HeadTitle/HeadTitle'
import { images } from '../../data'
import KSistemiCard from '../../pages/MontazaPage/KSistemiCard/KSistemiCard'


const Gallery = () => {

  const galleryCards = [
    {
      img: images.klimaUredjajFooter,
      title: 'Montaža klima uređaja',
      url: '/galerija/montaža-klima-uređaja'
    },
    {
      img: images.servisKlimaUredjajaKartica,
      title: 'Servis klima uređaja',
      url: '/galerija/servis-klima-uređaja'
    },
    {
      img: images.polovniKlimaUredjajiKartica,
      title: 'Polovni klima uređaji',
      url: '/galerija/polovni-klima-uređaji'
    },
    {
      img: images.radiatorFooter,
      title: 'Grejanje',
      url: '/galerija/grejanje'
    },
    {
      img: images.ventWhite,
      title: 'Ventilacija',
      url: '/galerija/ventilacija'
    },
    {
      img: images.burgija,
      title: 'Dijamantsko bušenje rupa',
      url: '/galerija/dijamantsko-bušenje-rupa'
    },
  ];


  return (
    <div className='o__gallery'>
      <HeadTitle title='Galerija' />
      <div className='sistemi__klima section__padding'>
        <div className='sistemi__klima-cards'>
          {
            galleryCards.map((card) => (
              <KSistemiCard sistem={card} key={card.title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery;
