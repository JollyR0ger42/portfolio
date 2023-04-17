import { BrowserRouter } from "react-router-dom";

import { Experience, About, Navbar, Works, Footer } from "./components";

import { useMotionValue } from 'framer-motion';

const App = () => {
  const scrollY = useMotionValue(0);

  window.addEventListener('scroll', () => {
    scrollY.set(window.scrollY);
    console.log(scrollY.getVelocity());
  });

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-app'>
        <Navbar />
        <About />
        <Experience />
        <Works />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
