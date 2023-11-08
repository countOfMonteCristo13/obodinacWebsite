import React, { useEffect } from 'react';
import './slider.css';
import images from '../../data/Images/images';

const Imgs = ({ galleryImages, id }) => {
  const slideImg = galleryImages.map((image, i) => {
    if (i === 0) {
      return (
        <li className='slide' data-active key={image}>
          <img src={image} alt={`img${i}`} />
        </li>
      );
    }
    return (
      <li className='slide' key={image}>
        <img src={image} alt={`img${i}`} />
      </li>
    );
  });

  return (
    <ul data-slides data-slide={`${id}`}>
      {slideImg}
    </ul>
  );
};

const Slider = ({ sliderImg, id }) => {
  useEffect(() => {
    const buttons = document.querySelectorAll(`[data-slider="${id}"]`);
    const slides = document.querySelector(`[data-slide="${id}"]`);
    const slideList = slides.querySelectorAll('.slide');
    let activeIndex = 0;

    slideList.forEach((slide, i) => {
      if (slide.dataset.active) {
        activeIndex = i;
      }
    });

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        activeIndex += offset;
        if (activeIndex < 0) activeIndex = slideList.length - 1;
        if (activeIndex >= slideList.length) activeIndex = 0;

        slideList.forEach(slide => {
          slide.removeAttribute('data-active');
        });
        slideList[activeIndex].setAttribute('data-active', true);
      });
    });
  }, [id]);

  return (
    <div className='o__slides'>
      <div className='carousel' data-carousel>
        <button
          className='carousel-button flex__center prev'
          data-carousel-button='prev'
          data-slider={`${id}`}
        >
          <img src={images.leftArrow} alt='left arrow' />
        </button>
        <button
          className='carousel-button flex__center next'
          data-carousel-button='next'
          data-slider={`${id}`}
        >
          <img src={images.rightArrow} alt='right arrow' />
        </button>
        <Imgs galleryImages={sliderImg} id={id} />
      </div>
    </div>
  );
};

export default Slider;
