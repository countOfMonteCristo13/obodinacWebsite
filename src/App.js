
import './App.css';

import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import OffersPage from './pages/OffersPage/OffersPage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdditionalPage from './pages/AdditionalPage/AdditionalPage';
import HomePage from './pages/HomePage/HomePage';

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
