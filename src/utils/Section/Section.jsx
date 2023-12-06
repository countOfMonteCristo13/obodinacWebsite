import React from 'react';
import './section.css';
import { IKImage } from 'imagekitio-react';

import { Link } from 'react-router-dom';

const urlEndpoint = 'https://ik.imagekit.io/montecristo/';

const Section = ({ title, description, image, alt, odd, route }) => {
  return (
    <div className='o__section  section__padding' id={odd}>
      <div className='o__section_img'>
        <IKImage urlEndpoint={urlEndpoint} path={image} />
      </div>

      <div className='o__section_details'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={route}>
          <button className='custom__button more-btn' type='button'>
            Detaljnije...
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section;
