import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Brain, Zap, Users, Lightbulb, GraduationCap, FileText, Download, X } from 'lucide-react';

const highlightTags = [
  { name: "Frontend", icon: Laptop },
  { name: "AI Enthusiast", icon: Brain },
  { name: "Problem Solving", icon: Zap },
  { name: "Teamwork", icon: Users }
];

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Periyar University",
    duration: "2025 - 2027",
    score: "8.5 CGPA (Upto 2nd Semester)",
    status: "Currently Pursuing"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "AVS Arts and Science College",
    duration: "2022 - 2025",
    score: "8.6 CGPA",
    status: "Completed"
  }
];

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-[#0b1024] rounded-3xl border border-white/10 shadow-2xl overflow-hidden" style={{ padding: '8px' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <FileText className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Resume Preview</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Resume Content */}
            <div className="p-0 overflow-hidden h-[75vh] relative bg-white">
              <iframe
                src="/resume.pdf#toolbar=0"
                className="w-full h-full border-none"
                title="Resume Preview"
              >
                <div className="flex flex-col items-center justify-center h-full gap-4 p-10 text-center bg-[#0b1024]">
                  <FileText className="text-cyan-400/20" size={60} />
                  <p className="text-slate-400">
                    Your browser doesn't support PDF previews.<br />
                    Please download the resume to view it.
                  </p>
                </div>
              </iframe>

              {/* Subtle overlay to prevent interaction with iframe toolbar if needed, though #toolbar=0 helps */}
              <div className="absolute inset-0 pointer-events-none border-[12px] border-[#0b1024] " />
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 flex justify-end gap-4 ">
              <button onClick={onClose} className="px-6 py-2.5 rounded-xl font-bold text-slate-400 hover:text-white transition-colors">
                Close
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all" style={{ padding: '5px' }}
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const About = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
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
              className="flex flex-wrap gap-3 md:gap-4 pt-4"
            >
              {highlightTags.map((tag, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 text-[13px] md:text-sm font-bold hover:bg-white/10 transition-all"
                >
                  <tag.icon size={16} className="text-cyan-500" />
                  {tag.name}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education Section - Full width at bottom of grid on mobile, or bottom-right area */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 mt-12 pt-12 border-t border-white/5"
          >
            <div className="flex flex-col items-center justify-center gap-4 mb-10 text-center">
              <div className="p-3 bg-purple-500/10 rounded-2xl">
                <GraduationCap className="text-purple-400" size={28} />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white">Academic <span className="text-purple-400">Journey</span></h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6" >
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300" style={{ padding: '15px', marginTop: '15px' }}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                        {edu.duration}
                      </span>
                      {edu.status === "Currently Pursuing" && (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          {edu.status}
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-sm text-slate-500 italic">Score</span>
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resume CTA Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 mt-16 p-8 rounded-[1rem] bg-gradient-to-br from-cyan-400/5 to-purple-400/5 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group" style={{ padding: '15px' }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-400/20 transition-all duration-700" />

            <div className="flex flex-col gap-2 text-center md:text-left" >
              <h3 className="text-2xl font-bold text-white">Wanna see my full profile?</h3>
              <p className="text-slate-400 font-medium">Download or view my professional resume for detailed expertise.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-white flex items-center gap-2 transition-all hover:-translate-y-1 active:scale-95" style={{ padding: '7px' }}
              >
                <FileText size={20} className="text-cyan-400" />
                View Resume
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl font-bold text-white shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-all hover:-translate-y-1 hover:shadow-cyan-500/40 active:scale-95" style={{ padding: '7px' }}
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};

export default About;
