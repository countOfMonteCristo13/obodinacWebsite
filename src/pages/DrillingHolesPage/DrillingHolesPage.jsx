import React, { useEffect } from 'react';
import images from '../../data/Images/images';
import texts from '../../data/Texts/texts';
import { NavbarSection, OffersSection } from '../../components';
import { ScrollUp, BlueLine, TypeCard } from '../../utils';

const DrillingHolesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const drillTypes = [
    {
      img: images.burgija102,
      title: 'Ø 102',
      url: '#',
    },
    {
      img: images.burgija112,
      title: 'Ø 112',
      url: '#',
    },
    {
      img: images.burgija162,
      title: 'Ø 162',
      url: '#',
    },
    {
      img: images.burgija202,
      title: 'Ø 202',
      url: '#',
    },
    {
      img: images.burgija252,
      title: 'Ø 252',
      url: '#',
    },
  ];
  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>Dijamantsko bušenje rupa</h2>
        </div>
        <BlueLine />
        <OffersSection
          description={texts.textOfferPagesSubHeading.drillingD}
          alt='Dijamantsko bušenje rupa'
          image={images.kirnerica}
        />
        <div className='sistemi__klima-headtext flex__center'>
          <h2>Prečnici burgija</h2>
        </div>
        <div className='sistemi__klima section__padding'>
          <div className='sistemi__klima-cards'>
            {drillTypes.map(sistem => (
              <TypeCard sistem={sistem} key={sistem.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DrillingHolesPage;
