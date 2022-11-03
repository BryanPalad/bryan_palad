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
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import { Header, Footer, BackToTop } from "./components";
import {motion} from 'framer-motion';

function App() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} exit={{opacity:0}}>
      <Header />
      <Hero/>
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      {/* <MessengerCustomerChat
    pageId="100003732552299"
    appId="2582835238526292"
  /> */}
    </motion.div>
  );
}

export default App;
