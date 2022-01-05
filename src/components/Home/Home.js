import { Contact, Faq, Footer, Hero, Navbar, Pricing, Testimonials } from "..";
import "./Home.css";

export const  Home  = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  )
};

export default Home;
