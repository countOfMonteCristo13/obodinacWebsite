import React, { useEffect, useRef } from 'react';
import './fAQuestionsPage.css';
import ClipboardJS from 'clipboard';
import { NavbarSection } from '../../components';
import images from '../../data/Images/images';
import faQuestions from '../../data/FAQuestions/faQuestions';
import FAQuestion from './FAQuestion/FAQuestion';

const FAQuestionsPage = () => {
  const emailRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const clipboardInstances = new ClipboardJS(emailRef.current, {
      text: () => emailRef.current.innerText,
    });

    clipboardInstances.on('success', e => {
      console.log(`Email ${e.text} is copied`);
    });
    clipboardInstances.on('error', e => {
      console.log('Failed to copy email:', e.text);
    });

    return () => {
      clipboardInstances.destroy();
    };
  });

  return (
    <div className='slide-enterance1'>
      <NavbarSection activeLink='nav__faq' />
      <div className='headtext flex__center'>
        <h2>Odgovori na vaša pitanja</h2>
        <p>
          U nastavku se nalaze najčešća pitanja koja nam postavljate. Potrudili smo se da ih sva
          izdvojimo, kako biste što bolje upoznali principe rada Vašeg klima uređaja.
        </p>
      </div>
      <div className='faq-page__section'>
        <div className='faq-page__questions'>
          {faQuestions.map((question, index) => (
            <FAQuestion question={question} index={index + 1} key={question.question} />
          ))}
        </div>
        <div className='o__contactPage_options-call' id='option-call'>
          <h2>Za dodatna pitanja kontaktirajte nas putem:</h2>
          <div className='opcija-poziv'>
            <img src={images.phoneIcon} alt='phone' />
            <div>
              <a href='tel:+381655075855'>+381655075855</a>
              <a href='tel:+381631282041'>+381631282041</a>
            </div>
          </div>
          <div className='opcija-poziv opcija-email'>
            <img src={images.emailIcon} alt='email' />
            <p ref={emailRef}>klimatizacijagrejanje@gmail.com</p>
          </div>
          <div className='opcija-poziv opcija-instagram'>
            <img src={images.instagramIcon} alt='instagram' />
            <a href='https://www.instagram.com/obodinacplus_klimatizacija/'>
              @obodinac_klimatizacija
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQuestionsPage;
