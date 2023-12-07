import React, { useEffect } from 'react';
import { SpareAC } from '../../utils';
import { NavbarSection } from '../../components';
import texts from '../../data/Texts/texts';

const SpareACPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='slide-enterance1'>
      <NavbarSection activeLink='nav__offers' />
      <div className='headtext flex__center'>
        <h2>Polovni klima uređaji</h2>
        <p>{texts.textOfferPagesSubHeading.spareACD}</p>
      </div>

      <div className='sistemi__klima-headtext flex__center'>
        <h2>Ponuda</h2>
      </div>
      <SpareAC />
    </div>
  );
};

export default SpareACPage;
