import { useEffect, useRef, useState } from 'react';
import { useAnimate, motion, useSpring } from "framer-motion";

const ParallaxLayer = ({ starsAmount = 100, starsSpeed = 100, starsAcceleration = 1, starRadius = 10 }) => {
  const [bg0, animate] = useAnimate();
  let direction = 1;
  const bg1 = useRef(null);
  let animation;

  const scatterDots = (amount) => {
    bg1.current.innerHTML = '';
    const normalize = bg1.current.offsetWidth * bg1.current.offsetHeight / 10000000;
    const layer1 = document.createElement("div");
    layer1.className = "parallax-bg__layer";
    for (let i = 0; i < amount * normalize; i++) {
      const dot = document.createElement("div");
      dot.className = "parallax-bg__dot";
      dot.style.left = Math.random() * bg1.current.offsetWidth + "px";
      dot.style.top = Math.random() * bg1.current.offsetHeight + "px";
      dot.style.width = starRadius + 'px';
      dot.style.height = starRadius + 'px';
      dot.style.boxShadow = `0 0 ${starRadius*2}px ${starRadius}px rgba(255,255,255,0.33)`;
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

  const drawBg = () => {
    direction = 1;
    scatterDots(starsAmount);
    animateBg();
  }

  const animateBg = (target = "100%") => {
    const nextTarget = target === "100%" ? "-100%" : "100%";
    const duration = 10000 / starsSpeed;
    animation = animate(bg1.current, { top: target }, {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      onComplete: () => {
        direction *= -1;
        animateBg(nextTarget);
      },
    });
  }

  useEffect(() => {
    drawBg();
    window.addEventListener('resize', drawBg);

    return () => {
      window.removeEventListener('resize', drawBg);
    };
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
          animation.speed = (1 + velocity * starsAcceleration / 1000) * direction;
        } else if (velocity < 0) {
          animation.speed = (-1 + velocity * starsAcceleration / 1000) * direction;
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
    <div ref={bg0} className='parallax-bg_wrapper'>
      <motion.div ref={bg1} layout/>
    </div>
  )
};

export default ParallaxLayer;