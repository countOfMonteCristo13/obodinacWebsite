import React, { useEffect } from 'react';
import { NavbarSection, OffersSection } from '../../components';
import { ScrollUp, BlueLine } from '../../utils';

const TypePage = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ScrollUp />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>{type.title}</h2>
        </div>
        <BlueLine />
        <OffersSection
          description={type.text}
          alt={type.title}
          image={type.img}
          href={type.galleryUrl}
        />
      </div>
    </>
  );
};

export default TypePage;
