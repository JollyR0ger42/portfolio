import { useEffect, useRef } from 'react';

import './styles.css';

const ParallaxBg = () => {
  const bg = useRef(null);
  const numDots = 100;

  const scatterDots = (amount) => {
    console.log('bg', bg)
    for (let i = 0; i < amount; i++) {
      const dot = document.createElement("div");
      dot.className = "parallax-bg__dot";
      dot.style.left = Math.random() * bg.current.offsetWidth + "px";
      dot.style.top = Math.random() * bg.current.offsetHeight + "px";
      bg.current.appendChild(dot);
    }
  }

  useEffect(() => {
    console.log('mounted', bg);
    scatterDots(numDots);
  }, []);

  return <div ref={bg} className='parallax-bg' />
};

export default ParallaxBg;