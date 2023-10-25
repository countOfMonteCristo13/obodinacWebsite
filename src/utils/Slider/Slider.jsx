import React, { useEffect} from 'react'
import './slider.css'
import { images } from '../../data'

const Slider = ({sliderImg,id}) => {

  const Imgs = ({galleryImages}) =>{
    const slideImg = galleryImages.map((image,i) =>{
      if(i===0){
        return(
          <li className="slide" data-active key={i}>
          <img src={image} alt={`img${i}`}/>
        </li>
        )
      }else{
        return(
          <li className="slide" key={i}>
            <img src={image} alt={`img${i}`}/>
          </li>
        )
      }
    })

    return(
      <ul data-slides data-slide={`${id}`}>
        {slideImg}
      </ul>
    );
  }

  useEffect(() => {
    const buttons = document.querySelectorAll(`[data-slider="${id}"]`);
    const slides = document.querySelector(`[data-slide="${id}"]`);
    const slideList = slides.querySelectorAll(".slide");
    let activeIndex = 0;
  
    slideList.forEach((slide, i) => {
      if (slide.dataset.active) {
        activeIndex = i;
      }
    });
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        activeIndex += offset;
        if (activeIndex < 0) activeIndex = slideList.length - 1;
        if (activeIndex >= slideList.length) activeIndex = 0;
  
        slideList.forEach(slide => {
          slide.removeAttribute("data-active");
        });
        slideList[activeIndex].setAttribute("data-active", true);
      });
    });
  }, [id]);
  
  return (
    <div className="o__slides">

      <div className="carousel" data-carousel>
          <button className="carousel-button flex__center prev" data-carousel-button="prev" data-slider={`${id}`} >
              <img src={images.leftArrow} alt="left arrow" /> 
          </button>
          <button className="carousel-button flex__center next" data-carousel-button="next" data-slider={`${id}`}>
              <img src={images.rightArrow} alt="right arrow" /> 
          </button>
          <Imgs galleryImages={sliderImg}/>
        </div>

      </div>
  )
}

export default Slider
