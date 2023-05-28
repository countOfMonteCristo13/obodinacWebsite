import React from 'react'

import './spareac.css'

import {images, polovneKlime } from '../../constants'
import { Link } from 'react-router-dom'

const SpareAC = () => {
    console.log(polovneKlime);


            return (
                <div>
                    
                    <div className='o__spareAC'>
                        {polovneKlime.map((klima, index) => (
                            <div className='o__spareAC-klima' key={index}>
                                <div className='o__spareAC-klima-img'>
                                    <img src={klima.image} alt={klima.name} />
                                </div>
                                <div className='o__spareAC-klima-desc'>
                                    <h2>{klima.name}</h2>
                                    <p>Klima uredjaj</p>
                                </div>
                                <div className='o__spareAC-klima-buttons'>
                                    <button className='custom__button more-btn o__spareAC-klima-buttons_button'>Detaljnije...</button>
                                    <Link to={'/contact'}><button className='custom__button checkout-btn o__spareAC-klima-buttons_button'>Kontaktirajte Nas</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
       


}

export default SpareAC
