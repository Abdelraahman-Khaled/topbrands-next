import Hero from "./home/components/Hero";
import About from "./home/components/About";
import Services from "./home/components/Services";
import ProductsBrands from "./home/components/ProductsBrands";
import Contact from "./home/components/Contact";
import Stats from "./home/components/Stats";
import WhyPartener from "./home/components/WhyPartener";
import WhyChooseUs from "./home/components/WhyChooseUs";
import { getPageData } from "@/services/home.service";

export default async function HomePage({ params }) {
  const { locale } = await params;
  const data = await getPageData("home", locale);

  if (!data) {
    return <div>Error loading page content</div>;
  }

  const findSection = (type) => data.sections.find(s => s[type])?.[type];

  const heroData = findSection("hero_section");
  const statsData = findSection("our_impact");
  const aboutData = findSection("leading_fmcg");
  const servicesData = findSection("comprehensive_distribution");
  const strategicData = findSection("strategic_brand_partnerships");
  const whyChooseData = findSection("why_choose_us_section");
  const whyPartnerData = findSection("your_trusted_fmcg_distribution_partner");
  const contactData = findSection("contact_us_section");
  const servicesCta = findSection("custom_distribution")
  console.log(servicesCta);

  return (
    <div className="min-h-screen bg-white">
      {heroData && <Hero data={heroData} />}

      {statsData && <Stats data={statsData} />}

      {aboutData && <About data={aboutData} />}

      {servicesData && <Services data={servicesData} cta={servicesCta} />}

      {strategicData && (
        <ProductsBrands
          brands={data.brands}
          data={strategicData}
        />
      )}

      {whyChooseData && <WhyChooseUs data={whyChooseData} />}

      {whyPartnerData && <WhyPartener data={whyPartnerData} />}

      {contactData && <Contact data={contactData} />}
    </div>
  );
}
