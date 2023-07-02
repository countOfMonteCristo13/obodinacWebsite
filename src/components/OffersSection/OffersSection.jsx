import React from 'react'
import './offerssection.css'


const OffersSection = ({title,description,image,alt,odd}) => {
  return (
    <div className='o__offersSection section__padding' id={odd}>

        <div className='o__offersSection_img flex__center'>
          <div className='o__offersSection_img-wrapper'>
            <img src={image} alt={alt} />
          </div>
        </div>

        <div className='o__offersSection_details'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>


    </div>
  )
}

export default OffersSection