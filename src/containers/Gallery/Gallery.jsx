import React from 'react'
import './gallery.css'
import HeadTitle from '../../components/HeadTitle/HeadTitle'
import { images } from '../../constants'

const Gallery = () => {
  return (
    <div className='o__gallery'>
      <HeadTitle title='Galerija'/>
      <div className='o__gallery_cards section__padding'>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.klimaUredjajHeader} alt="klima uredjaj" />
            </div>
            <button type='button' className='custom__button'>Pogledaj...</button>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.radiator} alt="radiator" />
            </div>
            <button type='button' className='custom__button'>Pogledaj...</button>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.vent} alt="ventilacija" />
            </div>
            <button type='button' className='custom__button'>Pogledaj...</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
