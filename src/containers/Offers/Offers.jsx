import React from 'react'
import './offers.css'
import { images } from '../../constants'
import HeadTitle from '../../components/HeadTitle/HeadTitle'
import Section from '../../components/Section/Section'


const Offers = () => {

  const klimatizacijaD = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate atque, labore aliquid debitis perferendis nulla quidem quam, accusantium nam laudantium nesciunt ad quia! Aliquid commodi iusto quae blanditiis ab.'
  const grejanjeD = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate atque, labore aliquid debitis perferendis nulla quidem quam, accusantium nam laudantium nesciunt ad quia! Aliquid commodi iusto quae blanditiis ab.'
  const ventilacijaD = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate atque, labore aliquid debitis perferendis nulla quidem quam, accusantium nam laudantium nesciunt ad quia! Aliquid commodi iusto quae blanditiis ab.'

  return (
    <div className='o__offers'>
      <HeadTitle title='Naša ponuda'/> 
        <Section route='op__klimatizacija' title="Klimatizacija" description={klimatizacijaD} image={images.klimatizacija} alt='klimatizacija'/>
        <Section route='op__grejanje' className="o__offers_grejanje" title="Grejanje" description={grejanjeD} image={images.grejanje} alt='grejanje' odd='odd'/>
        <Section route='op__ventilacija' title="Ventilacija" description={ventilacijaD} image={images.ventilacija} alt='ventilacija'/>
    </div>


  )
}

export default Offers
