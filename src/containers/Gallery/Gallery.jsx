import React from 'react'
import './gallery.css'
import HeadTitle from '../../components/HeadTitle/HeadTitle'
import { images } from '../../constants'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'




const Gallery = () => {


  return (
    <div className='o__gallery'>
      <HeadTitle title='Galerija'/>
      <div className='o__gallery_cards section__padding'>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.klimaUredjajHeader} alt="klima uredjaj" />
            </div>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.klimaUredjajHeader} alt="radiator" />
            </div>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.klimaUredjajHeader} alt="ventilacija" />
            </div>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.radiator} alt="ventilacija" />
            </div>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.vent} alt="ventilacija" />
            </div>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.burgija} alt="ventilacija" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
