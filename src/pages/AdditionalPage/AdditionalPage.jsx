import React from 'react'
import './additionalpage.css'
import { images } from '../../constants'
import NavbarSection from '../../components/NavbarSection/NavbarSection'

const AdditionalPage = () => {
  return (
    <div>
        <NavbarSection image={images.maintenanceWhite} imageLogo={images.obodinacFooter2}/>
      
    </div>
  )
}

export default AdditionalPage
