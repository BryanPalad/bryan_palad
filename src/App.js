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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
