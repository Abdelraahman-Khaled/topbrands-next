"use client";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/HeroSection";
import GlobalCTA from "../../components/GlobalCTA";
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
      <HeroSection
        img="https://readdy.ai/api/search-image?query=modern%20marketing%20team%20brainstorming%20session%20creative%20office%20environment%20with%20digital%20screens%20showing%20analytics%20charts%20graphs%20professional%20business%20meeting%20colorful%20post%20it%20notes%20whiteboard%20strategy%20planning%20bright%20contemporary%20workspace&width=1920&height=800&seq=marketing-hero-001&orientation=landscape"
        subtitle="360 MARKETING"
        title="360 Marketing"
        yellowTitle="Solutions"
        description1="Complete marketing solutions with dedicated teams for marketing insights, strategic growth,"
        yellowText="and comprehensive brand management"
        description2="across all channels."
      />

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-jet mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-base text-brand-charcoal font-bold uppercase tracking-wider">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4 uppercase tracking-tight">Our Marketing Services</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                Comprehensive marketing solutions tailored to drive your brand's success
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="h-full bg-brand-paleblue rounded-[32px] p-8 md:p-10 border border-transparent hover:border-brand-yellow group block transition-all duration-300">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className={`${service.icon} text-2xl md:text-3xl text-brand-jet`}></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-jet mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-sm md:text-base text-brand-charcoal leading-relaxed font-medium">{service.description}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 lg:py-24 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Why Choose Our Marketing Solutions?</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                  Our dedicated marketing team combines local market expertise with global best practices to deliver results-driven campaigns that resonate with your target audience.
                </p>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {capabilities.map((cap, index) => (
                    <StaggerItem key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0">
                        <i className={`${cap.icon} text-xl md:text-2xl text-brand-jet`}></i>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-brand-jet mb-1">{cap.title}</h4>
                        <p className="text-xs md:text-sm text-brand-charcoal font-medium leading-relaxed">{cap.description}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="relative group">
              <img
                src="https://readdy.ai/api/search-image?query=marketing%20team%20analyzing%20data%20on%20large%20screen%20dashboard%20showing%20growth%20charts%20social%20media%20metrics%20brand%20performance%20analytics%20modern%20office%20environment%20professional%20business%20setting%20bright%20lighting&width=600&height=500&seq=marketing-capabilities-001&orientation=portrait"
                alt="Marketing Capabilities"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center rounded-[32px] shadow-2xl transition-transform group-hover:scale-[1.02] duration-500"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Our Approach</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                A systematic approach to delivering marketing excellence
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { id: 1, title: 'Discovery', desc: 'Understanding your brand, goals, and target audience' },
              { id: 2, title: 'Strategy', desc: 'Developing data-driven marketing strategies' },
              { id: 3, title: 'Execution', desc: 'Implementing campaigns across all channels' },
              { id: 4, title: 'Optimization', desc: 'Continuous improvement based on performance data' }
            ].map((step) => (
              <StaggerItem key={step.id} className="text-center group bg-brand-paleblue p-8 rounded-[32px] hover:bg-brand-yellow transition-all duration-300">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-jet text-brand-yellow rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-jet mb-3">{step.title}</h3>
                <p className="text-sm text-brand-charcoal font-medium leading-relaxed">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-12 md:py-16">
        <GlobalCTA
            title="Ready to Elevate Your Brand?"
            subtitle="Partner with Top Brands Syria for comprehensive 360 marketing solutions"
            contact={true}
        />
      </div>


    </div>
  );
}
