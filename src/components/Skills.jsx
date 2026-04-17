import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
    ]
  }
];

const SkillCard = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="skill-card"
      style={{ '--skill-color': color }}
    >
      <div className="skill-icon-container" style={{ color: color }}>
        <Icon size={40} />
      </div>
      <span className="skill-name">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Professional Bridge from About to Skills */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="section-divider"
      >
        <div className="divider-badge text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 whitespace-nowrap">
          <div className="divider-dot" />
          Technical Expertise
          <div className="divider-dot" />
        </div>
      </motion.div>

      {/* Background Ambient Glows - Matching site palette */}
      <div className="absolute top-[10%] -left-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[10%] -right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020617] to-transparent z-10 pointer-events-none" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-white">
            My <span className="gradient-text">Skills</span>
          </h2>

          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="section-subtitle">{category.title}</h3>
              
              <motion.div 
                className="skills-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex} 
                    {...skill} 
                  />
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
