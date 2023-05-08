import ParallaxLayer from './ParallaxLayer';
import './styles.css';

const ParallaxBg = () => {

  return (
    <div className="parallax-bg">
      < ParallaxLayer starsAmount={500} starRadius={1} starsSpeed={50} starsAcceleration={0.25} />
      < ParallaxLayer starsAmount={250} starRadius={2} starsSpeed={100} starsAcceleration={0.5} />
      < ParallaxLayer starsAmount={125} starRadius={4} starsSpeed={200} starsAcceleration={1} />
    </div>
  )
}

export default ParallaxBg;