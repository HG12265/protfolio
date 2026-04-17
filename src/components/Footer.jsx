import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Mail, Heart, Sparkles, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#050810', paddingTop: '3rem', paddingBottom: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Top Border Glow */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '50%', height: '1px', background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '25%', height: '40px', background: '#00f0ff', filter: 'blur(50px)', opacity: 0.15, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>

        {/* Main Footer Layout */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5rem', justifyContent: 'space-between', marginBottom: '2rem' }}>

          {/* Brand & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ flex: '1 1 300px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #00f0ff, #9d00ff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code2 size={18} color="white" />
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white', letterSpacing: '0.05em', margin: 0 }}>
                GOWTHAM<span style={{ color: '#00f0ff' }}>.</span>
              </h2>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.5, fontSize: '0.9rem', maxWidth: '300px', margin: 0 }}>
              Crafting premium digital experiences through seamless code and elegant design. Building the web of tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ flex: '1 1 150px' }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'white', margin: '0 0 0.5rem 0' }}>Explore</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group"
                    style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#00f0ff'; e.currentTarget.style.transform = 'translateX(5px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span
                      style={{ fontSize: '0.7rem', opacity: 0, transform: 'translateX(-10px)', transition: 'all 0.3s' }}
                      className="group-hover:opacity-100 group-hover:translate-x-0"
                    >
                      <Sparkles size={10} />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ flex: '1 1 250px' }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'white', margin: '0 0 1rem 0' }}>Connect</h3>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { icon: FaGithub, link: 'https://github.com/hg12265', color: '#a78bfa' },
                { icon: FaLinkedin, link: 'https://linkedin.com/', color: '#60a5fa' },
                { icon: Mail, link: 'mailto:gowtham114411@email.com', color: '#00f0ff' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative transition-all duration-300"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 15px ${social.color}` }} />
                  <social.icon size={16} style={{ position: 'relative', zIndex: 2 }} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group transition-all duration-300"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '10px 20px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px', color: '#fff', cursor: 'pointer', outline: 'none', width: 'fit-content' }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#00f0ff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Back to Top</span>
              <div
                className="transition-transform duration-300 group-hover:-translate-y-1"
                style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#00f0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}
              >
                <ChevronUp size={14} strokeWidth={3} />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'
          }}
        >
          <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
            © {currentYear} <span style={{ color: 'white', fontWeight: 600 }}>Gowtham</span>. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
            Built with <Heart size={14} color="#ef4444" fill="#ef4444" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} /> using React
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
