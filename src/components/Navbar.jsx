import React from 'react';
import { Camera, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors cursor-pointer">
        <Camera size={20} />
        <span className="font-display font-semibold tracking-wide text-sm uppercase">Ashish</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#gallery" className="hover:text-amber-500 transition-colors">Portfolio</a>
        <a href="#journey" className="hover:text-amber-500 transition-colors">Field Notes</a>
        <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-4 text-white/70">
        <a href="https://instagram.com/light.camera.ashish" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition-colors">
          <InstagramIcon size={18} />
        </a>
        <a href="mailto:hello@example.com" className="hover:text-amber-500 transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
