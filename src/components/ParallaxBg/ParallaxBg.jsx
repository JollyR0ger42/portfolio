import { useEffect, useRef } from 'react';

import './styles.css';

const ParallaxBg = () => {
  const bg0 = useRef(null);
  const bg1 = useRef(null);
  const numDots = 100;

  const scatterDots = (amount) => {
    for (let i = 0; i < amount; i++) {
      const dot = document.createElement("div");
      dot.className = "parallax-bg__dot";
      dot.style.left = Math.random() * bg1.current.offsetWidth + "px";
      dot.style.top = Math.random() * bg1.current.offsetHeight + "px";
      bg1.current.appendChild(dot);
    }
  }

  useEffect(() => {
    console.log('mounted', bg1);
    scatterDots(numDots);
  }, []);

  return (
    <div ref={bg0}>
      <div ref={bg1} className='parallax-bg' />
    </div>
  )
};

export default ParallaxBg;