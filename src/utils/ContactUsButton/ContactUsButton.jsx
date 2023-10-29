import React from 'react';
import { Link } from 'react-router-dom';

const KontaktDugme = () => {
  return (
    <div className='flex__center section__padding'>
      <Link to='/kontakt'>
        <button className='custom__button checkout-btn'>Kontaktirajte Nas</button>
      </Link>
    </div>
  );
};

export default KontaktDugme;
