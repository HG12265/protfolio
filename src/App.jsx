import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load sections below the fold for better performance
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-400">
      {/* Custom Cursor Glow */}
      <div 
        id="cursor-glow" 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div 
        className="cursor-dot" 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

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
