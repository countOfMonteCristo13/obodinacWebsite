import React, {useEffect} from 'react'
import './offerspage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import OffersSection from '../../components/OffersSection/OffersSection'
import CardFlip from '../../components/CardFlip/CardFlip'
import ScrollUp from '../../components/ScrollUp/ScrollUp'

import { connect } from 'react-redux'
import { setOffersPageScroll } from '../../actions'

import { scroller } from 'react-scroll'


import { tekst,tekstPodnaslov } from '../../constants/tekst'
import KontaktDugme from '../../components/KontaktDugme/KontaktDugme'
import BlueLine from '../../components/BlueLine/BlueLine'


const mapStateToProps = (state) => {
  return {
    offersPageScroll: state.offersPageScroll,
  };
};

const mapDispatchToProps = {
  setOffersPageScroll,
};

const OffersPage = ({ offersPageScroll, setOffersPageScroll }) => {
  

  useEffect(() => {

    if(window.innerWidth < 769){
      const scrollToSection = () => {
          scroller.scrollTo(offersPageScroll, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        };
        scrollToSection();
  }else{
      const scrollToSection = () => {
          scroller.scrollTo(offersPageScroll, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset:-40,
          });
        };
        scrollToSection();
  }
  setOffersPageScroll('op__top');

  },[]);


  const HeadText = ({title,desc,wrapper,id}) => {
    return(
      <div className={`${wrapper} flex__center`} id={id}>
        <div className='o__offersPage_headtext flex__center'>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    
    )
  };


  return (
    <>
      <ScrollUp image={images.upArrow}/>
      
      <div className='o__offersPage slide-enterance1' id='op__top'>
        <NavbarSection activeLink='nav__offers'/>
        <HeadText id='op__klimatizacija' title="Klimatizacija" desc={tekstPodnaslov.klimatizacijaP}/>
        <BlueLine/>
        <OffersSection title='Split klima uređaji' description={tekst.splitD} alt='split klima' image={images.klimaUredjajHeader}/>
        <OffersSection title='Multi klima uređaji' description={tekst.multiD} alt='split klima' image={images.multiSistem} odd='odd'/>
        <OffersSection title='VRF sistem' description={tekst.vrfD} alt='vrf sistem' image={images.centralniSistem}/>
        <OffersSection title='Kanalski klima uređaji' description={tekst.kanalskiD} alt='kanalska klima' image={images.kanalskiSistem} odd='odd'/>

        <div className='o__offersPage_types section__padding'>
          <div className='o__offersPage_types-headtext flex__center'>
            <h2>Tipovi unutrašnjih jedinica</h2>
          </div>
          <div className='o__offersPage_types-cards'>
          <CardFlip imageF={images.unutrasnjaKlima} imageB={images.unutrasnjaKlimaP} opis="Zidna" klasa='zidna'/>
          <CardFlip imageF={images.plafonskaKlima} imageB={images.plafonskaKlimaP} opis="Plafonska" klasa='plafonska'/>
          <CardFlip imageF={images.parapetnaKlima} imageB={images.podplafonskaKlimaP} opis="Podplafonska" klasa='podplafonska'/>          
          <CardFlip imageF={images.kanalskaKlima} imageB={images.kanalskaKlimaP} opis="Kanalska" klasa='kanalska'/>
          <CardFlip imageF={images.parapetnaKlima} imageB={images.parapetnaKlimaP} opis="Parapetna" klasa='parapetna'/>          
          </div>
        </div>

        <HeadText id='op__grejanje'  title='Grejanje' wrapper='wrapper' desc={tekstPodnaslov.grejanjeP}/>

        <OffersSection title='Radijatorsko grejanje' description={tekst.radijatorD} alt='radijator' image={images.radiator}/>
        <OffersSection title='Podno grejanje' description={tekst.podnoD} alt='podno grejanje' image={images.podnoGrejanje} odd='odd' />

        <HeadText id='op__ventilacija' title='Ventilacija' wrapper='wrapper' desc={tekstPodnaslov.ventilacijaP}/>

        <OffersSection title='Mehanička ventilacija' description={tekst.ventilacijaD} alt='ventilacija' image={images.vent}/>
        <OffersSection title='Rekuperatorska ventilacija' description={tekst.rekuperatorD} alt='rekuperator' image={images.rekuperator} odd='odd' />
        <BlueLine/>
        <KontaktDugme/>
      </div>
    </>  
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(OffersPage);
