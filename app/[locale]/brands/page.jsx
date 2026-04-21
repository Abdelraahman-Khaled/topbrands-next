import HeroSection from "../components/HeroSection";
import GlobalCTA from "../components/GlobalCTA";
import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";
import LocalizedLink from "../components/LocalizedLink";
import ScrollReveal from "../components/ScrollReveal";
import { getPageData } from "@/services/home.service";

export default async function BrandsPage({ params }) {
  const { locale } = await params;
  const data = await getPageData("brands", locale);

  if (!data || !data.brands) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-jet mb-4">Error loading brands</h1>
          <p className="text-brand-charcoal">Please try again later.</p>
        </div>
      </div>
    );
  }

  const { brands, sections } = data;
  
  const findSection = (key) => sections.find((s) => s[key])?.[key];
  
  const heroData = findSection("hero");
  const ctaData = findSection("categories"); 

  return (
    <div className="min-h-screen bg-[#DEE3EB]">
      {/* Hero Section */}
      {heroData && <HeroSection data={heroData} />}

      {/* Brands Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 ">
          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-between mb-12">
              <p className="text-lg text-brand-charcoal font-medium">
                Showing <strong className="text-brand-jet">{brands.length}</strong> trusted brands
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <StaggerItem key={brand.id}>
                <LocalizedLink
                  href={`/brands/${brand.id}`} 
                  className="block h-full group bg-white rounded-3xl overflow-hidden border-2 border-transparent transition-all hover:border-[#F7E326] hover:shadow-2xl shadow-sm cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    {/* Brand Logo Container */}
                    <div className="w-full h-56 flex items-center justify-center bg-white p-10 border-b border-gray-100">
                      <img
                        src={brand.image_url}
                        alt={brand.alt_text || brand.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Brand Info */}
                    <div className="p-8 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-brand-jet mb-3 group-hover:text-black transition-colors">
                        {brand.title}
                      </h3>
                      <p className="text-brand-charcoal text-base leading-relaxed line-clamp-3">
                        {brand.description}
                      </p>
                      
                      <div className="mt-auto pt-6 flex items-center text-brand-jet font-bold gap-2 group-hover:gap-3 transition-all">
                        View Products 
                        <i className="ri-arrow-right-line rtl:rotate-180"></i>
                      </div>
                    </div>
                  </div>
                </LocalizedLink>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      {ctaData && <GlobalCTA data={ctaData} />}
    </div>
  );
}
