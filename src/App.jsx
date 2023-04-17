import { BrowserRouter } from "react-router-dom";

import { Experience, About, Navbar, Works, Footer } from "./components";

const App = () => {
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
