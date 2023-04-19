import { useEffect, useRef } from 'react';
import { useAnimate, motion } from "framer-motion";

import './styles.css';

const ParallaxBg = () => {
  const [bg0, animate] = useAnimate();
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
    animate(bg1.current, { y: "-100%" }, {
      ease: "linear",
      duration: 10,
      onComplete: () => console.log("done2"),
    });
  }, []);

  return (
    <div ref={bg0} className='parallax-bg'>
      <motion.div ref={bg1} />
    </div>
  )
};

export default ParallaxBg;