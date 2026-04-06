"use client";
import { useTranslation } from "react-i18next";
import GlobalCTA from "../components/GlobalCTA";
import HeroSection from "../components/HeroSection";

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
        img={"https://readdy.ai/api/search-image?query=Syria%20map%20with%20distribution%20network%20routes%20connecting%20major%20cities%20Damascus%20Aleppo%20Homs%20Latakia%20logistics%20infrastructure%20modern%20business%20visualization%20professional%20corporate%20presentation%20blue%20teal%20orange%20color%20scheme&width=1920&height=600&seq=coverage-hero-main&orientation=landscape"}
        title={t("nationwide_fmcg")}
        yellowTitle={t("distribution_network")}
        subtitle={t("market_coverage_nav")}
        description1={t("market_penetration_desc_1")}
        yellowText={t("market_penetration_desc_2")}
        description2={t("market_penetration_desc_3")}
      />

      {/* Coverage Map Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=stylized%20map%20of%20Syria%20showing%20major%20cities%20Damascus%20Aleppo%20Homs%20Latakia%20with%20distribution%20network%20routes%20connecting%20cities%20clean%20modern%20infographic%20style%20professional%20business%20presentation%20blue%20and%20orange%20color%20scheme&width=600&height=600&seq=syria-map-coverage-001&orientation=squarish"
                alt="Syria Market Coverage Map"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-sm text-brand-charcoal font-medium mb-2">
                    {t("distribution_network")}
                  </p>
                  <p className="text-2xl font-bold text-black">
                    {t("all_major_syrian_cities")}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
                {t("coverage_areas")}
              </h2>
              {coverageAreas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-brand-paleblue rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-yellow"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
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
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-green-600">
                        {area.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Channels */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
              {t("distribution_channels")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              {t("multi_channel_dist")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-charcoal"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6">
                  <i className={`${channel.icon} text-4xl text-white`}></i>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">
                  {channel.title}
                </h3>
                <p className="text-base text-brand-charcoal leading-relaxed mb-6">
                  {channel.description}
                </p>
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-brand-paleblue rounded-full">
                  <i className="ri-check-line text-brand-charcoal"></i>
                  <span className="text-sm font-semibold text-black">
                    {channel.coverage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-4">
              {t("distribution_capabilities")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              {t("infrastructure_resources")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-brand-paleblue rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-brand-charcoal"
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center ${index % 2 === 0 ? "bg-brand-charcoal" : "bg-brand-yellow text-black"} rounded-xl mb-6 mx-auto`}
                >
                  <i className={`${capability.icon} text-3xl`}></i>
                </div>
                <p className="text-sm text-brand-charcoal font-medium mb-2">
                  {capability.title}
                </p>
                <p className="text-4xl font-bold text-black mb-2">
                  {capability.value}
                </p>
                <p className="text-sm text-brand-charcoal">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Excellence */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <span className="text-sm font-semibold text-brand-charcoal tracking-widest uppercase">
                  {t("logistics_nav")}
                </span>
                <div className="h-px w-16 bg-brand-charcoal"></div>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-black">
                {t("advanced_logistics_infra")}
              </h2>
              <p className="text-xl text-brand-charcoal leading-relaxed">
                {t("logistics_infra_desc")}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
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
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
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
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
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
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20FMCG%20warehouse%20with%20organized%20shelves%20delivery%20trucks%20loading%20dock%20professional%20logistics%20operation%20bright%20clean%20environment%20Syria%20Damascus%20distribution%20center&width=600&height=600&seq=logistics-warehouse-002&orientation=squarish"
                alt="Logistics Infrastructure"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
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
