import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Homepage from './components/Homepage';
import Photography from './components/Photography';
import Writing from './components/Writing';
import Illustration from './components/Illustration';
import Projects from './components/Projects';
import Biography from './components/Biography';
import Contact from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'projects':
        return <Projects />;
      case 'photography':
        return <Photography />;
      case 'writing':
        return <Writing />;
      case 'illustration':
        return <Illustration />;
      case 'biography':
        return <Biography />;
      case 'contact':
        return <Contact />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}