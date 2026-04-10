"use client";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import AnimatedCard from "../../components/AnimatedCard";

export default function MarketingPage() {
  const { t } = useTranslation();
  const services = [
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Market Research & Analysis',
      description: 'In-depth market research and consumer behavior analysis to identify opportunities and optimize strategies.'
    },
    {
      icon: 'ri-megaphone-line',
      title: 'Brand Activation',
      description: 'Creative brand activation campaigns that engage consumers and drive brand awareness across all touchpoints.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including social media, content marketing, and online advertising.'
    },
    {
      icon: 'ri-store-3-line',
      title: 'Trade Marketing',
      description: 'Strategic trade marketing initiatives to boost product visibility and sales at retail points.'
    },
    {
      icon: 'ri-team-line',
      title: 'Promoter Management',
      description: 'Professional promoter teams trained to represent your brand and drive in-store conversions.'
    },
    {
      icon: 'ri-pie-chart-line',
      title: 'Analytics & Reporting',
      description: 'Real-time analytics and comprehensive reporting to measure campaign performance and ROI.'
    }
  ];

  const capabilities = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Strategic Planning',
      description: 'Data-driven marketing strategies aligned with your business objectives'
    },
    {
      icon: 'ri-focus-3-line',
      title: 'Consumer Insights',
      description: 'Deep understanding of local consumer preferences and behaviors'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Campaign Execution',
      description: 'Flawless execution of marketing campaigns across all channels'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Tracking',
      description: 'Continuous monitoring and optimization for maximum results'
    }
  ];

  const stats = [
    { value: '500+', label: 'Campaigns Executed' },
    { value: '50+', label: 'Brand Partners' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '3x', label: 'Average ROI' }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20marketing%20team%20brainstorming%20session%20creative%20office%20environment%20with%20digital%20screens%20showing%20analytics%20charts%20graphs%20professional%20business%20meeting%20colorful%20post%20it%20notes%20whiteboard%20strategy%20planning%20bright%20contemporary%20workspace&width=1920&height=800&seq=marketing-hero-001&orientation=landscape"
            alt="360 Marketing Solutions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-semibold text-brand-yellow tracking-widest uppercase">/ 360 MARKETING</span>
            <div className="h-px w-16 bg-brand-yellow"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            360 Marketing
            <br />
            <span className="text-brand-yellow">Solutions</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl">
            Complete marketing solutions with dedicated teams for marketing insights, strategic growth, and comprehensive brand management across all channels.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-brand-jet mb-2">{stat.value}</div>
                <div className="text-base text-brand-charcoal font-medium">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Our Marketing Services</h2>
              <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
                Comprehensive marketing solutions tailored to drive your brand's success
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full bg-brand-paleblue rounded-3xl p-10 border border-transparent hover:border-brand-yellow group block">
                  <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-3xl text-brand-jet`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-jet mb-4">{service.title}</h3>
                  <p className="text-base text-brand-charcoal leading-relaxed">{service.description}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Why Choose Our Marketing Solutions?</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                  Our dedicated marketing team combines local market expertise with global best practices to deliver results-driven campaigns that resonate with your target audience.
                </p>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {capabilities.map((cap, index) => (
                    <StaggerItem key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0">
                        <i className={`${cap.icon} text-2xl text-brand-jet`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-jet mb-1">{cap.title}</h4>
                        <p className="text-sm text-brand-charcoal">{cap.description}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=marketing%20team%20analyzing%20data%20on%20large%20screen%20dashboard%20showing%20growth%20charts%20social%20media%20metrics%20brand%20performance%20analytics%20modern%20office%20environment%20professional%20business%20setting%20bright%20lighting&width=600&height=500&seq=marketing-capabilities-001&orientation=portrait"
                alt="Marketing Capabilities"
                className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Our Approach</h2>
              <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
                A systematic approach to delivering marketing excellence
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              { id: 1, title: 'Discovery', desc: 'Understanding your brand, goals, and target audience' },
              { id: 2, title: 'Strategy', desc: 'Developing data-driven marketing strategies' },
              { id: 3, title: 'Execution', desc: 'Implementing campaigns across all channels' },
              { id: 4, title: 'Optimization', desc: 'Continuous improvement based on performance data' }
            ].map((step) => (
              <StaggerItem key={step.id} className="text-center group">
                <div className="w-20 h-20 flex items-center justify-center bg-brand-yellow rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-brand-jet">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-jet mb-3">{step.title}</h3>
                <p className="text-brand-charcoal">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal">
        <ScrollReveal className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Top Brands Syria for comprehensive 360 marketing solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/become-a-partner"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-brand-yellow text-brand-jet rounded-full font-semibold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span>Get Started</span>
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
        </ScrollReveal>
      </section>


    </div>
  );
}
