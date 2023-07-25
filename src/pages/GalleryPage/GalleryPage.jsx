import React, { useEffect, useState } from 'react'
import './gallerypage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'

import ImageSlider from '../../components/ImageSlider/ImageSlider'

import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'

import { connect } from 'react-redux'
import { setGalleryPageScroll } from '../../actions'

import {ventilacija, klimatizacija, grejanje } from '../../constants/galleryImages'

const mapStateToProps = (state) => {
    return {
      galleryPageScroll: state.galleryPageScroll  // state se tako zove
    };
  };
  
  const mapDispatchToProps = {
    setGalleryPageScroll,
  }

const GalleryPage = ({ setGalleryPageScroll, galleryPageScroll }) => {

    const [ventilacijaFilter,setVentilacijaFilter] = useState('Sve');
    const [grejanjeFilter,setGrejanjeFilter] = useState('Sve');
    const [klimatizacijaFilter,setKlimatizacijaFilter] = useState('Sve');

    useEffect(() => {

        if(window.innerWidth < 769){
            const scrollToSection = () => {
                scroller.scrollTo(galleryPageScroll, {
                  duration: 0,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                });
              };
              scrollToSection();
        }else{
            const scrollToSection = () => {
                scroller.scrollTo(galleryPageScroll, {
                  duration: 0,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                  offset:-40,
                });
              };
              scrollToSection();
        }
        setGalleryPageScroll('gp__top');



    
    },[]);



    const SubHeading = ({title,route}) =>{
        return(
            <div className='flex__center' id={route}>
                <div className='subHeading'>
                    <h2>{title}</h2>
                </div>
            </div>
        );
    }

  return (
    <>
        <ScrollUp image={images.upArrow}/>
        
        <div className='o__galleryPage slide-enterance1' id='gp__top'>
            
            <NavbarSection activeLink='nav__gallery'/>

            <div className='o__galleryPage_section'>
                <SubHeading title='Klimatizacija' route='gp__klimatizacija'/>

                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${klimatizacijaFilter === 'Sve' ? 'active-btn' : ''}`} onClick={() => setKlimatizacijaFilter('Sve')}>Sve</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${klimatizacijaFilter === 'Split' ? 'active-btn' : ''}`} onClick={() => setKlimatizacijaFilter('Split')}>Split</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${klimatizacijaFilter === 'Multi' ? 'active-btn' : ''}`} onClick={() => setKlimatizacijaFilter('Multi')}>Multi</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${klimatizacijaFilter === 'Centralni' ? 'active-btn' : ''}`} onClick={() => setKlimatizacijaFilter('Centralni')}>Centralni Sistem</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${klimatizacijaFilter === 'Kanalski' ? 'active-btn' : ''}`} onClick={() => setKlimatizacijaFilter('Kanalske')}>Kanal</button>
                </div>

                <ImageSlider images={klimatizacija[klimatizacijaFilter]}/>
                
                <SubHeading title='Grejanje' route='gp__grejanje'/>
                
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${grejanjeFilter === 'Sve' ? 'active-btn' : ''}`} onClick={() => setGrejanjeFilter('Sve')}>Sve</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${grejanjeFilter === 'Radijator' ? 'active-btn' : ''}`} onClick={() => setGrejanjeFilter('Radijator')}>Radijator</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${grejanjeFilter === 'Podno' ? 'active-btn' : ''}`} onClick={() => setGrejanjeFilter('Podno')}>Podno</button>
                </div>
                <ImageSlider images={grejanje[grejanjeFilter]}/>

                <SubHeading title='Ventilacija' route='gp__ventilacija'/>
                
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${ventilacijaFilter === 'Sve' ? 'active-btn' : ''}`} onClick={() => setVentilacijaFilter('Sve')}>Sve</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${ventilacijaFilter === 'Mehanička' ? 'active-btn' : ''}`} onClick={() => setVentilacijaFilter('Mehanička')}>Mehanička</button>
                    <button type='button' className={`o__galleryPage_phototype-buttons_button ${ventilacijaFilter === 'Rekuperator' ? 'active-btn' : ''}`} onClick={() => setVentilacijaFilter('Rekuperator')}>Rekuperator</button>
                </div>
                <ImageSlider images={ventilacija[ventilacijaFilter]}/>
                <div className='o__galleryPage_blueline margint'>
                    <div/>
                </div>
                <div className='o__galleryPage_button-wrapper flex__center'>
                    <Link to={'/contact'}><button type='button' className='custom__button checkout-btn'>Kontaktirajte Nas</button></Link>
                </div>

            </div>
        </div>
    </>    
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryPage);




