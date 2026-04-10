import Hero from "./home/components/Hero";
import ScrollReveal from "./components/ScrollReveal";
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
      
      <ScrollReveal delay={0.1}>
        <Stats />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <About />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <Services />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <ProductsBrands />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <OurCustomers />
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <WhyPartener />
      </ScrollReveal>

      {/* <ScrollReveal delay={0.2}><Testimonials /></ScrollReveal> */}

      <ScrollReveal delay={0.15}>
        <Contact />
      </ScrollReveal>
    </div>
  );
}
