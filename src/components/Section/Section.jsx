import React from 'react'
import './section.css'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { setOffersPageScroll } from '../../actions'

const mapDispatchToProps = {
  setOffersPageScroll,
};

const mapStateToProps = state =>{
  return{
    offersPageScroll: state.offersPageScroll,
  }
}

const Section = ({title,description,image,alt,odd,route,setOffersPageScroll}) => {

  const changeOffersScrollSection = (section) =>{
    const scrollValue = section;
    setOffersPageScroll(scrollValue);
  }

  

  return (
    <div className='o__section  section__padding' id={odd}>

        <div className='o__section_img'>
            <img src={image} alt={alt} />
        </div>

        <div className='o__section_details'>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/offers`}>
              <button onClick={() => changeOffersScrollSection(route)} className='custom__button more-btn' type='button'>Detaljnije...</button>
            </Link>
        </div>


    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Section);
