import ParallaxLayer from './ParallaxLayer';
import './styles.css';

const ParallaxBg = () => {

  return (
    <div className="parallax-bg">
      < ParallaxLayer starsAmount={200} starRadius={1} starsSpeed={7} starsAcceleration={1} delay={1} />
      < ParallaxLayer starsAmount={100} starRadius={2} starsSpeed={14} starsAcceleration={2} delay={0.5} />
      < ParallaxLayer starsAmount={50} starRadius={4} starsSpeed={28} starsAcceleration={4} delay={0} />
    </div>
  )
}

export default ParallaxBg;