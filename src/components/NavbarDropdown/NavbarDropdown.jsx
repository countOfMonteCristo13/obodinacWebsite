import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarDropdown.css';
import { BsChevronDown, BsChevronRight, BsChevronUp } from 'react-icons/bs';

const NavbarDropdown = ({ options, galerija }) => {
  const [optionsDropdown, setOptionsDropdown] = useState(false);
  const [optionClicked, setOptionClicked] = useState('');
  const [optionHeight, setOptionHeight] = useState(0);
  const optionRef = useRef(null);

  useEffect(() => {
    if (optionClicked !== '') {
      setOptionHeight(optionRef.current.offsetTop);
    } else {
      setOptionHeight(0);
    }
  }, [optionClicked]);

  const handleButtonClick = e => {
    const uslugeOption = e.parentNode.querySelector('a div').innerText;
    if (optionClicked !== '' && uslugeOption === optionClicked) {
      setOptionClicked('');
    } else {
      setOptionClicked(uslugeOption);
    }
    setOptionsDropdown(!optionsDropdown);
  };

  return (
    <div className=' dropdown'>
      {options.map(option => (
        <div key={option.title}>
          <div className='dropdown__link-wrapper'>
            <div className='dropdown__link'>
              <Link to={galerija ? `${option.urlGalerija}` : `${option.urlUsluge}`}>
                <div>{option.title}</div>
              </Link>
              {option.dropdown &&
                !galerija &&
                (!optionsDropdown ? (
                  <BsChevronDown
                    strokeWidth={1}
                    className='dropdown__btn'
                    onClick={e => handleButtonClick(e.currentTarget)}
                  />
                ) : option.title === optionClicked ? (
                  <BsChevronUp
                    strokeWidth={1}
                    className='dropdown__btn'
                    onClick={e => handleButtonClick(e.currentTarget)}
                  />
                ) : (
                  <BsChevronDown
                    strokeWidth={1}
                    className='dropdown__btn'
                    onClick={e => handleButtonClick(e.currentTarget)}
                  />
                ))}
            </div>

            <div
              className={`dropdown__options ${option.title === optionClicked ? 'show' : ''}`}
              style={{
                height:
                  option.title === optionClicked ? optionHeight * option.options.length : '0px',
              }}
            >
              {option.options.map(dropdownOption => (
                <div ref={optionRef} className='dropdown__option' key={dropdownOption.title}>
                  <Link to={dropdownOption.url}>
                    <BsChevronRight strokeWidth={1} /> {dropdownOption.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarDropdown;
