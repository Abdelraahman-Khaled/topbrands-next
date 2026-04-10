"use client";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import AnimatedCard from "../../components/AnimatedCard";

export default function DistributionPage() {
  const { t } = useTranslation();
  const features = [
    {
      icon: 'ri-store-3-line',
      title: 'Traditional Retail',
      description: 'Deep penetration into neighborhood stores, groceries, and local shops across all Syrian regions.'
    },
    {
      icon: 'ri-building-2-line',
      title: 'Modern Trade',
      description: 'Strong presence in supermarkets, hypermarkets, and chain stores with dedicated account management.'
    },
    {
      icon: 'ri-archive-line',
      title: 'Wholesale Channels',
      description: 'Efficient wholesale distribution to major markets and bulk buyers throughout Syria.'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Geographic Coverage',
      description: 'Comprehensive coverage of major cities, regional centers, and rural markets nationwide.'
    }
  ];

  const stats = [
    { value: '14', label: 'Governorates Covered' },
    { value: '5000+', label: 'Retail Points' },
    { value: '98%', label: 'Delivery Success Rate' },
    { value: '24h', label: 'Average Delivery Time' }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20large%20distribution%20center%20with%20multiple%20delivery%20trucks%20loading%20docks%20warehouse%20facility%20professional%20logistics%20operations%20bright%20daylight%20industrial%20photography%20clean%20modern%20setting&width=1920&height=800&seq=distribution-hero-001&orientation=landscape"
            alt="Distribution Network"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-semibold text-brand-yellow tracking-widest uppercase">/ DISTRIBUTION</span>
            <div className="h-px w-16 bg-brand-yellow"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Nationwide Distribution
            <br />
            <span className="text-brand-yellow">Network</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl">
            Strong coverage across traditional retail, modern trade, and wholesale channels throughout Syria. We ensure your products reach every corner of the market.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-16 bg-brand-yellow">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-brand-jet mb-2">{stat.value}</div>
                  <div className="text-base text-brand-charcoal font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Distribution Channels</h2>
              <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
                Multi-channel distribution approach ensuring maximum market penetration
              </p>
            </div>
 
            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <AnimatedCard className="h-full bg-brand-paleblue rounded-3xl p-10 border border-transparent hover:border-brand-yellow group">
                    <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <i className={`${feature.icon} text-3xl text-brand-jet`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-jet mb-4">{feature.title}</h3>
                    <p className="text-base text-brand-charcoal leading-relaxed">{feature.description}</p>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Process Section */}
      <ScrollReveal>
        <section className="py-20 lg:py-28 bg-brand-paleblue">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">How We Distribute</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                  Our distribution process is designed for efficiency, reliability, and maximum market coverage. From warehouse to shelf, we ensure your products are always available.
                </p>
 
                <StaggerContainer className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <StaggerItem key={i} className="flex items-start space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-brand-yellow rounded-full text-brand-jet font-bold flex-shrink-0">
                        {i}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-jet mb-1">
                          {t(`dist_step_${i}_title`) || i === 1 ? "Order Processing" : i === 2 ? "Route Optimization" : i === 3 ? "Delivery Execution" : "Confirmation & Reporting"}
                        </h4>
                        <p className="text-brand-charcoal">
                          {t(`dist_step_${i}_desc`) || i === 1 ? "Efficient order management and inventory allocation" : i === 2 ? "Smart routing for fastest delivery times" : i === 3 ? "Professional delivery with real-time tracking" : "Delivery confirmation and performance analytics"}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
 
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=delivery%20truck%20driver%20handing%20package%20to%20store%20owner%20retail%20delivery%20professional%20service%20friendly%20interaction%20bright%20daylight%20commercial%20photography&width=600&height=500&seq=distribution-process-001&orientation=portrait"
                  alt="Distribution Process"
                  className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Expand Your Distribution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Top Brands Syria for nationwide FMCG distribution
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/become-a-partner"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-brand-yellow text-brand-jet rounded-full font-semibold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span>Become a Partner</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </a>
            <a
              href="/services"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-brand-jet transition-all whitespace-nowrap cursor-pointer"
            >
              <span>All Services</span>
              <i className="ri-arrow-left-line text-xl"></i>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
