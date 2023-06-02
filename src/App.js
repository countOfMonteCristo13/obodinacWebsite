
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
                  <Route path="/about" element={<AboutUsPage/>} />
                  <Route path="/gallery" element={<GalleryPage/>} />
                  <Route path="/contact" element={<ContactPage/>} />
                  <Route path="/offers" element={<OffersPage/>} />
                  <Route path="/addoffers" element={<AdditionalPage/>} />
                </Routes>
              </Router>
        </div>
      )
    }
    </>
  );
}

export default App;
