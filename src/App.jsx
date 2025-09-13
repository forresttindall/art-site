import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Photography from './components/Photography';
import Writing from './components/Writing';
import Illustration from './components/Illustration';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Paperwork from './components/Projects/Paperwork';
import Biota from './components/Projects/Biota';
import GPH from './components/Projects/GPH';
import TindallKnives from './components/Projects/TindallKnives';
import './App.css';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Projects />} />
          
            <Route path="/photography" element={<Photography />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/illustration" element={<Illustration />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/paperwork" element={<Paperwork />} />
            <Route path="/biota" element={<Biota />} />
            <Route path="/gph" element={<GPH />} />
            <Route path="/tindallknives" element={<TindallKnives />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;