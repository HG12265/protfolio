import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load sections below the fold for better performance
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-400">
      <CustomCursor />

      <Navbar />
      
      <main>
        <Hero />
        <React.Suspense fallback={<div className="h-20 bg-slate-950" />}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </React.Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
