import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Experience, About, Navbar, Works, Footer, ParallaxBg } from "./components";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStyles = async () => {
      const cssPromises = [];
      cssPromises.push(import("./index.css"));
      cssPromises.push(import("react-vertical-timeline-component/style.min.css"));
      cssPromises.push(import("./components/ParallaxBg/styles.css"));
      cssPromises.push(import("./components/TitleWave/styles.css"));
      cssPromises.push(import("./assets/fonts/fonts.css"));
      await Promise.all(cssPromises);
      setIsLoading(false);
    };
    loadStyles();
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Loading...
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && (
        <div className='relative z-0'>
          <ParallaxBg />
          <Navbar />
          <About />
          <Experience />
          <Works />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
