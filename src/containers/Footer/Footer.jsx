import React from 'react'
import './footer.css'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className='o__footer'>
      <div className='o__footer_logo flex__center'>
        <img src={images.obodinacFooter2} alt="obodinac logo" />
      </div>

      <div className='o__footer_line'/>

      <div className='o__footer_info'>
        <div className='o__footer_info-phone info'>
            <img src={images.phoneIcon} alt='phone'/>
			<div className="o__footer_info-phone_numbers">
				<h5 className='cursor-pointer'>+38163507585</h5>
				<h5 className='cursor-pointer'>+381655075855</h5>
				<h5 className='cursor-pointer'>+381631285041</h5>
				<h5 className='cursor-pointer'>+381695075855</h5>	
			</div>
        </div>

        <div className="info" >
			<img src={images.instagramIcon} alt='instagram'/>
			<h5 className='cursor-pointer'>@obodinac_klimatizacija</h5>
		</div>

		<div className="info">
			<img src={images.emailIcon} alt='email'/>
			<h5 className='cursor-pointer'>klimatizacija.grejanje@gmail.com</h5>
		</div>

		<div className="info">
			<img src={images.homeIcon} alt='home'/>
			<h5>Braće Dronjak 17, Novi Sad</h5>
		</div>



      </div>
    </div>
  )
}

export default Footer
