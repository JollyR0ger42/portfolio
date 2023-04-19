import { useEffect, useRef } from 'react';
import { useAnimationControls, motion } from "framer-motion";

import './styles.css';

const ParallaxBg = () => {
  const controls = useAnimationControls();
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
    scatterDots(numDots);
    controls.start({
      y: "100%", transition: {
        ease: "linear",
        duration: 30,
      }
    });
  }, []);

  return (
    <div ref={bg0} className='parallax-bg'>
      <motion.div
        animate={controls}
        ref={bg1}
      />
    </div>
  )
};

export default ParallaxBg;