import React, { useEffect, useState } from 'react'
import './scrollup.css'
import { BsChevronUp } from 'react-icons/bs';

// import { connect } from 'react-redux';

// const mapStateToProps = (state) => {
//   return {
//     scrollUpBtn: state.scrollUpBtn,
//   }
// }

// const ScrollUp = ({ image, scrollUpBtn }) => {
  const ScrollUp = () => {

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
        // (buttonUp && scrollUpBtn) &&
        (buttonUp) &&
        <div onClick={scrollUp} className='o__scrollUp flex__center'>
          <BsChevronUp strokeWidth={1} size={32}/>
        </div>
      }
    </div>
  )
}

export default ScrollUp;
// export default connect(mapStateToProps)(ScrollUp);
