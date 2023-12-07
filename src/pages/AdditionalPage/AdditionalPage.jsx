import React, { useEffect } from 'react';
import './additionalpage.css';
import { images, galleryImages, texts } from '../../data';
import { NavbarSection, OffersSection } from '../../components';
import { ImageSlider, SpareAC, BlueLine } from '../../utils';

const AdditionalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='o__addoffersPage-wrapper'>
      <div className='o__addoffersPage slide-enterance1'>
        <NavbarSection activeLink='nav__faq' />
        <OffersSection
          title='Dijamantsko bušenje rupa'
          description={texts.tekstDodatno.dijamatnskoD}
          alt='kernovanje'
          image={images.kirnerica}
        />
        <div className='o__addoffersPage_slider-wrapper'>
          <ImageSlider images={galleryImages.kernovanjeImages} />
        </div>
        <BlueLine />
        <OffersSection
          title='Servis klima uređaja'
          description={texts.tekstDodatno.servisD}
          alt='servis klime'
          image={images.servisKlime}
          odd='odd'
        />
        <div className='o__addoffersPage_slider-wrapper'>
          <ImageSlider images={galleryImages.servisKlimaImages} />
        </div>
        <BlueLine />
        <div className='o__addoffersPage_polovne-klime section__padding'>
          <div className='o__addoffersPage_polovne-klime-title'>
            <h2>Polovni klima uređaji</h2>
          </div>
          <div className='o__addoffersPage_polovne-klime-desc'>
            <p>{texts.textOfferPagesSubHeading.spareACD}</p>
          </div>
        </div>
        <SpareAC />
      </div>
    </div>
  );
};

export default AdditionalPage;
