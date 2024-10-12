import React, { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';
import './scrollup.css';

const ScrollUp = () => {
  const [buttonUp, setButtonUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonUp(true);
      } else {
        setButtonUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {buttonUp && (
        <div onClick={scrollUp} className='o__scrollUp flex__center'>
          <BsChevronUp strokeWidth={1} size={32} />
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
