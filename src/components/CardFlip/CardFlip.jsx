import React, {useEffect,useState} from 'react'
import './cardflip.css'
import { images } from '../../constants'

const CardFlip = ({imageF, imageB, opis,klasa}) => {

    const [isFlipped,setIsFlipped] = useState(false);


    useEffect(() => {
      const card = document.querySelector(`.${klasa}`);
      if (isFlipped) {
        card.classList.add("isflipped");
      } else {
        card.classList.remove("isflipped");
      }
    }, [isFlipped,klasa]);
  
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

  return (
    <div className='cardFlip__scene'>

    <div className={`cardFlip__card ${klasa}`} >

          <div className='cardFlip__card-front'>
            <img src={imageF} alt="unutrasnja zidna" />
            <div className='cardFlip__card-description'>
              <h3>{opis}</h3>
              <img src={images.refresh} alt="turn" onClick={handleClick}/>
            </div>
          </div>

          <div className='cardFlip__card-back'>
            <img src={imageB} alt="unutrasnja zidna" />
            <div className='cardFlip__card-description'>
              <h3>{opis}</h3>
              <img src={images.refreshWhite} alt="turn"  onClick={handleClick}/>
            </div>
          </div>
    </div>

  </div>
  )
}

export default CardFlip
