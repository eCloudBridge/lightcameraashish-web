import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import InstaFeed from './components/InstaFeed';
import Journey from './components/Journey';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0d0d0f] text-[#f5f5f7] selection:bg-amber-900/40 selection:text-amber-100 overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <InstaFeed />
        <Journey />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;
