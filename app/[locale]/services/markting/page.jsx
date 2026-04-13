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
      title: t('marketing_services_research_title'),
      description: t('marketing_services_research_desc')
    },
    {
      icon: 'ri-megaphone-line',
      title: t('marketing_services_activation_title'),
      description: t('marketing_services_activation_desc')
    },
    {
      icon: 'ri-smartphone-line',
      title: t('marketing_services_digital_title'),
      description: t('marketing_services_digital_desc')
    },
    {
      icon: 'ri-store-3-line',
      title: t('marketing_services_trade_title'),
      description: t('marketing_services_trade_desc')
    },
    {
      icon: 'ri-team-line',
      title: t('marketing_services_promoter_title'),
      description: t('marketing_services_promoter_desc')
    },
    {
      icon: 'ri-pie-chart-line',
      title: t('marketing_services_analytics_title'),
      description: t('marketing_services_analytics_desc')
    }
  ];

  const capabilities = [
    {
      icon: 'ri-lightbulb-line',
      title: t('cap_strategic_planning_title'),
      description: t('cap_strategic_planning_desc')
    },
    {
      icon: 'ri-focus-3-line',
      title: t('cap_consumer_insights_title'),
      description: t('cap_consumer_insights_desc')
    },
    {
      icon: 'ri-rocket-line',
      title: t('cap_campaign_execution_title'),
      description: t('cap_campaign_execution_desc')
    },
    {
      icon: 'ri-line-chart-line',
      title: t('cap_performance_tracking_title'),
      description: t('cap_performance_tracking_desc')
    }
  ];

  const stats = [
    { value: '500+', label: t('stat_campaigns') },
    { value: '50+', label: t('stat_partners') },
    { value: '95%', label: t('stat_satisfaction') },
    { value: '3x', label: t('stat_roi') }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <HeroSection
        img="/images/markting/hero-img.webp"
        subtitle={t('mkt_hero_title')}
        title={t('mkt_hero_title')}
        yellowTitle={t('mkt_hero_yellow')}
        description1={t('marketing_hero_desc1')}
        yellowText={t('marketing_hero_yellow_text')}
        description2={t('marketing_hero_desc2')}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4 uppercase tracking-tight">{t('our_marketing_services')}</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                {t('marketing_services_subtitle')}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6">{t('why_choose_marketing_title')}</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                  {t('why_choose_marketing_desc')}
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
                src="/images/markting/marketing solutions.webp"
                alt="Marketing Capabilities"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center rounded-[32px] "
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4">{t('our_approach_title')}</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                {t('our_approach_subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { id: 1, title: t('step_discovery_title'), desc: t('step_discovery_desc') },
              { id: 2, title: t('step_strategy_title'), desc: t('step_strategy_desc') },
              { id: 3, title: t('step_execution_title'), desc: t('step_execution_desc') },
              { id: 4, title: t('step_optimization_title'), desc: t('step_optimization_desc') }
            ].map((step) => (
              <StaggerItem key={step.id} className="text-center group bg-brand-paleblue p-8 rounded-[32px] hover:bg-brand-yellow transition-all duration-500">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-jet text-brand-yellow rounded-full mx-auto mb-6 transition-transform">
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
          title={t('marketing_cta_title')}
          subtitle={t('marketing_cta_subtitle')}
          contact={true}
        />
      </div>


    </div>
  );
}
