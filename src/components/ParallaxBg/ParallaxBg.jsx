import { useEffect, useState } from 'react';

import ParallaxLayer from './ParallaxLayer';

const ParallaxBg = () => {
  let scrollY = 0;
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setDirection(Math.min(1, Math.max(-1, window.scrollY - scrollY)));
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parallax-bg">
      < ParallaxLayer
        direction={direction}
        starsAmount={200}
        starRadius={1}
        starsSpeed={7}
        delay={1} />
      < ParallaxLayer
        direction={direction}
        starsAmount={100}
        starRadius={2}
        starsSpeed={14}
        delay={0.5} />
      < ParallaxLayer
        direction={direction}
        starsAmount={50}
        starRadius={4}
        starsSpeed={28}
        delay={0} />
    </div>
  )
}

export default ParallaxBg;