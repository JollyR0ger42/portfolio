import ParallaxLayer from './ParallaxLayer';
import './styles.css';

const ParallaxBg = () => {

  return (
    <div className="parallax-bg">
      < ParallaxLayer starsAmount={300} starRadius={1} starsSpeed={5} starsAcceleration={1} />
      < ParallaxLayer starsAmount={200} starRadius={2} starsSpeed={10} starsAcceleration={2} />
      < ParallaxLayer starsAmount={100} starRadius={4} starsSpeed={20} starsAcceleration={4} />
    </div>
  )
}

export default ParallaxBg;