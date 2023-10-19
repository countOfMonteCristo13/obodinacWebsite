import React from 'react'
import './offers.css'
import { images } from '../../constants'
import HeadTitle from '../../components/HeadTitle/HeadTitle'
import Section from '../../components/Section/Section'

import { tekstNaslovna } from '../../constants/tekst'


const Offers = () => {

  return (
    <div className='o__offers'>
        <HeadTitle title='Usluge'/> 
        <Section route='op__klimatizacija' title="Montaža klima uredjaja" description={tekstNaslovna.klimatizacijaD} image={images.klimatizacija} alt='klima uredjaj'/>
        <Section route='op__grejanje' className="o__offers_grejanje" title="Servis klima uredjaja" description={tekstNaslovna.grejanjeD} image={images.grejanje} alt='servis klima uredjaja' odd='odd'/>
        <Section route='op__ventilacija' title="Polovni klima uredjaji" description={tekstNaslovna.ventilacijaD} image={images.ventilacija} alt='polovni klima uredjaji'/>
    </div>


  )
}

export default Offers
