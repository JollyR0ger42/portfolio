import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Experience, About, Navbar, Works, Footer, ParallaxBg } from "./components";

import { useMotionValue } from 'framer-motion';

const App = () => {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      // console.log(scrollY.getVelocity());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <ParallaxBg />
        <Navbar />
        <About />
        <Experience />
        <Works />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
