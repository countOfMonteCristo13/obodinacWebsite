import React, { useEffect } from 'react'
import './gallerypage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import Slider from '../../components/Slider/Slider'
import ScrollUp from '../../components/ScrollUp/ScrollUp'

import ImageSlider from '../../components/ImageSlider/ImageSlider'

import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'

import { connect } from 'react-redux'
import { setGalleryPageScroll } from '../../actions'

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

        console.log(galleryPageScroll)

        const page = document.querySelector('#gp__top');
    
        const scrollToSection = () => {
          scroller.scrollTo(galleryPageScroll, {
            duration: 0,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        };

        scrollToSection();
        setGalleryPageScroll('gp__top');
    
    },[]);

    const klimatizaijaImgs = [
        images.split1,
        images.split2,
        images.split3,
        images.split4
    ]

    const sliderImg = [
        "https://source.unsplash.com/78A265wPiO4",
        "https://source.unsplash.com/ndN00KmbJ1c",
        "https://source.unsplash.com/eOpewngf68w"
    ]

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
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Split</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Multi</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Centralni Sistem</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Kanal</button>
                </div>
                <Slider sliderImg={klimatizaijaImgs} id='split'/>
                
                <SubHeading title='Grejanje' route='gp__grejanje'/>
                
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Radijator</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Podno</button>
                </div>
                <Slider sliderImg={sliderImg} id='grejanje'/>
                
                <SubHeading title='Ventilacija' route='gp__ventilacija'/>
                
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Standard</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Rekuperator</button>
                </div>
                {/* <Slider sliderImg={sliderImg} id='ventilacija'/> */}
                <ImageSlider/>
                <SubHeading title='Dodatno'/>
                <div className='o__galleryPage_photo-type_buttons'>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Kernovanje</button>
                    <button type='button' className='o__galleryPage_phototype-buttons_button'>Solarni Paneli</button>
                </div>
                <Slider sliderImg={sliderImg} id='dodatno'/>
                <div className='o__galleryPage_blueline margint'>
                    <div/>
                </div>
                <div className='o__galleryPage_button-wrapper flex__center margint'>
                    <Link to={'/contact'}><button type='button' className='custom__button'>Kontaktirajte Nas</button></Link>
                </div>

            </div>
        </div>
    </>    
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(GalleryPage);
