import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Check if device has touch support
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = React.useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);
    
    // Attach to all links and buttons
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-cyan-400/30 rounded-full pointer-events-none z-[9999] hidden lg:block"
        animate={{
          width: isHovering ? 80 : 48,
          height: isHovering ? 80 : 48,
          borderColor: isHovering ? 'rgba(34, 211, 238, 0.6)' : 'rgba(34, 211, 238, 0.3)',
          backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.05)' : 'rgba(34, 211, 238, 0)',
        }}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
      />
      
      {/* Central Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-cyan-400 rounded-full pointer-events-none z-[10000] shadow-[0_0_15px_rgba(34,211,238,0.8)] hidden lg:block"
        animate={{
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Ambient Large Glow */}
      <motion.div
        className="fixed top-0 left-0 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none z-[9998] hidden lg:block"
        animate={{
          width: isHovering ? 500 : 400,
          height: isHovering ? 500 : 400,
          opacity: isHovering ? 0.08 : 0.05,
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default CustomCursor;
