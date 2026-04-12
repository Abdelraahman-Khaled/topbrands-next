"use client";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import AnimatedCard from "../../components/AnimatedCard";
import HeroSection from "../../components/HeroSection";
import Subscribe from "../../components/Subscribe";

export default function DistributionPage() {
  const { t } = useTranslation();
  const features = [
    {
      icon: 'ri-store-3-line',
      title: t('channel1_title'),
      description: t('channel1_desc')
    },
    {
      icon: 'ri-building-2-line',
      title: t('channel2_title'),
      description: t('channel2_desc')
    },
    {
      icon: 'ri-archive-line',
      title: t('channel3_title'),
      description: t('channel3_desc')
    },
    {
      icon: 'ri-map-pin-line',
      title: t('channel4_title'),
      description: t('channel4_desc')
    }
  ];

  const stats = [
    { value: '14', label: t("stat1_label") },
    { value: '5000+', label: t("stat2_label") },
    { value: '98%', label: t("stat3_label") },
    { value: '24h', label: t("stat4_label") }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <HeroSection
        img="https://readdy.ai/api/search-image?query=aerial%20view%20of%20large%20distribution%20center%20with%20multiple%20delivery%20trucks%20loading%20docks%20warehouse%20facility%20professional%20logistics%20operations%20bright%20daylight%20industrial%20photography%20clean%20modern%20setting&width=1920&height=800&seq=distribution-hero-001&orientation=landscape"
        subtitle={t("distribution")}
        title={t("national_wide")}
        yellowTitle={t("dist_hero_yellow")}
        description1={t("dist_hero_desc")}
        yellowText={t("We_ensure_your_products")}
        description2={t("dist_hero_desc2")}
      />

      {/* Stats Section */}
      <ScrollReveal>
        <section className="py-12 lg:py-16 bg-brand-yellow">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-jet mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-xs md:text-base text-brand-charcoal font-bold  tracking-wider">{stat.label}</div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4">{t('distribution_channels')}</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                {t('multi_channel_dist')}
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <AnimatedCard className="h-full bg-brand-paleblue rounded-[32px] p-8 md:p-10 border border-transparent hover:border-brand-yellow group">
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6">{t('how_title')}</h2>
              <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                {t('how_subtitle')}
              </p>

              <StaggerContainer className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <StaggerItem key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-brand-yellow rounded-full text-brand-jet font-bold flex-shrink-0">
                      {i}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-jet mb-1  tracking-tight">
                        {t(`step${i}_title`) || (i === 1 ? "Order Processing" : i === 2 ? "Route Optimization" : i === 3 ? "Delivery Execution" : "Confirmation & Reporting")}
                      </h4>
                      <p className="text-sm md:text-base text-brand-charcoal font-medium">
                        {t(`step${i}_desc`) || (i === 1 ? "Efficient order management and inventory allocation" : i === 2 ? "Smart routing for fastest delivery times" : i === 3 ? "Professional delivery with real-time tracking" : "Delivery confirmation and performance analytics")}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="relative group">
              <img
                src="https://readdy.ai/api/search-image?query=delivery%20truck%20driver%20handing%20package%20to%20store%20owner%20retail%20delivery%20professional%20service%20friendly%20interaction%20bright%20daylight%20commercial%20photography&width=600&height=500&seq=distribution-process-001&orientation=portrait"
                alt="Distribution Process"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center rounded-[32px] shadow-2xl transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Subscribe
        title={t("cta_title")}
        becomePartner={true}
      />
    </div>
  );
}
