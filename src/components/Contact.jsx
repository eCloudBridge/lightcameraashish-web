import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-40 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/images/portfolio_street.jpg" 
          alt="Background" 
          className="w-full h-full object-cover filter blur-sm grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/80 to-transparent" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-6 block"
        >
          Let's Connect
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif mb-12 text-white/90"
        >
          Have a project or just want to chat?
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="mailto:hello@example.com" 
            className="group relative px-8 py-4 bg-white text-black font-medium overflow-hidden rounded-full transition-transform hover:scale-105"
          >
            <span className="relative z-10">Send an Email</span>
            <div className="absolute inset-0 bg-amber-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
          </a>
          
          <a 
            href="https://instagram.com/light.camera.ashish" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 glass-card text-white hover:bg-white/10 transition-colors rounded-full font-medium"
          >
            DM on Instagram
          </a>
        </motion.div>
      </div>

      <footer className="absolute bottom-6 w-full text-center text-white/30 text-xs font-mono uppercase tracking-wider">
        © {new Date().getFullYear()} Ashish. Built for the love of light.
      </footer>
    </section>
  );
};

export default Contact;
