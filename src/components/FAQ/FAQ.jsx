import React from 'react'
import './fAQ.css'
import { Link } from 'react-router-dom'
import HeadTitle from '../../utils/HeadTitle/HeadTitle'

const FAQ = () => {
  return (
    <div className='faq__section'>
        <HeadTitle title='Imate pitanje?' />
      <div className='faq__cta'>
        <p>Tokom naše dugogodišnjeg rada, susretali smo se sa mnogim pitanjima od strane naših klijenata. Zato smo odlučili da sve odgovore na najčešća pitanja stavimo na jedno mesto.</p>
            <Link className='custom__button more-btn' to='/najčešća-pitanja'>Pogledajte odgovore</Link>
      </div>
    </div>
  )
}

export default FAQ
