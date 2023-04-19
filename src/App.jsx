import { BrowserRouter } from "react-router-dom";

import { Experience, About, Navbar, Works, Footer, ParallaxBg } from "./components";

const App = () => {
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
