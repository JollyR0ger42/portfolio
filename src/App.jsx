import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { Experience, About, Navbar, Works, Footer, ParallaxBg } from "./components";

const App = () => {
  useEffect(() => {
    let resizeEventId;
    const loadStyles = async () => {
      await import("./index.css");
      resizeEventId = setTimeout(() => window.dispatchEvent(new Event('resize')), 100)
    };
    loadStyles();
    return () => clearTimeout(resizeEventId);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <ParallaxBg />
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
