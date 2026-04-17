import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const message = formData.get('message')?.toString().trim();

    // Validation
    if (!name || !email || !message) {
      setStatus("error");
      setResult("Please fill all fields ❗");
      return;
    }

    setStatus("sending");
    setResult("Sending...");
    formData.append("access_key", "f353285a-c2a9-405c-b3db-47754b5171f9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully! ✅");
        event.target.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          setStatus("");
          setResult("");
        }, 5000);
      } else {
        setStatus("error");
        setResult(data.message || "Submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setResult("Something went wrong! Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gowtham114411@email.com",
      link: "mailto:gowtham114411@email.com",
      color: "#00f0ff"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9344232465",
      link: "tel:9344232465",
      color: "#34d399"
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/hg12265",
      link: "https://github.com/hg12265",
      color: "#a78bfa"
    },
    {
      icon: FaLinkedin, // Added per request
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/", // Add your URL here later
      color: "#60a5fa"
    }
  ];

  return (
    <section id="contact" className="relative overflow-hidden" style={{ paddingTop: '1rem', paddingBottom: '8rem', boxSizing: 'border-box' }}>

      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Section Bridge */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="section-divider"
        style={{ marginBottom: '6rem' }}
      >
        <div className="divider-badge text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 whitespace-nowrap">
          <div className="divider-dot" />
          Get In Touch
          <div className="divider-dot" />
        </div>
      </motion.div>

      <div className="container relative z-10" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ letterSpacing: '-0.02em', marginBottom: '20px' }} >
            <span className="text-white">Get In </span>
            <span style={{ background: 'linear-gradient(135deg, #00f0ff, #9d00ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto" style={{ margin: '0 auto', marginBottom: '20px' }}>
            Have a project idea or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        {/* 2-Column Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            boxSizing: 'border-box',
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 30px 60px -15px rgba(0,0,0,0.7)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderRadius: '2rem',
            border: '1px solid rgba(255,255,255,0.05)',
            overflow: 'hidden',
            width: '100%'
          }}
        >
          {/* LEFT: Contact Info */}
          <div style={{ flex: '1 1 350px', padding: '3.5rem', background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.05)', position: 'relative', boxSizing: 'border-box' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)', opacity: 0.5 }} />

            <h3 className="text-white mb-8" style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem', boxSizing: 'border-box' }}>Contact Information</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', boxSizing: 'border-box' }}>
              {contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group transition-all duration-300"
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '0.5rem',
                    borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                >
                  <div
                    className="transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
                    style={{
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '0.5em',
                      borderRadius: '0.75rem',
                      background: 'rgba(255,255,255,0.05)',
                      color: info.color,
                      boxShadow: `0 0 20px -5px ${info.color}`,
                      flexShrink: 0
                    }}
                  >
                    <info.icon size={22} />
                  </div>
                  <div style={{ boxSizing: 'border-box', overflow: 'hidden' }}>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{info.label}</h4>
                    <p style={{ color: '#ffffff', fontWeight: 500, fontSize: '15px', margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div style={{ flex: '1.5 1 450px', padding: '2.5rem', position: 'relative', boxSizing: 'border-box' }}>
            <h3 className="text-white mb-8" style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '2rem', boxSizing: 'border-box' }}>Send a Message</h3>

            <form onSubmit={onSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', boxSizing: 'border-box' }}>
                {/* Name */}
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="transition-all duration-300"
                    style={{
                      boxSizing: 'border-box',
                      width: '100%',
                      padding: '16px 20px',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      borderRadius: '0.75rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px'
                    }}
                    onFocus={(e) => { e.target.style.boxShadow = '0 0 0 2px rgba(0,240,255,0.4)'; e.target.style.borderColor = 'transparent'; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
                {/* Email */}
                <div style={{ flex: '1 1 200px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email Address"
                    className="transition-all duration-300"
                    style={{
                      boxSizing: 'border-box',
                      width: '100%',
                      padding: '16px 20px',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      borderRadius: '0.75rem',
                      outline: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px'
                    }}
                    onFocus={(e) => { e.target.style.boxShadow = '0 0 0 2px rgba(0,240,255,0.4)'; e.target.style.borderColor = 'transparent'; }}
                    onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project idea..."
                  className="transition-all duration-300"
                  style={{
                    boxSizing: 'border-box',
                    width: '100%',
                    padding: '20px',
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    borderRadius: '0.75rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px'
                  }}
                  onFocus={(e) => { e.target.style.boxShadow = '0 0 0 2px rgba(157,0,255,0.4)'; e.target.style.borderColor = 'transparent'; }}
                  onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    style={{
                      boxSizing: 'border-box',
                      padding: '12px 20px',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      backgroundColor: status === 'error' ? 'rgba(239, 68, 68, 0.1)' : status === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.05)',
                      color: status === 'error' ? '#f87171' : status === 'success' ? '#34d399' : '#94a3b8',
                      border: `1px solid ${status === 'error' ? 'rgba(239, 68, 68, 0.2)' : status === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.1)'}`
                    }}
                  >
                    {status === 'error' && <AlertCircle size={18} />}
                    {status === 'success' && <CheckCircle2 size={18} />}
                    {result}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group transition-all duration-300"
                style={{
                  boxSizing: 'border-box',
                  position: 'relative',
                  width: '100%',
                  padding: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  borderRadius: '0.75rem',
                  fontWeight: 700,
                  color: 'white',
                  background: 'linear-gradient(135deg, #00f0ff, #9d00ff)',
                  boxShadow: '0 8px 30px -5px rgba(157, 0, 255, 0.4)',
                  border: 'none',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  opacity: status === 'sending' ? 0.7 : 1
                }}
                onMouseEnter={(e) => { if (status !== 'sending') e.currentTarget.style.transform = 'scale(1.02)'; }}
                onMouseLeave={(e) => { if (status !== 'sending') e.currentTarget.style.transform = 'scale(1)'; }}
              >
                <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message 🚀'}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default Contact;
