import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbarDropdown.css'
import { BsChevronDown, BsChevronRight, BsChevronUp } from 'react-icons/bs'

const NavbarDropdown = ({ options,galerija,visibility }) => {

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
    <div className={`slide-bottom-dropdown dropdown ${visibility}`}>
      {options.map((option) => (
        <div key={option.title}>
          <div className='dropdown-link-wrapper'>
            <div className='dropdown-link'>
              <Link to={galerija ? `${option.urlGalerija}`  : `${option.urlUsluge}`}>
                <p>
                  {option.title}
                </p>
              </Link>
              {
                (option.dropdown && !galerija) &&
                (
                  !optionsDropdown
                    ?
                    <BsChevronDown strokeWidth={1} className='dropdown-btn' onClick={(e) => handleButtonClick(e.target)} />
                    :
                    (
                      option.title === optionClicked 
                      ?
                      <BsChevronUp strokeWidth={1} className='dropdown-btn'  onClick={(e) => handleButtonClick(e.target)}/>
                      :
                      <BsChevronDown strokeWidth={1} className='dropdown-btn'  onClick={(e) => handleButtonClick(e.target)} />
                    )
                )
              }
            </div>

            {
              option.title === optionClicked 
              &&
              <div className='dropdown-options'>
                {
                  option.options.map((dropdownOption) => (
                    <Link to={dropdownOption.url} key={dropdownOption.title}>
                      <p><BsChevronRight strokeWidth={1}/> {dropdownOption.title}</p>
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

export default NavbarDropdown
