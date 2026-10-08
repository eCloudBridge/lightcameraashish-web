import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
const InstagramIcon = ({ size, className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const InstaFeed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://w.behold.so/widget.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <section className="py-32 px-6 bg-[#161619]/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center p-[3px] mb-6"
          >
            <div className="w-full h-full bg-[#0d0d0f] rounded-full overflow-hidden border-2 border-[#0d0d0f]">
              <img src="/images/profile.jpg" alt="Ashish Profile" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-serif mb-4">@light.camera.ashish</h2>
          <p className="text-white/50 max-w-lg mb-8">
            Follow my daily progress, behind-the-scenes, and mini cinematic edits.
          </p>
          
          <a 
            href="https://instagram.com/light.camera.ashish" 
            target="_blank" 
            rel="noreferrer"
            className="glass-card px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 font-medium text-sm flex items-center gap-2"
          >
            Follow on Instagram
          </a>
        </div>

        <figure data-behold-id="BJDZO482z0Twm1m5fhFt"></figure>
      </div>
    </section>
  );
};

export default InstaFeed;
