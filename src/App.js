import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import ImpactStories from './pages/ImpactStories';
import GetInvolved from './pages/GetInvolved';
import MedicalCamps from './pages/MedicalCamps';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/stories" element={<ImpactStories />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/medical-camps" element={<MedicalCamps />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
