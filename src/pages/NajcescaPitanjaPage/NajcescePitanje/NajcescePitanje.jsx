import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const NajcescePitanje = ({question,index}) => {

    const [toggleButton,setToggleButton] = useState(false); 

    const handleClick = () => {
        setToggleButton(!toggleButton);
    }

  return (
    <div className='faq__wrapper'>
        <div className={`faq__question ${toggleButton ? 'faq__question-border' : ''}`} onClick={handleClick}>
            <h4>{`${index}. ${question.question}`}</h4>
            {
                !toggleButton
                ?
                <BsChevronDown strokeWidth={3}/>
                :
                <BsChevronUp strokeWidth={3}/>
            }
        </div>
        <div className={`faq__answer ${toggleButton ? 'd-block' : 'd-none'}`}>
            <p>{question.answer}</p>
        </div>
    </div>
  )
}

export default NajcescePitanje
