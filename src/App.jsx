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
import ComputerScience from './components/Projects/ComputerScience';
import Biography from './components/Biography';
import Craftwork from './components/Projects/Craftwork';
import MountainHome from './components/Projects/mountainhome';
import GraphicDesign from './components/GraphicDesign';
import LiminalSpaces from './components/Projects/liminalspaces';
import WebDesign from './components/WebDesign';
import Footer from './components/Footer';
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
            <Route path="/biography" element={<Biography />} />
            <Route path="/computerscience" element={<ComputerScience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/paperwork" element={<Paperwork />} />
            <Route path="/biota" element={<Biota />} />
            <Route path="/gph" element={<GPH />} />
            <Route path="/tindallknives" element={<TindallKnives />} />
            <Route path="/craftwork" element={<Craftwork />} />
            <Route path="/mountainhome" element={<MountainHome />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="/liminalspaces" element={<LiminalSpaces />} />
            <Route path="/webdesign" element={<WebDesign />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;