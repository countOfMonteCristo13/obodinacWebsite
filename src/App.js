
import React, { useEffect, useState } from 'react';
import './App.css';

import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import OffersPage from './pages/OffersPage/OffersPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdditionalPage from './pages/AdditionalPage/AdditionalPage';
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import obodinacLoading from './assets/obodinacLoading.json'

import Lottie from 'lottie-react';
import MontazaPage from './pages/MontazaPage/MontazaPage';
import KlimatizacioniSistem from './pages/MontazaPage/KlimatizacioniSistem/KlimatizacioniSistem';
import { klimatizacioniSistemi } from './constants/klimatizacioniSistemi';
import ServisPage from './pages/ServisPage/ServisPage';
import KernovanjePage from './pages/KernovanjePage/KernovanjePage';
import GrejanjePage from './pages/GrejanjePage/GrejanjePage';
import VentilacijaPage from './pages/VentilacijaPage/VentilacijaPage';
import PolovneKlimePage from './pages/PolovneKlimePage/PolovneKlimePage';


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

                  <Route path="/usluge/montaza-klima-uredjaja" element={<MontazaPage/>} />
                  <Route path="/usluge/montaza-klima-uredjaja/split-sistem" element={<KlimatizacioniSistem sistem={klimatizacioniSistemi.splitSistem}/>} />
                  <Route path="/usluge/montaza-klima-uredjaja/multi-sistem" element={<KlimatizacioniSistem sistem={klimatizacioniSistemi.multiSistem}/>} />
                  <Route path="/usluge/montaza-klima-uredjaja/centralni-sistem" element={<KlimatizacioniSistem sistem={klimatizacioniSistemi.centralniSistem}/>} />
                  <Route path="/usluge/montaza-klima-uredjaja/kanalski-sistem" element={<KlimatizacioniSistem sistem={klimatizacioniSistemi.kanalskiSistem}/>} />
                  
                  <Route path="/usluge/servis-klima-uredjaja" element={<ServisPage/>} />
                  <Route path="/usluge/servis-klima-uredjaja/ciscenje-klime" element={<ServisPage/>} />
                  <Route path="/usluge/servis-klima-uredjaja/popravka-elektronike" element={<ServisPage/>} />
                  <Route path="/usluge/servis-klima-uredjaja/freon" element={<ServisPage/>} />
                  <Route path="/usluge/servis-klima-uredjaja/zamena-kondezatora" element={<ServisPage/>} />
                  
                  <Route path="/usluge/polovni-klima-uredjaji" element={<PolovneKlimePage/>} />
                  
                  <Route path="/usluge/dijamantsko-busenje-rupa" element={<KernovanjePage/>} />
                  <Route path="/usluge/ventilacija" element={<VentilacijaPage/>} />
                  <Route path="/usluge/grejanje" element={<GrejanjePage/>} />
                  
                  <Route path="/galerija" element={<AdditionalPage/>} />
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
