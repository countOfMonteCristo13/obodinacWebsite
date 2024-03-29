import { React } from 'react';
import { Link } from 'react-router-dom';
import { IKImage } from 'imagekitio-react';
import images from '../../data/Images/images';
import './aboutus.css';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const AboutUs = () => {
  return (
    <div className='o__aboutUs  section__padding'>
      <div className='o__aboutUs_details'>
        <h2>Ovlašćeni servis klima uređaja</h2>
        <p>
          <span>
            "Obodinac" je porodična firma koja je u ovom poslu već dugo godina. Osnovana je davne
            1991. godine u Novom Sadu.
          </span>
          <span>
            Našim dugogodišnjim iskustvom, predanim radom, znanjem i trudom postali smo jedna od
            vodećih firmi koja se bavi klimatizacijom, grejanjem i ventilacijom. Posedujemo
            najsavremeniju opremu koja nam omogućava da kvalitetno, brzo i bezbedno obavimo posao.
          </span>
          <span>
            Dokaz našeg kvalitetnog rada su naši zadovoljni stalni klijenti koji su naša najbolja
            preporuka
          </span>
        </p>
        <Link to='/o-nama'>
          {' '}
          <button className='custom__button more-btn' type='button'>
            Detaljnije...
          </button>
        </Link>
      </div>

      <div className='o__aboutUs_img'>
        <IKImage urlEndpoint={urlEndpoint} path={images.aboutUs} />
      </div>
    </div>
  );
};

export default AboutUs;
