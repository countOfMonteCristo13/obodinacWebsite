import React, { useEffect } from 'react';
import './homepage.css';
import { Header, AboutUs, Offers, Gallery, NavbarSection, FAQ } from '../../components';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='hp slide-enterance1'>
      <NavbarSection activeLink='nav__home' />
      <AboutUs />
      <Offers />
      <Gallery />
      <FAQ />
    </div>
  );
};

export default HomePage;
