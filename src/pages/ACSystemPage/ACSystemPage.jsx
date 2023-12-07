import React from 'react';
import './acSystemPage.css';
import { NavbarSection, OffersSection } from '../../components';
import { BlueLine, CardFlip } from '../../utils';
import IndoorUnitTypes from '../ACInstallationPage/IndoorUnitTypes/IndoorUnitTypes';
import images from '../../data/Images/images';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const ACSystemPage = ({ sistem }) => {
  const currentSistem = sistem.title;

  useScrollToTop();
  return (
    <div className='slide-enterance1'>
      <NavbarSection activeLink='nav__offers' />
      <div className='headtext flex__center'>
        <h2>{sistem.title}</h2>
      </div>
      <BlueLine />
      <OffersSection
        description={sistem.text}
        alt={sistem.title}
        image={sistem.img}
        href={sistem.galleryUrl}
      />
      {currentSistem !== 'Kanalski Sistem' ? (
        <IndoorUnitTypes />
      ) : (
        <>
          <div className='tipovi__klima-headtext flex__center'>
            <h2>Unutrašnja jedinica</h2>
          </div>
          <div className='flex__center section__padding'>
            <CardFlip
              imageF={images.kanalskaKlima}
              imageB={images.kanalskaKlimaP}
              opis='Kanalska'
              klasa='kanalska'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ACSystemPage;
