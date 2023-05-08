import { useEffect, useRef, useState } from 'react';
import { useAnimate, motion, useSpring } from "framer-motion";

import './styles.css';

const ParallaxBg = () => {
  const [bg0, animate] = useAnimate();
  let direction = 1;
  const bg1 = useRef(null);
  const numDots = 1000;
  let animation;

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

  const animateBg = (target = "100%") => {
    const nextTarget = target === "100%" ? "-100%" : "100%"
    animation = animate(bg1.current, { top: target }, {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      onComplete: () => {
        direction *= -1;
        animateBg(nextTarget);
      },
    });
  }

  useEffect(() => {
    scatterDots(numDots);
    animateBg();
  }, []);

  const scrollY = useSpring(0, {
    stiffness: 500,
    damping: 50,
  });

  useEffect(() => {
    const unsubscribeY = scrollY.on('change', (latest) => {
      if (animation) {
        let velocity = scrollY.getVelocity();
        if (velocity < 10 && velocity > -10) velocity = 0;

        if (velocity > 0) {
          animation.speed = (1 + velocity/300) * direction;
        } else if (velocity < 0) {
          animation.speed = (-1 + velocity/300) * direction;
        } else {
          animation.speed = Math.min(1, Math.max(-1, animation.speed));
        }
      }
    });
    return () => {
      unsubscribeY();
    };
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={bg0} className='parallax-bg'>
      <motion.div ref={bg1} />
    </div>
  )
};

export default ParallaxBg;