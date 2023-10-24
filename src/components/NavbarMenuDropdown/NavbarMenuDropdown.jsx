import React, { useEffect, useState } from 'react'
import { BsChevronDown, BsChevronRight, BsChevronUp } from 'react-icons/bs';
import './navbarMenuDropdown.css'
import { Link } from 'react-router-dom';

const NavbarMenuDropdown = ({ options,galerija,closeDropdown }) => {
  
    const [optionsDropdown, setOptionsDropdown] = useState(false);
    const [optionClicked,setOptionClicked] = useState('');
  
    useEffect(() => {
      
    })
  
    const handleButtonClick = (e) => {
      const div = e.parentNode.parentNode.querySelector('a').querySelector('p').innerText;
  
      if(optionClicked !== ''){
        setOptionClicked('');
      }else{
        setOptionClicked(div);
      }
      console.log(div);
      setOptionsDropdown(!optionsDropdown)
    }
  
    return (
      <div className='dropdown-menu'>
        {options.map((option) => (
          <div key={option.title}>
            <div className='dropdown-menu__link-wrapper'>
              <div className='dropdown-menu__link'>
                <Link to={galerija ? `${option.urlGalerija}`  : `${option.urlUsluge}`}>
                  <p onClick={closeDropdown}>
                    {option.title}
                  </p>
                </Link>
                {
                  (option.dropdown && !galerija) &&
                  (
                    !optionsDropdown
                      ?
                      <BsChevronDown strokeWidth={1} className='dropdown-menu__btn' onClick={(e) => handleButtonClick(e.target)} />
                      :
                      (
                        option.title === optionClicked 
                        ?
                        <BsChevronUp strokeWidth={1} className='dropdown-menu__btn'  onClick={(e) => handleButtonClick(e.target)}/>
                        :
                        <BsChevronDown strokeWidth={1} className='dropdown-menu__btn'  onClick={(e) => handleButtonClick(e.target)} />
                      )
                  )
                }
              </div>
  
              {
                option.title === optionClicked 
                &&
                <div className='dropdown-menu__options'>
                  {
                    option.options.map((dropdownOption) => (
                      <Link onClick={closeDropdown} to={dropdownOption.url} key={dropdownOption.title}>
                        <BsChevronRight strokeWidth={1}/> {dropdownOption.title}
                      </Link>
                    ))
                  }
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    )
}

export default NavbarMenuDropdown
