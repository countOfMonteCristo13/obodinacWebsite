import React, { useRef, useState, useEffect } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const NajcescePitanje = ({ question, index }) => {
    const [toggleButton, setToggleButton] = useState(false);
    const answerRef = useRef(null);
    const [answerHeight, setAnswerHeight] = useState(0);

    useEffect(() => {
        if (toggleButton) {
            setAnswerHeight(answerRef.current.scrollHeight);
        } else {
            setAnswerHeight(0);
        }
    }, [toggleButton]);

    const handleClick = () => {
        setToggleButton(!toggleButton);
    }

    return (
        <div className='faq-page__wrapper'>
            <div className={`faq-page__question ${toggleButton ? ' border' : ''}`} onClick={handleClick}>
                <h4>{`${index}. ${question.question}`}</h4>
                {
                    !toggleButton
                        ?
                        <BsChevronDown strokeWidth={3} />
                        :
                        <BsChevronUp strokeWidth={3} />
                }
            </div>
            <div className={`faq-page__answer ${toggleButton ? 'show' : ''}`}
                style={{ height: answerHeight + 'px' }}
            >
                <p ref={answerRef}>{question.answer}</p>
            </div>
        </div>
    )
}

export default NajcescePitanje;