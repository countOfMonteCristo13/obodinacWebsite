import React from 'react'
import './gallery.css'
import HeadTitle from '../../utils/HeadTitle/HeadTitle'
import { images } from '../../data'
import ACSystemsCard from '../../utils/TypeCard/TypeCard'


const Gallery = () => {

  const galleryCards = [
    {
      img: images.klimaUredjajKartica,
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
      img: images.radiatorKartica,
      title: 'Grejanje',
      url: '/galerija/grejanje'
    },
    {
      img: images.ventKartica,
      title: 'Ventilacija',
      url: '/galerija/ventilacija'
    },
    {
      img: images.burgijaKartica,
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
              <ACSystemsCard sistem={card} key={card.title} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Gallery;
