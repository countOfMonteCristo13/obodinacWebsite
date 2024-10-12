import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  AboutUsPage,
  GalleryPage,
  ContactPage,
  ACInstallationPage,
  ServicePage,
  DrillingHolesPage,
  HeatingPage,
  VentPage,
  SpareACPage,
  FAQuestionsPage,
  TypePage,
  ACSystemPage,
} from './pages';
import galleryImages from './data/GalleryImages/galleryImages';
import { acTypes } from './pages/TypePage/Types/acTypes';
import { ventilationTypes } from './pages/TypePage/Types/ventilationTypes';
import { heatingTypes } from './pages/TypePage/Types/heatingTypes';
import { serviceTypes } from './pages/TypePage/Types/serviceTypes';
import { Footer, Header } from './components';
import { BlueLine, ScrollUp } from './utils';
import Loader from './utils/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  return (
    <>
      {isLoading && (
        <div className='flex__center loadingScreen'>
          <Loader width={192} height={192} border={8} />
        </div>
      )}
      {!isLoading && (
        <>
          <ScrollUp />
          <Header/>
          <BlueLine isHidden={true}/>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/o-nama' element={<AboutUsPage />} />
              {/* <Route path="/usluge">
              <div>

              </div>
            </Route> */}
              {/* <Route path='/usluge/:uslugeType' element={<ACInstallationPage />} /> */}
              <Route path='/usluge/montaža-klima-uređaja' element={<ACInstallationPage />} />
              <Route
                path='/usluge/montaža-klima-uređaja/split-sistem'
                element={<ACSystemPage sistem={acTypes.splitSistem} />}
              />
              <Route
                path='/usluge/montaža-klima-uređaja/multi-sistem'
                element={<ACSystemPage sistem={acTypes.multiSistem} />}
              />
              <Route
                path='/usluge/montaža-klima-uređaja/centralni-sistem'
                element={<ACSystemPage sistem={acTypes.centralniSistem} />}
              />
              <Route
                path='/usluge/montaža-klima-uređaja/kanalski-sistem'
                element={<ACSystemPage sistem={acTypes.kanalskiSistem} />}
              />

              <Route path='/usluge/servis-klima-uređaja' element={<ServicePage />} />
              <Route
                path='/usluge/servis-klima-uređaja/čišćenje-klima-uređaja'
                element={<TypePage type={serviceTypes.ciscenjeKlime} />}
              />
              <Route
                path='/usluge/servis-klima-uređaja/popravka-elektronike'
                element={<TypePage type={serviceTypes.popravkaElektronike} />}
              />
              <Route
                path='/usluge/servis-klima-uređaja/freon'
                element={<TypePage type={serviceTypes.punjenjeDopunaFreona} />}
              />
              <Route
                path='/usluge/servis-klima-uređaja/zamena-kondezatora'
                element={<TypePage type={serviceTypes.zamenaKondezatora} />}
              />

              <Route path='/usluge/polovni-klima-uređaji' element={<SpareACPage />} />

              <Route path='/usluge/grejanje' element={<HeatingPage />} />
              <Route
                path='/usluge/grejanje/radijatorsko-grejanje'
                element={<TypePage type={heatingTypes.radijatorskoGrejanje} />}
              />
              <Route
                path='/usluge/grejanje/podno-grejanje'
                element={<TypePage type={heatingTypes.podnoGrejanje} />}
              />

              <Route path='/usluge/ventilacija' element={<VentPage />} />
              <Route
                path='/usluge/ventilacija/mehanička-ventilacija'
                element={<TypePage type={ventilationTypes.mehaničkaVentilacija} />}
              />
              <Route
                path='/usluge/ventilacija/rekuperatorska-ventilacija'
                element={<TypePage type={ventilationTypes.rekuperatorskaVentilacija} />}
              />

              <Route path='/usluge/dijamantsko-bušenje-rupa' element={<DrillingHolesPage />} />

              <Route
                path='/galerija/montaža-klima-uređaja'
                element={
                  <GalleryPage
                    gImages={galleryImages.klimatizacija}
                    title='Montaža klima uređaja'
                  />
                }
              />
              <Route
                path='/galerija/servis-klima-uređaja'
                element={
                  <GalleryPage
                    gImages={galleryImages.servisKlimaImages}
                    title='Servis klima uređaja'
                  />
                }
              />
              <Route
                path='/galerija/grejanje'
                element={<GalleryPage gImages={galleryImages.grejanje} title='Grejanje' />}
              />
              <Route
                path='/galerija/ventilacija'
                element={<GalleryPage gImages={galleryImages.ventilacija} title='Ventilacija' />}
              />
              <Route
                path='/galerija/dijamantsko-bušenje-rupa'
                element={
                  <GalleryPage
                    gImages={galleryImages.kernovanjeImages}
                    title='Dijamantsko bušenje rupa'
                  />
                }
              />

              <Route path='/najčešća-pitanja' element={<FAQuestionsPage />} />
              <Route path='/kontakt' element={<ContactPage />} />
            </Routes>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
