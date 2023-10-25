import React from 'react'
import './offers.css'
import { images,texts } from '../../data'
import HeadTitle from '../../utils/HeadTitle/HeadTitle'
import Section from '../../utils/Section/Section'



const Offers = () => {

  return (
    <div className='o__offers'>
        <HeadTitle title='Usluge'/> 
        <Section route='/usluge/montaža-klima-uređaja' title="Montaža klima uređaja" description={texts.tekstNaslovna.klimatizacijaD} image={images.klimatizacija} alt='klima uredjaj'/>
        <Section route='/usluge/servis-klima-uređaja' className="o__offers_grejanje" title="Servis klima uređaja" description={texts.tekstDodatno.servisD} image={images.servisKlimaUredjaja} alt='servis klima uredjaja' odd='odd'/>
        <Section route='/usluge/polovni-klima-uređaji' title="Polovni klima uređaji" description={texts.tekstDodatno.polovneD} image={images.polovnaKlimatizacija} alt='polovni klima uredjaji'/>
        <Section route='/usluge/grejanje' className="o__offers_grejanje" title="Grejanje" description={texts.tekstNaslovna.grejanjeD} image={images.grejanje} alt='grejanje' odd='odd'/>
        <Section route='/usluge/ventilacija' title="Ventilacija" description={texts.tekstNaslovna.ventilacijaD} image={images.ventilacija} alt='ventilacija'/>
        <Section route='/usluge/dijamantsko-bušenje-rupa' className="o__offers_grejanje" title="Dijamantsko bušenje rupa" description={texts.tekstDodatno.dijamatnskoD} image={images.dijamantskoBusenjeRupa} alt='servis klima uredjaja' odd='odd'/>
    </div>


  )
}

export default Offers
