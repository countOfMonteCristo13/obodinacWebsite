import React from 'react'
import './section.css'

import { Link } from 'react-router-dom'

const Section = ({title,description,image,alt,odd}) => {



  return (
    <div className='o__section  section__padding' id={odd}>

        <div className='o__section_img'>
            <img src={image} alt={alt} />
        </div>

        <div className='o__section_details'>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/offers`}>
              <button className='custom__button' type='button'>Detaljnije...</button>
            </Link>
        </div>


    </div>
  )
}

export default Section
