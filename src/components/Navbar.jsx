import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-white/5 py-4' : 'py-6 bg-transparent'}`}>
      <div className="container flex justify-between items-center px-6 lg:px-10">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter relative z-[101]"
        >
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <span className="relative z-10 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center justify-center rounded-[14px] lg:rounded-2xl text-lg lg:text-xl font-black group-hover:rotate-[15deg] transition-all duration-500 shadow-2xl border border-white/10 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-20 group-hover:text-cyan-400 transition-colors duration-500">G</span>

                {/* Decorative element inside the logo box */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-500/20 blur-sm rounded-full group-hover:bg-cyan-400/40 transition-all duration-500" />
              </span>

              {/* Outer Glows */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[14px] lg:rounded-2xl opacity-20 blur-sm group-hover:opacity-40 group-hover:blur-md transition-all duration-500" />
              <div className="absolute -inset-2 bg-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700" />
            </div>
            <span className="text-lg lg:text-2xl tracking-[0.1em] text-white whitespace-nowrap">GOWTHAM</span>
          </a>
        </motion.div>

        {/* Desktop Links Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:flex items-center gap-10"
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-slate-400 hover:text-cyan-400 transition-all duration-300 relative group uppercase tracking-widest"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </motion.div>

        {/* Desktop Hire Me */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <a href="#contact" className="group relative px-12 py-3.5 flex items-center gap-2 overflow-hidden rounded-full border-2 border-cyan-500/30 bg-slate-950 transition-all hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:scale-105 active:scale-95">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent group-hover:animate-[shine_2s_infinite]" />
            <span className="relative text-xs font-black uppercase tracking-[0.2em] text-white">Hire Me</span>
            <span className="relative text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </a>
        </motion.div>

        {/* Mobile Menu Toggle Icon */}
        <div className="lg:hidden relative z-[101] flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none flex items-center"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="lg:hidden fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-6 mt-16">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black text-slate-300 hover:text-cyan-400 transition-all uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative mt-6 px-12 py-4 rounded-full border border-cyan-500/50 bg-slate-900 overflow-hidden transition-all active:scale-95 flex items-center gap-3"
            >
              {/* Animated Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:animate-[shine_2s_infinite]" />

              <span className="relative text-cyan-400 font-black uppercase tracking-[0.2em] text-sm">
                Hire Me
              </span>
              <span className="relative text-cyan-400 group-active:translate-x-2 transition-transform duration-300">→</span>

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-20 bg-cyan-400 blur-md transition-opacity" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
