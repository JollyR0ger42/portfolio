import { useEffect, useRef, useState } from 'react';
import { useAnimate, motion } from "framer-motion";

const ParallaxLayer = ({ starsAmount = 100, starsSpeed = 100, starRadius = 10, delay = 0, direction = 1 }) => {
  const [bg0, animate] = useAnimate();
  let bgIsDrawing = false;
  const bg1 = useRef(null);
  const [animation, setAnimation] = useState();
  let [directionNorm, setDirectionNorm]  = useState(1);

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
    if (!bgIsDrawing && bg0.current) {
      bgIsDrawing = true;
      animate(bg0.current, {opacity: 0}, {duration: 1});
      setTimeout(() => {
        setDirectionNorm(1);
        animate(bg0.current, {opacity: 1}, {duration: 1});
        scatterDots(starsAmount);
        animateBg();
        bgIsDrawing = false;
      }, (1+delay) * 1000);
    }
  }

  const animateBg = (target = "100%") => {
    const nextTarget = target === "100%" ? "-100%" : "100%";
    const duration = 10000 / starsSpeed;
    setAnimation(animate(bg1.current, { top: target }, {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      onComplete: () => {
        setDirectionNorm(prev => prev * (-1));
        animateBg(nextTarget);
      },
    }));
  }

  useEffect(() => {
    drawBg();
    window.addEventListener('resize', drawBg);

    return () => {
      window.removeEventListener('resize', drawBg);
    };
  }, []);


  useEffect(() => {
    if (animation) animation.speed = direction * directionNorm;
  }, [direction, directionNorm]);

  return (
    <div ref={bg0} className='parallax-bg_wrapper'>
      <motion.div ref={bg1} layout/>
    </div>
  )
};

export default ParallaxLayer;