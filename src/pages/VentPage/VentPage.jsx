import React, { useEffect } from 'react';
import { NavbarSection } from '../../components';
import { TypeCard } from '../../utils';
import images from '../../data/Images/images';
import texts from '../../data/Texts/texts';

const VentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const ventTypes = [
    {
      img: images.ventKartica,
      title: 'Mehanička ventilacija',
      url: '/usluge/ventilacija/mehanička-ventilacija',
    },
    {
      img: images.rekuperatorKartica,
      title: 'Rekuperatorska ventilacija',
      url: '/usluge/ventilacija/rekuperatorska-ventilacija',
    },
  ];

  return (
    <div className='slide-enterance1'>
      <NavbarSection activeLink='nav__offers' />
      <div className='headtext flex__center'>
        <h2>Ventilacija</h2>
        <p>{texts.textOfferPagesSubHeading.ventD}</p>
      </div>

      <div className='sistemi__klima-headtext flex__center'>
        <h2>Tipovi ventilacije</h2>
      </div>
      <div className='sistemi__klima section__padding'>
        <div className='sistemi__klima-cards'>
          {ventTypes.map(sistem => (
            <TypeCard sistem={sistem} key={sistem.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VentPage;
