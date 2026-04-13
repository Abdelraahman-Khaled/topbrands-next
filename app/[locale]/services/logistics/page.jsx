"use client";
import { useTranslation } from "react-i18next";
import HeroSection from "../../components/HeroSection";
import GlobalCTA from "../../components/GlobalCTA";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import AnimatedCard from "../../components/AnimatedCard";

export default function LogisticsPage() {
  const { t } = useTranslation();
  const features = [
    {
      icon: 'ri-building-4-line',
      title: t('feature_modern_warehouse_title'),
      description: t('feature_modern_warehouse_desc')
    },
    {
      icon: 'ri-temp-cold-line',
      title: t('feature_temp_control_title'),
      description: t('feature_temp_control_desc')
    },
    {
      icon: 'ri-route-line',
      title: t('feature_route_opt_title'),
      description: t('feature_route_opt_desc')
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: t('feature_inv_mgmt_title'),
      description: t('feature_inv_mgmt_desc')
    }
  ];

  const capabilities = [
    { icon: 'ri-truck-line', label: t('cap_fleet_mgmt') },
    { icon: 'ri-stack-line', label: t('cap_bulk_storage') },
    { icon: 'ri-time-line', label: t('cap_same_day') },
    { icon: 'ri-shield-check-line', label: t('cap_quality_control') },
    { icon: 'ri-file-list-3-line', label: t('cap_documentation') },
    { icon: 'ri-customer-service-line', label: t('cap_support') }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        img="https://readdy.ai/api/search-image?query=modern%20warehouse%20interior%20with%20organized%20shelving%20forklifts%20logistics%20operations%20professional%20industrial%20photography%20bright%20lighting%20clean%20facility%20FMCG%20storage&width=1920&height=800&seq=logistics-hero-001&orientation=landscape"
        subtitle={t('logistics_hero_subtitle')}
        title={t('logistics_hero_title')}
        yellowTitle={t('logistics_hero_yellow_title')}
        description1={t('logistics_hero_desc')}
        yellowText={t('logistics_hero_yellow_text')}
        description2={t('logistics_hero_desc2')}
      />

      {/* Capabilities Bar */}
      <ScrollReveal>
        <section className="py-12 bg-brand-yellow">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 flex items-center justify-center bg-brand-jet rounded-2xl mb-3 shadow-lg group-hover:-translate-y-1  transition-all duration-300">
                    <i className={`${cap.icon} text-2xl text-brand-yellow`}></i>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-brand-jet uppercase tracking-wider group-hover:text-brand-charcoal transition-colors">{cap.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-4 uppercase tracking-tight">{t('logistics_solutions_title')}</h2>
              <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                {t('logistics_solutions_desc')}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="h-full bg-brand-paleblue rounded-[32px] p-8 md:p-10  transition-all duration-500 border border-transparent  group">
                  <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6 group-hover:rotate-6  transition-all duration-300">
                    <i className={`${feature.icon} text-2xl md:text-3xl text-brand-yellow`}></i>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-brand-jet mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-sm md:text-base text-brand-charcoal leading-relaxed font-medium">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-16 lg:py-24 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="relative order-2 lg:order-1 group overflow-hidden rounded-[32px]">
              <img
                src="/images/logistics/warehouse.webp"
                alt="Warehouse Operations"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </ScrollReveal>

            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6">{t('warehouse_excellence_title')}</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                  {t('warehouse_excellence_desc')}
                </p>
              </ScrollReveal>

              <StaggerContainer className="space-y-4">
                {[
                  t('warehouse_point1'),
                  t('warehouse_point2'),
                  t('warehouse_point3'),
                  t('warehouse_point4')
                ].map((text, i) => (
                  <StaggerItem key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-300 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0 group-hover:rotate-12 transition-transform">
                      <i className="ri-checkbox-circle-line text-xl md:text-2xl text-brand-jet"></i>
                    </div>
                    <span className="text-base md:text-lg text-brand-jet font-bold">{text}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-jet mb-6 uppercase tracking-tight">{t('fleet_transport_title')}</h2>
                <p className="text-lg text-brand-charcoal mb-8 leading-relaxed font-medium">
                  {t('fleet_transport_desc')}
                </p>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { icon: 'ri-truck-line', title: t('fleet_heavy_trucks_title'), desc: t('fleet_heavy_trucks_desc') },
                  { icon: 'ri-car-line', title: t('fleet_vans_title'), desc: t('fleet_vans_desc') },
                  { icon: 'ri-temp-cold-line', title: t('fleet_refrigerated_title'), desc: t('fleet_refrigerated_desc') },
                  { icon: 'ri-motorbike-line', title: t('fleet_express_title'), desc: t('fleet_express_desc') }
                ].map((item, i) => (
                  <StaggerItem key={i} className="bg-brand-paleblue p-6 rounded-[24px] text-center border border-transparent hover:bg-white hover:shadow-lg  transition-all duration-500 group">
                    <i className={`${item.icon} text-3xl md:text-4xl text-brand-jet mb-3 block transition-transform `}></i>
                    <h4 className="text-base md:text-lg font-bold text-brand-jet group-hover:text-brand-charcoal transition-colors">{item.title}</h4>
                    <p className="text-xs md:text-sm text-brand-charcoal font-medium">{item.desc}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <ScrollReveal className="relative group overflow-hidden rounded-[32px]" delay={0.2}>
              <img
                src="https://readdy.ai/api/search-image?query=fleet%20of%20delivery%20trucks%20parked%20in%20row%20at%20logistics%20facility%20professional%20commercial%20vehicles%20white%20trucks%20bright%20daylight%20clean%20industrial%20setting&width=600&height=500&seq=logistics-fleet-001&orientation=portrait"
                alt="Fleet Management"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal className="py-12 md:py-16">
        <GlobalCTA
          title={t('logistics_cta_title')}
          subtitle={t('logistics_cta_subtitle')}
          contact={true}
        />
      </ScrollReveal>
    </div>
  );
}
