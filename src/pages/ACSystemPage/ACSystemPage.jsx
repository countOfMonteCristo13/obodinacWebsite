import React, { useEffect } from 'react';
import './acSystemPage.css';
import { NavbarSection, OffersSection } from '../../components';
import { BlueLine, CardFlip } from '../../utils';
import IndoorUnitTypes from '../ACInstallationPage/IndoorUnitTypes/IndoorUnitTypes';
import images from '../../data/Images/images';

const ACSystemPage = ({ sistem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sistem.title]);
  return (
    <div className='slide-enterance1' key={sistem.title}>
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
      {sistem.title !== 'Kanalski Sistem' ? (
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
