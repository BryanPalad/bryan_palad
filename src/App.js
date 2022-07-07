import './App.css';
// components 
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/ContactEmail';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop';
function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <BackToTop/>
    </div>
  );
}

export default App;
