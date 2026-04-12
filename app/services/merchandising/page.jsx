"use client";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/HeroSection";
import GlobalCTA from "../../components/GlobalCTA";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import AnimatedCard from "../../components/AnimatedCard";
import Subscribe from "../../components/Subscribe";

export default function MerchandisingPage() {
  const { t } = useTranslation();
  const features = [
    {
      icon: 'ri-layout-grid-line',
      title: 'Planogram Execution',
      description: 'Professional implementation of brand planograms ensuring optimal product placement and shelf organization.'
    },
    {
      icon: 'ri-store-line',
      title: 'In-Store Visibility',
      description: 'Strategic product positioning and display management to maximize brand visibility at point of sale.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Promotional Compliance',
      description: 'Accurate execution of promotional activities, pricing displays, and marketing materials in-store.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Tracking',
      description: 'Regular monitoring and reporting on shelf presence, stock levels, and competitive positioning.'
    }
  ];

  const services = [
    'Product placement optimization',
    'Shelf space management',
    'POS material installation',
    'Stock rotation (FIFO)',
    'Competitor monitoring',
    'Photo reporting',
    'Promotional setup',
    'Inventory checks'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        img="https://readdy.ai/api/search-image?query=professional%20merchandiser%20arranging%20products%20on%20supermarket%20shelves%20organized%20retail%20display%20bright%20store%20lighting%20commercial%20photography%20clean%20modern%20store%20interior&width=1920&height=800&seq=merchandising-hero-001&orientation=landscape"
        subtitle="MERCHANDISING"
        title="Professional Sales"
        yellowTitle="& Merchandising"
        description1="Experienced sales teams with deep local market knowledge and strong customer relationships."
        yellowText="We ensure your brand"
        description2="stands out at every point of sale."
      />

      {/* Services Bar */}
      <ScrollReveal>
        <section className="py-12 bg-brand-yellow">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2 bg-brand-jet px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg">
                  <i className="ri-check-line text-brand-yellow"></i>
                  <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap  tracking-wider">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4  tracking-tight">Merchandising Services</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                Comprehensive in-store execution to drive brand visibility and sales performance
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <AnimatedCard className="h-full bg-brand-paleblue rounded-[32px] p-8 md:p-10 border border-transparent hover:border-brand-yellow group transition-all duration-300">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${feature.icon} text-2xl md:text-3xl text-brand-jet`}></i>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-jet mb-3 md:mb-4">{feature.title}</h3>
                    <p className="text-sm md:text-base text-brand-charcoal leading-relaxed font-medium">{feature.description}</p>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Sales Team Section */}
      <ScrollReveal>
        <section className="py-16 lg:py-24 bg-brand-paleblue">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Expert Sales Team</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                  Our dedicated sales force combines deep market knowledge with professional execution to build strong retailer relationships and drive consistent sell-through.
                </p>

                <StaggerContainer className="space-y-6">
                  {[
                    { icon: 'ri-user-star-line', title: 'Trained Professionals', desc: 'Skilled in sales techniques and product knowledge' },
                    { icon: 'ri-map-pin-user-line', title: 'Local Market Experts', desc: 'Deep understanding of regional consumer preferences' },
                    { icon: 'ri-user-heart-line', title: 'Relationship Builders', desc: 'Strong connections with retailers and wholesalers' }
                  ].map((item, i) => (
                    <StaggerItem key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0">
                        <i className={`${item.icon} text-2xl text-brand-jet`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-jet mb-1  tracking-tight">{item.title}</h4>
                        <p className="text-sm md:text-base text-brand-charcoal font-medium">{item.desc}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="relative group">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20sales%20representative%20talking%20with%20store%20manager%20in%20retail%20environment%20friendly%20business%20discussion%20bright%20store%20lighting%20commercial%20photography&width=600&height=500&seq=merchandising-sales-001&orientation=portrait"
                  alt="Sales Team"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center rounded-[32px] shadow-2xl transition-transform group-hover:scale-[1.02] duration-500"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Results Section */}
      <ScrollReveal>
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1 group">
                <img
                  src="https://readdy.ai/api/search-image?query=well%20organized%20supermarket%20shelf%20with%20consumer%20products%20perfect%20product%20display%20retail%20merchandising%20excellence%20bright%20store%20lighting%20clean%20modern%20store&width=600&height=500&seq=merchandising-results-001&orientation=portrait"
                  alt="Merchandising Results"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center rounded-[32px] shadow-2xl transition-transform group-hover:scale-[1.02] duration-500"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Driving Results</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                  Our merchandising efforts translate directly into improved brand performance and increased sales at the point of purchase.
                </p>

                <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    { val: '95%', lab: 'Shelf Availability' },
                    { val: '100%', lab: 'Planogram Compliance' },
                    { val: 'Weekly', lab: 'Store Visits' },
                    { val: 'Real-time', lab: 'Reporting' }
                  ].map((res, i) => (
                    <StaggerItem key={i} className="bg-brand-paleblue p-6 rounded-[24px] text-center group hover:bg-brand-yellow transition-colors duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-brand-jet group-hover:text-brand-jet transition-colors duration-300 mb-2">{res.val}</div>
                      <p className="text-xs md:text-sm text-brand-charcoal font-bold  tracking-wider">{res.lab}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <div className="py-12 md:py-16">
       
        <Subscribe
          title="Boost Your In-Store Presence"
        becomePartner={true}
         />
      </div>


    </div>
  );
}
