import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home.jsx';
import IntroPage from './components/intro.jsx';
import AboutUs from './components/aboutus.jsx';
import OurServices from './components/ourservices.jsx';
import OurProj from './components/ourpoj.jsx';
import ContactUs from './components/contact-us.jsx';
import FAQPage from './components/faq.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/projects" element={<OurProj />} />
        <Route path="/portfolio" element={<FAQPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
