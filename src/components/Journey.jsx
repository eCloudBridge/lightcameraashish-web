import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Droplets } from 'lucide-react';

const notes = [
  {
    id: 1,
    title: "Finding My Exposure: 5 Mistakes I Made",
    type: "Article",
    icon: <Droplets size={18} />,
    date: "Oct 2026",
    excerpt: "Blowing out the highlights and muddy shadows. How I finally understood the exposure triangle and stopped relying on auto mode.",
    image: "/images/portfolio_journey.jpg"
  },
  {
    id: 2,
    title: "My First 60fps B-Roll Cut",
    type: "Video",
    icon: <Video size={18} />,
    date: "Sep 2026",
    excerpt: "Testing slow motion. The difference between shooting 24fps and 60fps, and why timeline frame rates matter in Premiere Pro.",
    image: "/images/portfolio_cinematic.jpg"
  },
  {
    id: 3,
    title: "Color Grading in DaVinci: First Impressions",
    type: "Notes",
    icon: <BookOpen size={18} />,
    date: "Aug 2026",
    excerpt: "Switching from basic Lumetri color to node-based grading. It's overwhelming, but the control over teal and orange is unmatched.",
    image: "/images/hero_bg.jpg"
  }
];

const Journey = () => {
  return (
    <section id="journey" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 max-w-2xl text-glow">Field Notes: The Learning Curve</h2>
        <div className="w-20 h-[1px] bg-amber-500 mb-8" />
        <p className="text-white/60 max-w-xl leading-relaxed">
          I started photography not to become a professional, but to document life with intention. This section is my raw journal—the gear I'm testing, the editing techniques I'm struggling with, and the breakthroughs along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {notes.map((note, index) => (
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={note.id} 
            className="group cursor-pointer flex flex-col h-full"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
              <img 
                src={note.image} 
                alt={note.title} 
                className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-medium text-white/90">
                {note.icon}
                {note.type}
              </div>
            </div>
            
            <div className="flex-grow flex flex-col">
              <div className="text-amber-500 text-xs font-mono mb-3">{note.date}</div>
              <h3 className="text-2xl font-serif mb-3 group-hover:text-amber-400 transition-colors">{note.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{note.excerpt}</p>
              
              <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                Read Entry <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Journey;
