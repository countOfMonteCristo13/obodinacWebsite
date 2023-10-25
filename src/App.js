
import React, { useEffect, useState } from 'react';
import './App.css';

import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import obodinacLoading from './assets/obodinacLoading.json'

import Lottie from 'lottie-react';
import MontazaPage from './pages/MontazaPage/MontazaPage';
import KlimatizacioniSistem from './pages/MontazaPage/KlimatizacioniSistem/KlimatizacioniSistem';
import { acTypes,serviceTypes,ventilationTypes,heatingTypes,galleryImages } from './data';
import ServisPage from './pages/ServisPage/ServisPage';
import KernovanjePage from './pages/KernovanjePage/KernovanjePage';
import GrejanjePage from './pages/GrejanjePage/GrejanjePage';
import VentilacijaPage from './pages/VentilacijaPage/VentilacijaPage';
import PolovneKlimePage from './pages/PolovneKlimePage/PolovneKlimePage';
import NajcescaPitanjaPage from './pages/NajcescaPitanjaPage/NajcescaPitanjaPage';
import TypePage from './pages/TypePage/TypePage';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => setIsLoading(false),2000);
  })

  return (
    <>
    {
      isLoading && (
      <div className='flex__center loadingScreen'>
        <Lottie animationData={obodinacLoading} loop={true} autoplay={true} height={50} width={50}/>
      </div>
      )
    }
    {
      !isLoading && (
        <div >
              <Router>
                <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/o-nama" element={<AboutUsPage/>} />

                  <Route path="/usluge/montaža-klima-uređaja" element={<MontazaPage/>} />
                  <Route path="/usluge/montaža-klima-uređaja/split-sistem" element={<KlimatizacioniSistem sistem={acTypes.splitSistem}/>} />
                  <Route path="/usluge/montaža-klima-uređaja/multi-sistem" element={<KlimatizacioniSistem sistem={acTypes.multiSistem}/>} />
                  <Route path="/usluge/montaža-klima-uređaja/centralni-sistem" element={<KlimatizacioniSistem sistem={acTypes.centralniSistem}/>} />
                  <Route path="/usluge/montaža-klima-uređaja/kanalski-sistem" element={<KlimatizacioniSistem sistem={acTypes.kanalskiSistem}/>} />
                  
                  <Route path="/usluge/servis-klima-uređaja" element={<ServisPage/>} />
                  <Route path="/usluge/servis-klima-uređaja/čišćenje-klima-uređaja" element={<TypePage type={serviceTypes.ciscenjeKlime}/>} />
                  <Route path="/usluge/servis-klima-uređaja/popravka-elektronike" element={<TypePage type={serviceTypes.popravkaElektronike}/>} />
                  <Route path="/usluge/servis-klima-uređaja/freon" element={<TypePage type={serviceTypes.punjenjeDopunaFreona}/>} />
                  <Route path="/usluge/servis-klima-uređaja/zamena-kondezatora" element={<TypePage type={serviceTypes.zamenaKondezatora}/>} />
                  
                  <Route path="/usluge/polovni-klima-uređaji" element={<PolovneKlimePage/>} />

                  <Route path="/usluge/grejanje" element={<GrejanjePage/>} />
                  <Route path="/usluge/grejanje/radijatorsko-grejanje" element={<TypePage type={heatingTypes.radijatorskoGrejanje}/>} />
                  <Route path="/usluge/grejanje/podno-grejanje" element={<TypePage type={heatingTypes.podnoGrejanje}/>} />
                  
                  <Route path="/usluge/ventilacija" element={<VentilacijaPage/>} />
                  <Route path="/usluge/ventilacija/mehanička-ventilacija" element={<TypePage type={ventilationTypes.mehaničkaVentilacija}/>}/>
                  <Route path="/usluge/ventilacija/rekuperatorska-ventilacija" element={<TypePage type={ventilationTypes.rekuperatorskaVentilacija}/>} />


                  <Route path="/usluge/dijamantsko-bušenje-rupa" element={<KernovanjePage/>} />
                  
                  <Route path="/galerija/montaža-klima-uređaja" element={<GalleryPage gImages={galleryImages.klimatizacija.Sve} title='Montaža klima uređaja'/>} />
                  <Route path="/galerija/servis-klima-uređaja" element={<GalleryPage gImages={galleryImages.servisKlimaImages} title='Servis klima uređaja'/>} />
                  <Route path="/galerija/polovni-klima-uređaji" element={<GalleryPage gImages={galleryImages.klimatizacija.Sve} title='Polovni klima uređaji'/>} />
                  <Route path="/galerija/grejanje" element={<GalleryPage gImages={galleryImages.grejanje.Sve} title='Grejanje'/>} />
                  <Route path="/galerija/ventilacija" element={<GalleryPage gImages={galleryImages.ventilacija.Sve} title='Ventilacija'/>} />
                  <Route path="/galerija/dijamantsko-bušenje-rupa" element={<GalleryPage gImages={galleryImages.kernovanjeImages} title={'Dijamantsko bušenje rupa'}/>} />

                  <Route path="/najčešća-pitanja" element={<NajcescaPitanjaPage/>} />
                  <Route path="/kontakt" element={<ContactPage/>} />
                </Routes>
              </Router>
        </div>
      )
    }
    </>
  );
}

export default App;
