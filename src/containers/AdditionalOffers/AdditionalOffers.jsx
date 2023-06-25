import React from 'react'
import './additionaloffers.css'
import { images } from '../../constants'
import HeadTitle from '../../components/HeadTitle/HeadTitle'

import { Link } from 'react-router-dom'

import { tekstNaslovna } from '../../constants/tekst'

const AdditionalOffers = () => {
  return (
    <div>
        <HeadTitle title='Dodatne usluge'/>
        <div className='o__additional_section'>
            <div className='o__additional_container'>
                <div className='o__additional_container-part flex__center part_1'>
                    <div className='o__additional-img-wrapper'>
                        <img src={images.kirnerica} alt="kirnerica" />
                    </div>
                </div>
                <div className='o__additional_container-part part_2'>
                    <p>{tekstNaslovna.dodatneUslugeD}</p>
                    <Link to={`/addoffers`}>
                        <button  className='custom__button more-btn' type='button'>Detaljnije...</button>
                    </Link>
                </div>
                <div className='o__additional_container-part flex__center part_3'>
                    <div className='o__additional-img-wrapper'>
                        <img src={images.servisKlime} alt="servis klime" />
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AdditionalOffers
