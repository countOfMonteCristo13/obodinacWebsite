import React, { useEffect, useState } from 'react'
import './scrollup.css'

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    scrollUpBtn: state.scrollUpBtn,
  }
}

const ScrollUp = ({ image, scrollUpBtn }) => {

  const [buttonUp, setButtonUp] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonUp(true);
      } else {
        setButtonUp(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      {
        (buttonUp && scrollUpBtn) &&
        <div onClick={scrollUp} className='o__scrollUp flex__center'>
          <img src={image} alt="up arrow" />
        </div>
      }
    </div>
  )
}

export default connect(mapStateToProps)(ScrollUp);
