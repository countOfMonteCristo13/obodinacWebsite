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


import { Link } from 'react-router-dom'

let splitD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let multiD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let centralniD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let kanalD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let radijatorD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let podnoD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let ventilacijaD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';
let rekuperatorD = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam provident perspiciatis, enim, et cum omnis cupiditate voluptas deleniti at laudantium nulla aut consequuntur sint consequatur doloribus harum? In, fugit!';


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

    console.log(offersPageScroll)

    const scrollToSection = () => {
      scroller.scrollTo(offersPageScroll, {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    };
    
    scrollToSection();
    setOffersPageScroll('top');

  },[]);


  const HeadText = ({title,wrapper,id}) => {
    return(
      <div className={wrapper} id={id}>
        <div className='o__offersPage_headtext flex__center'>
          <h2>{title}</h2>
        </div>
      </div>
    
    )
  };

  const BlueLine = () =>{
    return(
      <div className='o__offersPage_blueline-wrapper'>
        <div className='o__offersPage_blueline'/>
      </div>
      
    );
  }


  return (
    <div className='o__offersPage' id='top'>
      <NavbarSection image={images.maintenanceWhite} imageLogo={images.obodinacFooter2}/>
      <ScrollUp image={images.upArrow}/>

      <HeadText id='klimatizacija' title="Klimatizacija"/>
      <BlueLine/>
      <OffersSection title='Split klima uredjaji' description={splitD} alt='split klima' image={images.klimaUredjajHeader}/>
      <OffersSection title='Multi klima uredjaji' description={multiD} alt='split klima' image={images.multiSistem} odd='odd'/>
      <OffersSection title='Centralni sistem' description={centralniD} alt='centralni sistem' image={images.centralniSistem}/>
      <OffersSection title='Kanalski klima uredjaji' description={kanalD} alt='kanalska klima' image={images.kanalskiSistem} odd='odd'/>

      <div className='o__offersPage_types'>
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

      <HeadText id='grejanje'  title='Grejanje' wrapper='wrapper'/>

      <OffersSection title='Radijatorsko grejanje' description={radijatorD} alt='radijator' image={images.radiator}/>
      <OffersSection title='Podno grejanje' description={podnoD} alt='podno grejanje' image={images.podnoGrejanje} odd='odd' />

      <HeadText id='ventilacija' title='Ventilacija' wrapper='wrapper'/>

      <OffersSection title='Standard Ventilacija' description={ventilacijaD} alt='ventilacija' image={images.vent}/>
      <OffersSection title='Rekuperator' description={rekuperatorD} alt='rekuperator' image={images.rekuperator} odd='odd' />
      <BlueLine/>
      <div className='o__offersPage_button-wrapper flex__center'>
        <Link to={'/contact'}><button type='button' className='custom__button'>Kontaktirajte Nas</button></Link>
      </div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(OffersPage);
