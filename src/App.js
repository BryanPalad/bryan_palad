import "./App.css";
// components
import {
  Hero,
  About,
  Skills,
  Portfolio,
  Services,
  Testimonials,
  Contact,
} from "./pages";

import { Header, Footer, BackToTop } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
