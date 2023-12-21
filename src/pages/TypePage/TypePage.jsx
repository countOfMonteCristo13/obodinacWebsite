import React, { useEffect } from 'react';
import { NavbarSection, OffersSection } from '../../components';
import { BlueLine } from '../../utils';

const TypePage = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type.title]);
  return (
    <div className='slide-enterance1' key={type.title}>
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
  );
};

export default TypePage;
