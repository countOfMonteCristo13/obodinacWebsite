import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Lottie from 'lottie-react';
import obodinacLoading from './assets/obodinacLoading.json'

import {HomePage,AboutUsPage,GalleryPage,ContactPage,ACInstallationPage,ServicePage,DrillingHolesPage,HeatingPage,
  VentPage,SpareACPage,FAQuestionsPage,TypePage,ACSystemPage} from './pages';
import { acTypes, serviceTypes, ventilationTypes, heatingTypes, galleryImages } from './data';
import { Footer } from './components';


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  })

  return (
    <>
      {
        isLoading && (
          <div className='flex__center loadingScreen'>
            <Lottie animationData={obodinacLoading} loop={true} autoplay={true} height={50} width={50} />
          </div>
        )
      }
      {
        !isLoading && (
          <div >

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/o-nama" element={<AboutUsPage />} />

              <Route path="/usluge/montaža-klima-uređaja" element={<ACInstallationPage />} />
              <Route path="/usluge/montaža-klima-uređaja/split-sistem" element={<ACSystemPage sistem={acTypes.splitSistem} />} />
              <Route path="/usluge/montaža-klima-uređaja/multi-sistem" element={<ACSystemPage sistem={acTypes.multiSistem} />} />
              <Route path="/usluge/montaža-klima-uređaja/centralni-sistem" element={<ACSystemPage sistem={acTypes.centralniSistem} />} />
              <Route path="/usluge/montaža-klima-uređaja/kanalski-sistem" element={<ACSystemPage sistem={acTypes.kanalskiSistem} />} />

              <Route path="/usluge/servis-klima-uređaja" element={<ServicePage />} />
              <Route path="/usluge/servis-klima-uređaja/čišćenje-klima-uređaja" element={<TypePage type={serviceTypes.ciscenjeKlime} />} />
              <Route path="/usluge/servis-klima-uređaja/popravka-elektronike" element={<TypePage type={serviceTypes.popravkaElektronike} />} />
              <Route path="/usluge/servis-klima-uređaja/freon" element={<TypePage type={serviceTypes.punjenjeDopunaFreona} />} />
              <Route path="/usluge/servis-klima-uređaja/zamena-kondezatora" element={<TypePage type={serviceTypes.zamenaKondezatora} />} />

              <Route path="/usluge/polovni-klima-uređaji" element={<SpareACPage />} />

              <Route path="/usluge/grejanje" element={<HeatingPage />} />
              <Route path="/usluge/grejanje/radijatorsko-grejanje" element={<TypePage type={heatingTypes.radijatorskoGrejanje} />} />
              <Route path="/usluge/grejanje/podno-grejanje" element={<TypePage type={heatingTypes.podnoGrejanje} />} />

              <Route path="/usluge/ventilacija" element={<VentPage />} />
              <Route path="/usluge/ventilacija/mehanička-ventilacija" element={<TypePage type={ventilationTypes.mehaničkaVentilacija} />} />
              <Route path="/usluge/ventilacija/rekuperatorska-ventilacija" element={<TypePage type={ventilationTypes.rekuperatorskaVentilacija} />} />


              <Route path="/usluge/dijamantsko-bušenje-rupa" element={<DrillingHolesPage />} />

              <Route path="/galerija/montaža-klima-uređaja" element={<GalleryPage gImages={galleryImages.klimatizacija.Sve} title='Montaža klima uređaja' />} />
              <Route path="/galerija/servis-klima-uređaja" element={<GalleryPage gImages={galleryImages.servisKlimaImages} title='Servis klima uređaja' />} />
              <Route path="/galerija/polovni-klima-uređaji" element={<GalleryPage gImages={galleryImages.klimatizacija.Sve} title='Polovni klima uređaji' />} />
              <Route path="/galerija/grejanje" element={<GalleryPage gImages={galleryImages.grejanje.Sve} title='Grejanje' />} />
              <Route path="/galerija/ventilacija" element={<GalleryPage gImages={galleryImages.ventilacija.Sve} title='Ventilacija' />} />
              <Route path="/galerija/dijamantsko-bušenje-rupa" element={<GalleryPage gImages={galleryImages.kernovanjeImages} title={'Dijamantsko bušenje rupa'} />} />

              <Route path="/najčešća-pitanja" element={<FAQuestionsPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
            </Routes>
            <Footer/>

          </div>
        )
      }
    </>
  );
}

export default App;
