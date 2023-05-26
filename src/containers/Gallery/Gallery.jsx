import React from 'react'
import './gallery.css'
import HeadTitle from '../../components/HeadTitle/HeadTitle'
import { images } from '../../constants'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setGalleryPageScroll } from '../../actions'

const mapStateToProps = state => {
  return {
    galleryPageScroll: state.galleryPageScroll  // state se tako zove
  }
}

const mapDispatchToProps = {
  setGalleryPageScroll,
}

const Gallery = ({setGalleryPageScroll,galleryPageScroll}) => {

  const changeGalleryScrollSection = (section) =>{
    const scrollValue = section;
    setGalleryPageScroll(scrollValue);
  }

  return (
    <div className='o__gallery'>
      <HeadTitle title='Galerija'/>
      <div className='o__gallery_cards section__padding'>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.klimaUredjajHeader} alt="klima uredjaj" />
            </div>
            <Link to={`/gallery`}>
              <button onClick={() => changeGalleryScrollSection('gp__klimatizacija')} type='button' className='custom__button'>Pogledaj...</button>
            </Link>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.radiator} alt="radiator" />
            </div>
            <Link to={`/gallery`}>
              <button onClick={() => changeGalleryScrollSection('gp__grejanje')} type='button' className='custom__button'>Pogledaj...</button>
            </Link>
        </div>
        <div className='o__gallery_cards-card'>
            <div className='o__gallery_cards-card_wrapper'>
                <img src={images.vent} alt="ventilacija" />
            </div>
            <Link to={`/gallery`}>
              <button onClick={() => changeGalleryScrollSection('gp__ventilacija')} type='button' className='custom__button'>Pogledaj...</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
