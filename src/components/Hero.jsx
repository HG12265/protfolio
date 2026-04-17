import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const RotatingRoles = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index];
      const speed = isDeleting ? 50 : 100;

      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, roles]);

  return (
    <span className="text-cyan-400 code-text font-bold">
      {displayedText}
      <span className="typing-cursor"></span>
    </span>
  );
};

const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background Glow Clusters */}
      <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />

      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          className="star absolute bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const roles = [
    "Computer Science Student",
    "Web Developer",
    "AI Enthusiast"
  ];

  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingTop: '60px', boxSizing: 'border-box' }}>
      <StarField />

      <div className="container px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-semibold mb-2 text-slate-400 uppercase tracking-[0.3em]"
          >
            Hi, I'm <span className="text-cyan-400">Gowtham</span>
          </motion.h2>

          <div className="text-4xl md:text-7xl font-extrabold mb-8 min-h-[1.2em] flex items-center tracking-tighter leading-tight text-white drop-shadow-2xl">
            <RotatingRoles roles={roles} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-medium"
          >
            I build modern, responsive and intelligent web applications.<br />
            Passionate about solving real-world problems using technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2 group">
              🚀 View My Work
            </a>
            <a href="#contact" className="btn-outline">
              📩 Contact Me
            </a>
          </motion.div>
          <br></br>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-12 mt-20"
          >
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-slate-300 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-3 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              >
                <Icon size={32} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Image - NEW PREMIUM DESIGN */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative flex justify-center lg:justify-end items-center"
        >
          {/* Subtle Ambient Glow Behind Image */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '400px', height: '400px', background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)',
              filter: 'blur(100px)', opacity: 0.12, zIndex: -1
            }}
          />

          {/* Floating Container */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[320px] md:max-w-[420px] h-[380px] md:h-[480px]"
          >
            {/* Soft Glow Border Effect */}
            <div
              className="absolute inset-0 rounded-[20px]"
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #8a2be2)',
                filter: 'blur(20px)', opacity: 0.45, padding: '6px'
              }}
            />

            {/* Inner Image Container */}
            <div
              className="absolute inset-0 bg-[#0b0f1a] overflow-hidden"
              style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', padding: '6px' }}
            >
              <div
                className="relative w-full h-full overflow-hidden"
                style={{ borderRadius: '18px' }}
              >
                <img
                  src="/hero_avatar.png"
                  alt="Gowtham Portrait"
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 1s ease' }}
                />

                {/* Subtle Gradient Overlay on Image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                    zIndex: 2
                  }}
                />
              </div>
            </div>


          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
