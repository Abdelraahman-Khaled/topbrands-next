"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GlobalCTA from "../components/GlobalCTA";
import HeroSection from "../components/HeroSection";
import ScrollReveal from "../components/ScrollReveal";
import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";

export default function MarketCoveragePage() {
  const { t } = useTranslation();

  const coverageAreas = [
    {
      city: t("damascus"),
      region: t("capital"),
      status: t("full_coverage"),
      icon: "ri-building-line",
    },
    {
      city: t("aleppo"),
      region: t("northern_syria"),
      status: t("full_coverage"),
      icon: "ri-building-2-line",
    },
    {
      city: t("homs"),
      region: t("central_syria"),
      status: t("full_coverage"),
      icon: "ri-building-3-line",
    },
    {
      city: t("latakia"),
      region: t("coastal_region"),
      status: t("full_coverage"),
      icon: "ri-ship-line",
    },
    {
      city: t("hama"),
      region: t("central_syria"),
      status: t("full_coverage"),
      icon: "ri-building-4-line",
    },
    {
      city: t("tartus"),
      region: t("coastal_region"),
      status: t("full_coverage"),
      icon: "ri-anchor-line",
    },
  ];

  const channels = [
    {
      icon: "ri-store-2-line",
      title: t("traditional_retail"),
      description: t("neighborhood_stores"),
      coverage: t("outlets_count"),
    },
    {
      icon: "ri-shopping-cart-2-line",
      title: t("modern_trade"),
      description: t("supermarkets_hypermarkets"),
      coverage: t("stores_count"),
    },
    {
      icon: "ri-store-3-line",
      title: t("wholesale"),
      description: t("wholesale_distributors"),
      coverage: t("partners_count"),
    },
  ];

  const capabilities = [
    {
      icon: "ri-truck-line",
      title: t("fleet_size"),
      value: t("fifty_plus"),
      description: t("delivery_vehicles"),
    },
    {
      icon: "ri-building-line",
      title: t("warehouses"),
      value: t("five_warehouses"),
      description: t("strategic_locations"),
    },
    {
      icon: "ri-team-line",
      title: t("sales_team"),
      value: t("one_hundred_plus"),
      description: t("professionals"),
    },
    {
      icon: "ri-map-pin-line",
      title: t("coverage"),
      value: t("nationwide"),
      description: t("all_major_cities"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        img={"/images/market-coverage/banner.webp"}
        title={t("nationwide_fmcg")}
        yellowTitle={t("distribution_network")}
        subtitle={t("market_coverage_nav")}
        description1={t("market_penetration_desc_1")}
        yellowText={t("market_penetration_desc_2")}
        description2={t("market_penetration_desc_3")}
      />

      {/* Coverage Map Section */}
      <ScrollReveal delay={0.1}>
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] sm:aspect-video md:aspect-auto md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  src="/images/market-coverage/map.webp"
                  alt="Syria Market Coverage Map"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8"
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-xl border border-white/20">
                    <p className="text-xs md:text-sm text-brand-charcoal font-bold mb-1 md:mb-2 uppercase tracking-wider">
                      {t("distribution_network")}
                    </p>
                    <p className="text-lg md:text-2xl font-bold text-black leading-tight">
                      {t("all_major_syrian_cities")}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
                  {t("coverage_areas")}
                </h2>
                <StaggerContainer className="space-y-4 md:space-y-6">
                  {coverageAreas.map((area, index) => (
                    <StaggerItem key={index}>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="group bg-brand-paleblue rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-yellow cursor-default"
                      >
                        <div className="flex items-center space-x-4 ">
                          <div className="w-14 h-14 flex items-center justify-center bg-brand-yellow rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <i className={`${area.icon} text-2xl text-black`}></i>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-black mb-1">
                              {area.city}
                            </h3>
                            <p className="text-sm text-brand-charcoal">
                              {area.region}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2 ">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                            ></motion.div>
                            <span className="text-sm font-medium text-green-600">
                              {area.status}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Distribution Channels */}
      <ScrollReveal delay={0.2}>
        <section className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-white to-brand-paleblue/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-black mb-4 md:mb-6">
                {t("distribution_channels")}
              </h2>
              <p className="text-base md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium leading-relaxed">
                {t("multi_channel_dist")}
              </p>
            </div>

            <StaggerContainer className="grid lg:grid-cols-3 gap-6 lg:gap-10">
              {channels.map((channel, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-[32px] p-6 md:p-8 lg:p-12 hover:shadow-2xl transition-all duration-300 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-charcoal h-full flex flex-col"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6 md:mb-8">
                      <i className={`${channel.icon} text-3xl md:text-4xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                      {channel.title}
                    </h3>
                    <p className="text-base text-brand-charcoal leading-relaxed mb-8 flex-1">
                      {channel.description}
                    </p>
                    <div className="inline-flex items-center space-x-3  px-5 py-2.5 bg-brand-paleblue rounded-full w-fit">
                      <i className="ri-check-line text-brand-charcoal font-bold"></i>
                      <span className="text-sm font-bold text-black">
                        {channel.coverage}
                      </span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Capabilities Section */}
      <ScrollReveal delay={0.1}>
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-black mb-4 md:mb-6">
                {t("distribution_capabilities")}
              </h2>
              <p className="text-base md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium leading-relaxed">
                {t("infrastructure_resources")}
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {capabilities.map((capability, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-brand-paleblue rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-charcoal h-full"
                  >
                    <div
                      className={`w-16 h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-brand-charcoal" : "bg-brand-yellow text-black"} rounded-xl mb-6 mx-auto`}
                    >
                      <i className={`${capability.icon} text-3xl`}></i>
                    </div>
                    <p className="text-sm text-brand-charcoal font-medium mb-2">
                      {capability.title}
                    </p>
                    {
                      capability.value === t("nationwide") ?
                        <p className="text-xl md:text-2xl xl:text-3xl font-bold text-black mb-2">
                          {capability.value}
                        </p>
                        :
                        <p className="text-4xl font-bold text-black mb-2">
                          {capability.value}
                        </p>
                    }

                    <p className="text-sm text-brand-charcoal">
                      {capability.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* Logistics Excellence */}
      <section className="py-16 md:py-24 lg:py-32 bg-linear-to-t from-white to-brand-paleblue/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center space-x-4  mb-4 md:mb-6">
                <span className="text-xs md:text-sm font-bold text-brand-charcoal tracking-widest uppercase">
                  {t("logistics_nav")}
                </span>
                <div className="h-px w-12 md:w-16 bg-brand-charcoal"></div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
                {t("advanced_logistics_infra")}
              </h2>
              <p className="text-lg md:text-xl text-brand-charcoal leading-relaxed font-medium">
                {t("logistics_infra_desc")}
              </p>

              <StaggerContainer className="space-y-4">
                <StaggerItem className="flex items-start space-x-4 ">
                  <div className="w-8 h-8 flex items-center justify-center bg-brand-yellow rounded-lg mt-1 shrink-0">
                    <i className="ri-check-line text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">
                      {t("temp_controlled_storage")}
                    </h4>
                    <p className="text-base text-brand-charcoal">
                      {t("specialized_facilities")}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start space-x-4 ">
                  <div className="w-8 h-8 flex items-center justify-center bg-brand-yellow rounded-lg mt-1 shrink-0">
                    <i className="ri-check-line text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">
                      {t("real_time_tracking")}
                    </h4>
                    <p className="text-base text-brand-charcoal">
                      {t("gps_enabled_fleet")}
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem className="flex items-start space-x-4 ">
                  <div className="w-8 h-8 flex items-center justify-center bg-brand-yellow rounded-lg mt-1 shrink-0">
                    <i className="ri-check-line text-black"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">
                      {t("optimized_routes")}
                    </h4>
                    <p className="text-base text-brand-charcoal">
                      {t("efficient_delivery_planning")}
                    </p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="/images/market-coverage/section1.webp"
                alt="Logistics Infrastructure"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA
        title={t("expand_market_reach")}
        subtitle={t("join_growing_portfolio")}
        btnText={t("become_a_partner")}
        btnLink="/become-a-partner"
      />
    </div>
  );
}
