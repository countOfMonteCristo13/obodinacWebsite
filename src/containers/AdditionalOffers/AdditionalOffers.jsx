import React from 'react'
import './additionaloffers.css'
import { images } from '../../constants'
import HeadTitle from '../../components/HeadTitle/HeadTitle'

import { Link } from 'react-router-dom'

const AdditionalOffers = () => {
  return (
    <div>
        <HeadTitle title='Dodatne usluge'/>
        <div className='o__additional_section'>
            <div className='o__additional_container'>
                <div className='o__additional_container-part flex__center part_1'>
                    <img src={images.kirnerica} alt="kirnerica" />
                </div>
                <div className='o__additional_container-part part_2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil dicta doloremque mollitia sunt sapiente repellendus ipsa blanditiis commodi doloribus numquam placeat neque, omnis ea dolorem nulla! Neque, quos modi.</p>
                    <Link to={`/addoffers`}>
                        <button  className='custom__button' type='button'>Detaljnije...</button>
                    </Link>
                </div>
                <div className='o__additional_container-part flex__center part_3'>
                    <img src={images.servisKlime} alt="servis klime" />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AdditionalOffers
