import {React, useEffect} from 'react'
import { images } from '../../constants'
import './aboutus.css'

import { Link, useNavigate,useLocation } from 'react-router-dom'

const AboutUs = () => {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    console.log('Trenutna ruta:', location.pathname);
  }, [location]);

  return (
    <div className='o__aboutUs  section__padding'>

        <div className='o__aboutUs_img'>
            <img src={images.aboutUs} alt="family" />
        </div>

        <div className='o__aboutUs_details'>
            <h2>O nama</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis sunt impedit cumque dignissimos rem necessitatibus. Voluptatem sequi quidem ipsum officiis, modi eum sunt ut ullam vitae, enim error blanditiis!</p>
            <Link to={'/about'}> <button className='custom__button more-btn' type='button'>Detaljnije...</button></Link>
        </div>
      

    </div>
  )
}

export default AboutUs
