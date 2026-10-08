import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0d0f]/50 to-[#0d0d0f] z-20" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.25] z-30 pointer-events-none mix-blend-overlay" />
        <img 
          src="/images/hero_bg.jpg" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover filter brightness-75 contrast-125 grayscale-[20%]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-40 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-amber-500 font-medium tracking-[0.2em] text-xs uppercase mb-6"
        >
          Visual Journal of Ashish
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.1] mb-8 text-glow"
        >
          Capturing <i className="font-serif italic text-white/80">Frames,</i><br /> Chasing <i className="font-serif italic text-white/80">Light.</i>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-12"
        >
          Exploring the world through photography and cinematography. A documentation of the learning curve, one frame at a time.
        </motion.p>

        {/* Stats / Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="glass-card px-4 py-2 rounded-full text-white/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Gear: Fujifilm XA7 / Sigma 56mm & 16mm
          </div>
          <div className="glass-card px-4 py-2 rounded-full text-white/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
            Focus: Cinematic Stills
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-amber-500/50"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
