import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Globe, Cpu, Database, Layers, Zap, Shield, ChevronRight } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiGooglegemini } from 'react-icons/si';

const projects = [
  {
    id: 1,
    name: "LifeDrop",
    nameHighlight: "AI",
    tagline: "AI-powered blood donation platform",
    description:
      "HealthTech platform enabling emergency blood donation through AI-powered search, geo-aware donor matching, and a blockchain audit trail.",
    highlights: [
      "AI-powered search for compatible blood donors",
      "Geo-aware matching of donors based on location",
      "Secure audit trail using blockchain technology",
      "Multi-language UX (Tamil + English) + PWA + Android",
    ],
    techStack: [
      { label: "React", icon: FaReact },
      { label: "Node.js", icon: FaNodeJs },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Gemini AI", icon: SiGooglegemini },
    ],
    github: "https://github.com/HG12265/LifeDrop-AI.git",
    live: "https://life-drop-ai.vercel.app",
    accentColor: "#60a5fa",
  },
  {
    id: 2,
    name: "ProDoc",
    nameHighlight: "AI",
    tagline: "AI academic report generator suite",
    description:
      "Paste your GitHub repo link or upload a ZIP — ProDoc AI auto-generates a complete, professionally formatted academic project report in seconds.",
    highlights: [
      "Dual AI: Groq for text, Gemini for diagrams",
      "10+ structured academic report sections",
      "AI-generated DFD, Use Case & Sequence diagrams",
      "Professional A4 DOCX output with formatting",
    ],
    techStack: [
      { label: "Python", icon: FaPython },
      { label: "Flask", icon: Cpu },
      { label: "Groq API", icon: Zap },
      { label: "Gemini AI", icon: SiGooglegemini },
    ],
    github: "https://github.com/HG12265/AI-DOC-CREATER.git",
    live: "https://ai-doc-creater.onrender.com/",
    accentColor: "#a78bfa",
  },
  {
    id: 3,
    name: "Aagama",
    nameHighlight: "Vedham",
    tagline: "Traditional service booking platform",
    description:
      "A full-stack spiritual service booking platform that digitalizes the traditional homam/pooja booking process — from discovery to admin ops and email automation.",
    highlights: [
      "JWT auth with role-based access (Admin vs User)",
      "Full booking lifecycle with email notifications",
      "Admin dashboard with real-time status updates",
      "Responsive multi-page UI with React Router",
    ],
    techStack: [
      { label: "React", icon: FaReact },
      { label: "Express", icon: SiExpress },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Nodemailer", icon: Globe },
    ],
    github: "https://github.com/HG12265/Aagama-Vedham.git",
    live: "https://aagama-vedham.vercel.app",
    accentColor: "#34d399",
  },
  {
    id: 4,
    name: "Admission",
    nameHighlight: "Portal",
    tagline: "Full-stack admission workflow app",
    description: "A comprehensive digital platform to streamline the manual college admission process. Features complete applicant tracking, draft saving features, auto payment simulation, and admin approvals.",
    highlights: [
      "Application lifecycle mapping (apply, draft, submit, track)",
      "Role-based dual dashboards for students and administrators",
      "Automated PDF application summaries and CSV institutional exports",
      "Full authentication loop with applicant profiles and workflows",
    ],
    techStack: [
      { label: "Python", icon: FaPython },
      { label: "Flask", icon: Cpu },
      { label: "SQLite", icon: Database },
      { label: "Bootstrap", icon: Layers },
    ],
    github: "https://github.com/HG12265/admission-portal.git",
    live: "https://admission-portal-project.onrender.com",
    accentColor: "#f59e0b",
  },
  {
    id: 5,
    name: "Max Fitness",
    nameHighlight: "Studio",
    tagline: "AI-assisted gym management system",
    description: "A centralized portal combining client self-service with gym administration. Features AI-powered personalized diet and workout generation utilizing Gemini with robust fallback mechanisms.",
    highlights: [
      "Role-based secure portal for gym administrators and clients",
      "AI-driven workout generation via Gemini with graceful caching",
      "Domain-restricted gym chatbot explicitly bounded to fitness queries",
      "Automated welcome email sequences with multi-provider fallbacks",
    ],
    techStack: [
      { label: "React", icon: FaReact },
      { label: "Express", icon: SiExpress },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Gemini AI", icon: SiGooglegemini },
    ],
    github: "https://github.com/HG12265/Max-Fitness-Studio.git",
    live: "https://max-fitness-studio.vercel.app",
    accentColor: "#ef4444",
  },
  {
    id: 6,
    name: "Cine",
    nameHighlight: "Book",
    tagline: "Online ticket & payment suite",
    description: "An end-to-end movie ticketing web platform bridging movie discovery, live seat map validation, snacks selection, and Stripe checkout into one seamless online transaction flow.",
    highlights: [
      "Live interactive seat-map architecture with tiered pricing structures",
      "Robust Stripe checkout gateway integration for secure payments",
      "Automated booking confirmation emails featuring verifiable PDF tickets",
      "Comprehensive admin panel to handle screens, showtimes & users",
    ],
    techStack: [
      { label: "Python", icon: FaPython },
      { label: "Flask", icon: Cpu },
      { label: "SQLite", icon: Database },
      { label: "Stripe APIs", icon: Shield },
    ],
    github: "https://github.com/HG12265/Cinebook.git",
    live: "https://cinebook.onrender.com",
    accentColor: "#ec4899",
  }
];

const TechPill = ({ label, icon: Icon }) => (
  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/5 border border-white/10 text-slate-300">
    <Icon size={11} className="opacity-70" />
    {label}
  </span>
);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Stars background dots */}
      <div className="absolute inset-0 -z-10">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[160px] -z-10" />

      {/* Section Bridge */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="section-divider"
      >
        <div className="divider-badge text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 whitespace-nowrap">
          <div className="divider-dot" />
          Featured Work
          <div className="divider-dot" />
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="section-title text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto text-center" style={{ marginTop: '-0.5rem', marginBottom: '4rem', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
            A collection of projects showcasing my skills in web development and AI.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className={`relative rounded-[2rem] border flex flex-col h-full transition-all duration-500 cursor-pointer group overflow-hidden backdrop-blur-md z-10 ${activeProject?.id === project.id
                ? 'border-blue-500/50 bg-slate-900/40 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] scale-[1.02] z-20'
                : 'border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2'
                }`}
              onClick={() => setActiveProject(activeProject?.id === project.id ? null : project)}
            >
              {/* Premium Gradient Background on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}, transparent 60%)` }}
              />

              {/* Thick Glowing Top Accent Line */}
              <div
                className="absolute top-0 left-0 w-full h-1.5 opacity-70 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: project.accentColor,
                  boxShadow: `0 0 20px ${project.accentColor}, 0 0 40px ${project.accentColor}`
                }}
              />

              {/* ENFORCED PADDED CONTAINER - Prevents border clipping perfectly */}
              <div className="flex flex-col flex-grow relative z-10 w-full h-full gap-10" style={{ padding: '2.5rem' }}>

                {/* Header Text */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-3xl font-black tracking-tight">
                    <span className="text-white">{project.name} </span>
                    <span style={{ color: project.accentColor }}>{project.nameHighlight}</span>
                  </h3>
                  <p className="text-slate-300 text-[16px] font-medium leading-loose opacity-90">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-3.5">
                  {project.techStack.map((tech, i) => (
                    <TechPill key={i} {...tech} />
                  ))}
                </div>

                {/* Buttons (pushed to bottom) border spacing is respected via parent padding */}
                <div className="flex flex-wrap gap-5 mt-auto pt-4 relative z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(activeProject?.id === project.id ? null : project);
                    }}
                    className="group/btn relative overflow-hidden flex items-center justify-center gap-2.5 rounded-full text-[14px] font-extrabold text-white transition-all duration-300 hover:scale-[1.05]"
                    style={{
                      padding: '7px 14px',
                      background: `linear-gradient(135deg, ${project.accentColor}, #4f46e5)`,
                      boxShadow: `0 8px 25px -8px ${project.accentColor}`
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2.5">
                      View Details
                      <ExternalLink size={16} className="transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group/gh flex items-center justify-center gap-2.5 rounded-full text-[14px] font-extrabold text-slate-300 border-2 border-white/10 bg-white/5 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-white/30 hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.2)] hover:scale-[1.05]"
                    style={{ padding: '7px 14px' }}
                  >
                    <FaGithub size={18} className="transition-transform duration-300 group-hover/gh:rotate-12 group-hover/gh:scale-110" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inline Detail Panel         {/* Full-Screen Detail Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(15px)',
                padding: '2rem'
              }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="hide-scrollbar rounded-[2rem] border border-white/10 bg-[#080e1f] shadow-[0_0_80px_-20px_rgba(0,0,0,0.8)] relative w-full max-w-5xl"
                style={{
                  boxShadow: `0 0 40px -10px ${activeProject.accentColor}40`,
                  maxHeight: '90vh',
                  overflowY: 'auto'
                }}
              >
                {/* Dynamic Top Glow Line */}
                <div
                  className="w-full h-1.5"
                  style={{
                    background: activeProject.accentColor,
                    boxShadow: `0 0 20px ${activeProject.accentColor}`,
                    position: 'sticky',
                    top: 0,
                    zIndex: 50
                  }}
                />

                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:-rotate-90 transition-all duration-300"
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', padding: '10px', zIndex: 60 }}
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col md:flex-row items-start relative z-10 w-full" style={{ padding: '3.5rem', gap: '3rem' }}>

                  {/* Left Column: Project Info */}
                  <div className="flex-1 flex flex-col gap-7">
                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ marginBottom: '1rem' }}>
                        <span className="text-white">{activeProject.name} </span>
                        <span style={{ color: activeProject.accentColor }}>{activeProject.nameHighlight}</span>
                      </h3>
                      <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-medium opacity-90" style={{ marginBottom: '1.5rem' }}>
                        {activeProject.description}
                      </p>
                    </div>

                    {/* Highlights Box */}
                    <div className="bg-white/[0.02] border border-white/5 rounded-[1.5rem]" style={{ padding: '2rem', marginBottom: '1rem' }}>
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
                        <Zap size={16} className="text-yellow-400" /> Key Highlights
                      </h4>
                      <ul className="space-y-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {activeProject.highlights.map((h, i) => (
                          <li key={i} className="flex items-start text-slate-200 text-[15px] leading-relaxed" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                            <span
                              className="w-2 h-2 rounded-full flex-shrink-0 shadow-[0_0_10px_currentColor]"
                              style={{
                                marginTop: '6px',
                                background: activeProject.accentColor,
                                color: activeProject.accentColor,
                                width: '8px',
                                height: '8px'
                              }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap" style={{ display: 'flex', gap: '1rem', paddingTop: '1rem' }}>
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live relative overflow-hidden flex items-center justify-center rounded-full text-[14px] font-extrabold text-white transition-all duration-300 hover:scale-[1.05]"
                        style={{
                          padding: '12px 28px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: `linear-gradient(135deg, ${activeProject.accentColor}, #4f46e5)`,
                          boxShadow: `0 8px 25px -8px ${activeProject.accentColor}`
                        }}
                      >
                        <span className="relative z-10 flex items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          Live Demo
                          <ExternalLink size={16} className="transition-transform duration-300 group-hover/live:-translate-y-1 group-hover/live:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/live:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
                      </a>
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/gh flex items-center justify-center rounded-full text-[14px] font-extrabold text-slate-300 border-2 border-white/10 bg-white/5 transition-all duration-300 hover:text-white hover:border-white/30 hover:scale-[1.05]"
                        style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <FaGithub size={18} className="transition-transform duration-300 group-hover/gh:rotate-12 group-hover/gh:scale-110" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Tech Stack */}
                  <div className="w-full md:w-[320px] shrink-0 bg-white/[0.03] border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden" style={{ padding: '2rem' }}>
                    {/* Subtle Background Glow inside the tech box */}
                    <div
                      className="absolute rounded-full blur-[60px] opacity-20 pointer-events-none"
                      style={{ background: activeProject.accentColor, top: '-5rem', right: '-5rem', width: '10rem', height: '10rem' }}
                    />

                    <div className="flex items-center relative z-10" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                      <Layers size={20} className="text-slate-400" />
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300 m-0">
                        Tech Stack
                      </h4>
                    </div>

                    <div className="flex flex-col relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {activeProject.techStack.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center rounded-xl border border-white/5 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] group"
                          style={{ padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                        >
                          <div
                            className="rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
                            style={{ padding: '12px', color: activeProject.accentColor }}
                          >
                            <tech.icon size={22} />
                          </div>
                          <span className="font-bold text-slate-200 tracking-wide text-[15px]">{tech.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center"
          style={{ marginTop: '3rem' }}
        >
          <a
            href="https://github.com/HG12265"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full font-black text-white transition-all duration-500 hover:scale-[1.05]"
            style={{
              padding: '18px 48px',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              boxShadow: '0 0 40px -10px rgba(0, 240, 255, 0.4)',
              overflow: 'hidden',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Hover Background Sweep - Vibrant Glass */}
            <div
              className="absolute inset-0 z-0 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-full"
              style={{ background: 'linear-gradient(135deg, #00f0ff, #9d00ff)' }}
            />
            {/* Top Shine */}
            <div
              className="absolute top-0 left-0 w-full h-[2px] opacity-100 group-hover:opacity-0 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)' }}
            />

            <span className="relative z-10 flex items-center gap-3" style={{ fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              <FaGithub size={22} className="group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out" />
              View All Projects On GitHub
              <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
