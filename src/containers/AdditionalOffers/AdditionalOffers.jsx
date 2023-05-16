import React from 'react'
import './additionaloffers.css'
import { images } from '../../constants'
import HeadTitle from '../../components/HeadTitle/HeadTitle'

const AdditionalOffers = () => {
  return (
    <div>
        <HeadTitle title='Dodatne usluge'/>
        <div className='o__additional_section'>
            <div className='o__additional_container'>
                <div className='o__additional_container-part part_1'>
                    <img src={images.kirnerica} alt="kirnerica" />
                </div>
                <div className='o__additional_container-part part_2'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil dicta doloremque mollitia sunt sapiente repellendus ipsa blanditiis commodi doloribus numquam placeat neque, omnis ea dolorem nulla! Neque, quos modi.</p>
                </div>
                <div className='o__additional_container-part part_3'>
                    <img src={images.vesMasina} alt="ves masina" />
                    <img src={images.solarniPanel} alt="solarni panel" />
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default AdditionalOffers
