import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import TataSteel from './TataSteel';
import ProductSegments from './ProductSegments';
import About from './About';
import Contact from './Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function AppContent() {
  const location = useLocation();
  const hideOnRoutes = ['/', '/signup'];
  const shouldHide = hideOnRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!shouldHide && <Navbar />}

      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/tatasteel" element={<TataSteel />} />
        <Route path="/segments" element={<ProductSegments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!shouldHide && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
