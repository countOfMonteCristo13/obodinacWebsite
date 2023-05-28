import React, {useEffect,useState} from 'react'
import './scrollup.css'

const ScrollUp = ({image}) => {

    const [buttonUp, setButtonUp] = useState(false);

    useEffect(() => {

      const scrollBtn = document.querySelector('#scroll-btn');
      console.log(scrollBtn);

      const handleScroll = () => {
          if (window.scrollY > 0) {
            setButtonUp(true);
            scrollBtn.classList.remove('o__scrollUp-hide');
          } else {
            scrollBtn.classList.add('o__scrollUp-hide');
            setButtonUp(false);
          }
      }
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollUp = () =>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

  return (
    <div className='o__scrollUp-hide' id='scroll-btn'>
    {
        buttonUp &&
        <div onClick={scrollUp} className='o__scrollUp flex__center'>
          <img src={image} alt="up arrow" />
        </div>
    }
    </div>
  )
}

export default ScrollUp
