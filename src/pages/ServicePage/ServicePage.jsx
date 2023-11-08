import React, { useEffect } from 'react';
import './servicePage.css';
import { NavbarSection } from '../../components';
import { ScrollUp, TypeCard } from '../../utils';
import images from '../../data/Images/images';
import texts from '../../data/Texts/texts';

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const serviceTypes = [
    {
      img: images.ciscenjeKlimaUredjajaKartica,
      title: 'Čišćenje klima uređaja',
      url: '/usluge/servis-klima-uređaja/čišćenje-klima-uređaja',
    },
    {
      img: images.elektronika,
      title: 'Popravka elektronike',
      url: '/usluge/servis-klima-uređaja/popravka-elektronike',
    },
    {
      img: images.freon,
      title: 'Punjenje/Dopuna freona',
      url: '/usluge/servis-klima-uređaja/freon',
    },
    {
      img: images.kondezator,
      title: 'Zamena kondezatora',
      url: '/usluge/servis-klima-uređaja/zamena-kondezatora',
    },
  ];

  return (
    <>
      <ScrollUp image={images.upArrow} />
      <div className='slide-enterance1'>
        <NavbarSection activeLink='nav__offers' />
        <div className='headtext flex__center'>
          <h2>Servis klima uredjaja</h2>
          <p>{texts.textOfferPagesSubHeading.serviceD}</p>
        </div>

        <div className='sistemi__klima-headtext flex__center'>
          <h2>Tipovi servisa</h2>
        </div>
        <div className='sistemi__klima section__padding'>
          <div className='sistemi__klima-cards'>
            {serviceTypes.map(sistem => (
              <TypeCard sistem={sistem} key={sistem.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
