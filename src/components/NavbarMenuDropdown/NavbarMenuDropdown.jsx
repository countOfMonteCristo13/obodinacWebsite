import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown, BsChevronRight, BsChevronUp } from 'react-icons/bs';
import './navbarMenuDropdown.css';
import { Link } from 'react-router-dom';

const NavbarMenuDropdown = ({ options, galerija, closeDropdown }) => {
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
    const div = e.parentNode.parentNode.querySelector('a').querySelector('p').innerText;

    if (optionClicked !== '') {
      setOptionClicked('');
    } else {
      setOptionClicked(div);
    }
    setOptionsDropdown(!optionsDropdown);
  };

  return (
    <div className='dropdown-menu'>
      {options.map(option => (
        <div key={option.title}>
          <div className='dropdown-menu__link-wrapper'>
            <div className='dropdown-menu__link'>
              <Link to={galerija ? `${option.urlGalerija}` : `${option.urlUsluge}`}>
                <div onClick={closeDropdown}>{option.title}</div>
              </Link>
              {option.dropdown &&
                !galerija &&
                (!optionsDropdown ? (
                  <BsChevronDown
                    strokeWidth={1}
                    className='dropdown-menu__btn'
                    onClick={e => handleButtonClick(e.target)}
                  />
                ) : option.title === optionClicked ? (
                  <BsChevronUp
                    strokeWidth={1}
                    className='dropdown-menu__btn'
                    onClick={e => handleButtonClick(e.target)}
                  />
                ) : (
                  <BsChevronDown
                    strokeWidth={1}
                    className='dropdown-menu__btn'
                    onClick={e => handleButtonClick(e.target)}
                  />
                ))}
            </div>
            <div
              className={`dropdown-menu__options ${option.title === optionClicked ? 'show' : ''}`}
              style={{
                height:
                  option.title === optionClicked ? optionHeight * option.options.length : '0px',
              }}
            >
              {option.options.map(dropdownOption => (
                <div ref={optionRef} className='dropdown-menu__option' key={dropdownOption.title}>
                  <Link onClick={closeDropdown} to={dropdownOption.url}>
                    <BsChevronRight strokeWidth={1} size={16} /> {dropdownOption.title}
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

export default NavbarMenuDropdown;
