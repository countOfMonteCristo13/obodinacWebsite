import React, { useEffect, useRef, useState } from 'react';
import ClipboardJS from 'clipboard';
import axios from 'axios';
import { NavbarSection } from '../../components';
import images from '../../data/Images/images';
import './contactpage.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);

  const emailRef = useRef(null);

  const handleEmailChange = e => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emailValidation = emailRegex.test(e.target.value); // true or false

    setEmail(e.target.value);
    setIsEmailValid(emailValidation);
  };

  const isValidForm = () => {
    return name !== '' && isEmailValid && message !== '';
  };

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { name, email, phone, message };
    try {
      await axiosInstance.post('/send-email', data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');

    const clipboardInstances = new ClipboardJS(emailRef.current, {
      text: () => emailRef.current.innerText,
    });

    // clipboardInstances.on('success', e => {
    //   console.log(`Email ${e.text} is copied`);
    // });

    // clipboardInstances.on('error', e => {
    //   console.log('Failed to copy email:', e.text);
    // });

    return () => {
      clipboardInstances.destroy();
    };
  }, []);

  return (
    <div className='o__contactPage slide-enterance1'>
      <NavbarSection activeLink='nav__contact' />
      <div className='headtext flex__center'>
        <h2>Uvek na raspolaganju</h2>
        <p>
          U svakom trenutku smo dostupni i dolazimo na intervenciju u vreme koje Vama lično najviše
          odgovara. Naši majstori pokrivaju celu teritoriju grada. Intervenciju možete zakazati
          putem telefonskog poziva ili putem online zakazivanja, odnosno kontakt forme. Takođe, na
          oba navedena načina nas možete kontaktirati ukoliko Vam je potreban savet ili imate neku
          nedoumicu, kao i ukoliko imate pohvale ili kritike na naš rad, radi smo da saslušamo i na
          taj način dodatno unapredimo naše poslovanje. Poslujte sa ovlašćenim klima servisom, koji
          se klima uređajima bavi 24h!
        </p>
      </div>
      <div className='o__contactPage_section'>
        <div className='o__contactPage_options-window' id='option-message'>
          <form onSubmit={handleSubmit} className='kontakt-inputi'>
            <label htmlFor='ime'>Ime i prezime</label>
            <input
              type='text'
              name='ime'
              placeholder='Petar Petrović'
              required
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='petar.petrovic@gmail.com'
              required
              onChange={handleEmailChange}
            />
            <label htmlFor='phone'>
              Broj telefona (<span className='phone-optional'>Opcionalno</span>)
            </label>
            <input
              type='text'
              name='phone'
              placeholder='123/345-678'
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor='poruka'>Poruka</label>
            <div className='textarea_wrapper flex__center'>
              <textarea
                name='poruka'
                id='poruka'
                cols='50'
                rows='10'
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            <div className='o__contactPage_options_message-submit flex__center' id='submitButton'>
              <button
                className='custom__button submit__btn'
                type='submit'
                value='Pošalji'
                disabled={!isValidForm()}
              >
                Pošalji
              </button>
            </div>
          </form>
        </div>

        <div className='o__contactPage_options-call' id='option-call'>
          <h2>Možete da nas kontaktirate i putem:</h2>
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

export default ContactPage;
