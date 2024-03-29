import React, { useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard';
import { IKImage } from 'imagekitio-react';
import images from '../../data/Images/images';
import './footer.css';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const Footer = () => {
  const textToCopyRef = useRef(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(textToCopyRef.current);

    // clipboard.on('success', e => {
    //   console.log('Text copied to clipboard:', e.text);
    // });

    // clipboard.on('error', e => {
    //   console.error('Error copying text to clipboard:', e.text);
    // });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className='o__footer'>
      <div className='o__footer_logo flex__center'>
        <IKImage urlEndpoint={urlEndpoint} path={images.obodinacFooter2} />
      </div>

      <div className='o__footer_line' />

      <div className='o__footer_info'>
        <div className='o__footer_info-phone info'>
          <img src={images.phoneIcon} alt='phone' />
          <div className='o__footer_info-phone_numbers'>
            <a href='tel:+381655075855'>
              <h5 className='cursor-pointer'>+381655075855</h5>
            </a>
            <a href='tel:+381631285041'>
              <h5 className='cursor-pointer'>+381631282041</h5>
            </a>
          </div>
        </div>

        <div className='info'>
          <img src={images.instagramIcon} alt='instagram' />
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/obodinacplus_klimatizacija/'
          >
            <h5 className='cursor-pointer'>@obodinac_klimatizacija</h5>
          </a>
        </div>

        <div className='info'>
          <img src={images.emailIcon} alt='email' />
          <h5
            ref={textToCopyRef}
            data-clipboard-text='klimatizacija.grejanje@gmail.com'
            className='cursor-copy'
          >
            klimatizacija.grejanje@gmail.com
          </h5>
        </div>

        <div className='info'>
          <img src={images.homeIcon} alt='home' />
          <h5>Novi Sad</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
