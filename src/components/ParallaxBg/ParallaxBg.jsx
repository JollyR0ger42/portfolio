import { useEffect, useRef } from 'react';
import { useAnimate, motion } from "framer-motion";

import './styles.css';

const ParallaxBg = () => {
  const [bg0, animate] = useAnimate();
  const bg1 = useRef(null);
  const numDots = 1000;

  const scatterDots = (amount) => {
    const layer1 = document.createElement("div");
    layer1.className = "parallax-bg__layer";
    for (let i = 0; i < amount; i++) {
      const dot = document.createElement("div");
      dot.className = "parallax-bg__dot";
      dot.style.left = Math.random() * bg1.current.offsetWidth + "px";
      dot.style.top = Math.random() * bg1.current.offsetHeight + "px";
      layer1.appendChild(dot);
    };
    const layer0 = layer1.cloneNode(true);
    layer0.style.top = "-100%";
    const layer2 = layer1.cloneNode(true);
    layer2.style.top = "100%"
    bg1.current.appendChild(layer0);
    bg1.current.appendChild(layer1);
    bg1.current.appendChild(layer2);
  }

  useEffect(() => {
    scatterDots(numDots);
    animate(bg1.current, { y: "100%" }, {
      ease: "linear",
      duration: 100,
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