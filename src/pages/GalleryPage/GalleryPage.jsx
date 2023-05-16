import React from 'react'
import './gallerypage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'
import HeadTitle from '../../components/HeadTitle/HeadTitle'
import Slider from '../../components/Slider/Slider'

import { Link } from 'react-router-dom'

const GalleryPage = () => {

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

    const SubHeading = ({title}) =>{
        return(
            <div className='flex__center'>
                <div className='subHeading'>
                    <h2>{title}</h2>
                </div>
            </div>
        );
    }

  return (
    <div className='o__galleryPage'>
        <NavbarSection image={images.maintenanceWhite} imageLogo={images.obodinacFooter2}/>
        <HeadTitle title='Galerija' color='blue'/>
        <div className='o__galleryPage_blueline'>
            <div/>
        </div>
        <div className='o__galleryPage_section'>
                <SubHeading title='Klimatizacija'/>
            <div className='o__galleryPage_photo-type_buttons'>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Split</button>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Multi</button>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Centralni Sistem</button>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Kanal</button>
            </div>
            <Slider sliderImg={klimatizaijaImgs} id='split'/>
            <SubHeading title='Grejanje'/>
            <div className='o__galleryPage_photo-type_buttons'>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Radijator</button>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Podno</button>
            </div>
            <Slider sliderImg={sliderImg} id='grejanje'/>
            <SubHeading title='Ventilacija'/>
            <div className='o__galleryPage_photo-type_buttons'>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Standard</button>
                <button type='button' className='o__galleryPage_phototype-buttons_button'>Rekuperator</button>
            </div>
            <Slider sliderImg={sliderImg} id='ventilacija'/>
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
  )
}

export default GalleryPage
