import React, {useEffect,useState} from 'react'
import './scrollup.css'

const ScrollUp = ({image,type}) => {

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
  
    const scrollUp = () =>{
      window.scrollTo(0, 0);
    }

  return (
    <div>
    {
        buttonUp &&
        <div onClick={scrollUp} className={`o__header_scrollUp flex__center ${type}`}>
          <img src={image} alt="up arrow" />
        </div>
    }
    </div>
  )
}

export default ScrollUp
