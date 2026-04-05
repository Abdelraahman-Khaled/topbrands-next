import Hero from "./home/components/Hero";
import About from "./home/components/About";
import Services from "./home/components/Services";
import ProductsBrands from "./home/components/ProductsBrands";
import OurCustomers from "./home/components/OurCustomers";
import Contact from "./home/components/Contact";
import Stats from "./home/components/Stats";
// import Testimonials from './components/Testimonials';
import WhyPartener from "./home/components/WhyPartener";
import WhyChooseUs from "./home/components/WhyChooseUs";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <About />
      <Services />
      <ProductsBrands />
      <WhyChooseUs />
      <OurCustomers />
      <WhyPartener />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
}
