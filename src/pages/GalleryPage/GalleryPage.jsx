import React, { useEffect } from 'react'
import './gallerypage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import ScrollUp from '../../components/ScrollUp/ScrollUp'

import ImageSlider from '../../components/ImageSlider/ImageSlider'

import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'

import { connect } from 'react-redux'
import { setGalleryPageScroll } from '../../actions'

import { splitImages,ventilacijaImages,centralneImages } from '../../constants/galleryImages'

const mapStateToProps = (state) => {
    return {
      galleryPageScroll: state.galleryPageScroll  // state se tako zove
    };
  };
  
  const mapDispatchToProps = {
    setGalleryPageScroll,
  }

const GalleryPage = ({ setGalleryPageScroll, galleryPageScroll }) => {

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

    const imageSliderFilter = (event) =>{


        const buttonsWrapper = event.target.parentNode;
        const buttons = Array.from(buttonsWrapper.getElementsByTagName('button'));
        const buttonClicked = event.target;


        buttons.forEach((button) => {
            button.classList.remove('active-btn')
        })

        buttonClicked.classList.add('active-btn')

    }


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
                    <button type='button' className='o__galleryPage_phototype-buttons_button active-btn' onClick={(event) => imageSliderFilter(event)}>Sve</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Split</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Multi</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Centralni Sistem</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Kanal</button>
                </div>

                <ImageSlider images={splitImages}/>
                
                <SubHeading title='Grejanje' route='gp__grejanje'/>
                
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className='o__galleryPage_phototype-buttons_button active-btn' onClick={(event) => imageSliderFilter(event)}>Sve</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Radijator</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Podno</button>
                </div>
                <ImageSlider images={centralneImages}/>

                <SubHeading title='Ventilacija' route='gp__ventilacija'/>
                
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className='o__galleryPage_phototype-buttons_button active-btn' onClick={(event) => imageSliderFilter(event)}>Sve</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Standard</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button' onClick={(event) => imageSliderFilter(event)}>Rekuperator</button>
                </div>
                <ImageSlider images={ventilacijaImages}/>
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
