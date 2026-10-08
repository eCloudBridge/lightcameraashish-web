import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Aperture, Film } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 bg-amber-500/20 translate-x-4 translate-y-4 rounded-xl -z-10" />
            <img 
              src="/images/profile.jpg" 
              alt="Ashish" 
              className="w-full h-full object-cover rounded-xl filter grayscale-[20%] contrast-110"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Camera className="text-amber-500" size={24} />
              </div>
              <div>
                <p className="text-xs text-white/50 uppercase tracking-widest">Current Setup</p>
                <p className="text-sm font-medium text-white/90">Fujifilm XA7 + Sigma 56mm & 16mm</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-glow">The Origin Story</h2>
          <div className="w-16 h-[1px] bg-amber-500 mb-8" />
          
          <div className="space-y-6 text-white/70 leading-relaxed font-light">
            <p>
              I never planned on becoming a photographer. It started as a simple curiosity—a desire to document life a little better than my smartphone would allow. I picked up a camera to freeze moments, but soon realized I was learning how to actually <em>see</em> light.
            </p>
            <p>
              My philosophy is simple: honesty over perfection. I am a beginner, and this portfolio is a live documentation of my learning curve. From wrestling with exposure settings in manual mode to trying my hand at cinematic color grading, every frame here represents a lesson learned.
            </p>
            <p>
              I'm heavily inspired by moody, cinematic aesthetics, neon-drenched streets, and the profound depth of human portraits in natural light.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Aperture className="text-amber-500" size={20} />
              <h4 className="font-serif text-lg text-white">Photography</h4>
              <p className="text-xs text-white/50">Street, Portraits, and finding the extraordinary in the mundane.</p>
            </div>
            <div className="flex flex-col gap-2">
              <Film className="text-amber-500" size={20} />
              <h4 className="font-serif text-lg text-white">Cinematography</h4>
              <p className="text-xs text-white/50">Short cuts, b-roll, and experimenting with 60fps narratives.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
