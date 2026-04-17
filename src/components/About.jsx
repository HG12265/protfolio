import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Brain, Zap, Users, Lightbulb } from 'lucide-react';

const highlightTags = [
  { name: "Frontend", icon: Laptop },
  { name: "AI Enthusiast", icon: Brain },
  { name: "Problem Solving", icon: Zap },
  { name: "Teamwork", icon: Users }
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Professional Bridge from Home to About */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="section-divider"
      >
        <div className="divider-badge text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 whitespace-nowrap">
          <div className="divider-dot" />
          The Digital Artisan
          <div className="divider-dot" />
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />
      {/* Background Ambient Glows - Matching site palette */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative glass-panel p-6 md:p-12 border-white/5 bg-white/[0.01] backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.3)] grid lg:grid-cols-[40%_1fr] gap-10 md:gap-12 items-center rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
        >
          {/* LEFT SIDE: Image Component - MIRRORING HERO STYLE */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-start items-center"
          >
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
                    alt="About Gowtham"
                    className="w-full h-full object-cover"
                    style={{ transition: 'transform 1s ease' }}
                    loading="lazy"
                    decoding="async"
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

          {/* RIGHT SIDE: Content Section */}
          <div className="flex flex-col gap-8 md:gap-10" style={{ padding: '15px' }}>
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 text-white">
                About <span className="gradient-text">Me</span>
              </h2>
            </motion.div>

            {/* Bullet Points */}
            <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.8)] flex-shrink-0" />
                <p className="text-slate-200 text-base md:text-xl font-medium">
                  Passionate <span className="text-white font-bold">Computer Science student</span>
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.8)] flex-shrink-0" />
                <p className="text-slate-200 text-base md:text-xl font-medium">
                  Love building <span className="text-cyan-400 font-bold">modern</span> web applications
                </p>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.8)] flex-shrink-0" />
                <p className="text-slate-200 text-base md:text-xl font-medium line-height-tight">
                  Expertise in <span className="text-purple-400 font-bold">AI & Full-stack</span>
                </p>
              </div>
            </motion.div>

            {/* Paragraph with inline highlights */}
            <motion.p variants={itemVariants} className="text-slate-400 text-base md:text-xl leading-relaxed max-w-xl">
              Focused on <span className="text-cyan-400 font-bold">Web Development</span> and <span className="text-purple-400 font-bold">AI</span>. I turn complex problems into elegant digital solutions.
            </motion.p>

            {/* The Goal Card - Enhanced for mobile */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 md:p-8"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)]" />
              <div className="flex gap-5 items-start">
                <div className="mt-1 p-2 bg-cyan-400/10 rounded-lg">
                  <Lightbulb className="text-cyan-400" size={24} />
                </div>
                <p className="text-slate-200 text-base md:text-xl font-semibold italic leading-relaxed">
                  "My goal is to create impactful digital solutions solving real-world problems."
                </p>
              </div>
            </motion.div>

            {/* Skill Tags - Fixed wrapping for mobile */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 md:gap-4 pt-4" style={{ marginBottom: '20px' }}
            >
              {highlightTags.map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 text-[13px] md:text-sm font-bold hover:bg-white/10 transition-all" style={{ padding: '5px' }}
                >
                  <tag.icon size={16} className="text-cyan-500" />
                  {tag.name}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
