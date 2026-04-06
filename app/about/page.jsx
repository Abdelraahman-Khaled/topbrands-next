"use client";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: "ri-eye-line",
      title: t("transparency"),
      description: t("transparency_desc"),
    },
    {
      icon: "ri-customer-service-2-line",
      title: t("customer_commitment"),
      description: t("customer_commitment_desc"),
    },
    {
      icon: "ri-shield-check-line",
      title: t("reliability"),
      description: t("reliability_desc"),
    },
    {
      icon: "ri-team-line",
      title: t("partnership_mindset"),
      description: t("partnership_mindset_desc"),
    },
    {
      icon: "ri-line-chart-line",
      title: t("market_excellence"),
      description: t("market_excellence_desc"),
    },
  ];

  const leadership = [
    {
      name: t("leader_1_name"),
      position: t("leader_1_pos"),
      image:
        "https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20business%20executive%20CEO%20in%20formal%20suit%20confident%20leadership%20portrait%20office%20background%20professional%20corporate%20photography&width=400&height=500&seq=leader1&orientation=portrait",
      bio: t("leader_1_bio"),
    },
    {
      name: t("leader_2_name"),
      position: t("leader_2_pos"),
      image:
        "https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businesswoman%20executive%20in%20formal%20business%20attire%20confident%20leadership%20portrait%20modern%20office%20background%20corporate%20photography&width=400&height=500&seq=leader2&orientation=portrait",
      bio: t("leader_2_bio"),
    },
    {
      name: t("leader_3_name"),
      position: t("leader_3_pos"),
      image:
        "https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20male%20business%20executive%20in%20navy%20suit%20sales%20director%20confident%20portrait%20modern%20office%20setting%20corporate%20photography&width=400&height=500&seq=leader3&orientation=portrait",
      bio: t("leader_3_bio"),
    },
  ];

  const certifications = [
    {
      icon: "ri-shield-check-line",
      title: t("iso_cert"),
      description: t("iso_cert_desc"),
    },
    {
      icon: "ri-restaurant-line",
      title: t("food_safety"),
      description: t("food_safety_desc"),
    },
    {
      icon: "ri-truck-line",
      title: t("cold_chain"),
      description: t("cold_chain_desc"),
    },
    {
      icon: "ri-file-list-3-line",
      title: t("reg_compliance"),
      description: t("reg_compliance_desc"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20FMCG%20distribution%20company%20headquarters%20building%20professional%20corporate%20office%20exterior%20Damascus%20Syria%20blue%20sky%20contemporary%20architecture%20clean%20lines%20glass%20facade%20business%20district&width=1920&height=600&seq=about-hero-main&orientation=landscape"
            alt={t("contact_accent")}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent rtl:bg-gradient-to-l rtl:from-black/70 rtl:via-black/50 rtl:to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
            <span className="text-sm font-bold text-brand-teal tracking-widest uppercase">
              {t("about_us_nav")}
            </span>
            <div className="h-px w-16 bg-brand-teal"></div>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            {t("who_we_are")}
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
            {t("who_we_are_subtitle1")}
            <strong className="font-bold text-brand-yellow font-almarai">
              {t("who_we_are_subtitle2")}
            </strong>
            {t("who_we_are_subtitle3")}
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20FMCG%20distribution%20warehouse%20interior%20with%20organized%20product%20shelves%20professional%20logistics%20operation%20bright%20clean%20environment%20workers%20managing%20inventory%20Syria%20Damascus%20professional%20corporate%20photography&width=600&height=600&seq=about-warehouse-001&orientation=squarish"
                alt={t("contact_accent")}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                {t("connect_brands")}
              </p>
              <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                {t("established_2025")}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-brand-yellow rounded-2xl p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-jet rounded-xl mb-4">
                    <i className="ri-building-line text-2xl text-brand-yellow"></i>
                  </div>
                  <p className="text-sm text-brand-charcoal font-bold mb-1">
                    {t("group_heritage")}
                  </p>
                  <p className="text-3xl font-bold text-brand-jet">
                    {t("years_market")}
                  </p>
                </div>

                <div className="bg-brand-paleblue rounded-2xl p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-charcoal rounded-xl mb-4">
                    <i className="ri-map-pin-line text-2xl text-brand-yellow"></i>
                  </div>
                  <p className="text-sm text-brand-charcoal font-bold mb-1">
                    {t("coverage_label")}
                  </p>
                  <p className="text-3xl font-bold text-brand-jet">
                    {t("nationwide")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6">
                <i className="ri-eye-line text-3xl text-brand-jet"></i>
              </div>
              <h2 className="text-4xl font-bold text-brand-jet mb-6">
                {t("vision")}
              </h2>
              <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                {t("vision_desc1")}
                <strong className="font-bold text-brand-jet">
                  {t("vision_desc2")}
                </strong>
                {t("vision_desc3")}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6">
                <i className="ri-compass-3-line text-3xl text-brand-yellow"></i>
              </div>
              <h2 className="text-4xl font-bold text-brand-jet mb-6">
                {t("mission")}
              </h2>
              <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                {t("mission_desc1")}
                <strong className="font-bold text-brand-jet">
                  {t("mission_desc2")}
                </strong>
                {t("mission_desc3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("core_values")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
              {t("core_values_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-brand-paleblue rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-teal"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-brand-teal rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-brand-jet mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("leadership_team")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
              {t("leadership_team_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-jet mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-brand-yellow font-bold mb-4">
                    {leader.position}
                  </p>
                  <p className="text-brand-charcoal leading-relaxed font-medium">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Edge Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("competitive_edge")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
              {t("competitive_edge_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-paleblue rounded-2xl p-8 border-l-4 border-brand-coral rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-coral rounded-xl mb-6">
                <i className="ri-route-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("optimized_network")}
              </h3>
              <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                {t("optimized_network_desc")}
              </p>
            </div>

            <div className="bg-brand-paleblue rounded-2xl p-8 border-l-4 border-brand-teal rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-teal rounded-xl mb-6">
                <i className="ri-database-2-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("advanced_inventory")}
              </h3>
              <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                {t("advanced_inventory_desc")}
              </p>
            </div>

            <div className="bg-brand-paleblue rounded-2xl p-8 border-l-4 border-brand-teal rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-teal rounded-xl mb-6">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("sales_force")}
              </h3>
              <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                {t("sales_force_desc")}
              </p>
            </div>

            <div className="bg-brand-paleblue rounded-2xl p-8 border-l-4 border-brand-coral rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-brand-coral rounded-xl mb-6">
                <i className="ri-line-chart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("market_intelligence")}
              </h3>
              <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                {t("market_intelligence_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("certs_standards")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
              {t("certs_standards_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-xl mb-4 mx-auto">
                  <i className={`${cert.icon} text-3xl text-brand-jet`}></i>
                </div>
                <h3 className="text-lg font-bold text-brand-jet mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-brand-charcoal leading-relaxed font-medium">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Al Barengi Group Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="bg-gradient-to-br from-brand-charcoal to-brand-jet rounded-3xl p-12 lg:p-16 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-brand-yellow rounded-2xl mb-8 mx-auto">
                <i className="ri-building-4-line text-4xl text-brand-jet"></i>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t("al_barengi_part")}
              </h2>
              <p className="text-xl leading-relaxed mb-6 font-medium">
                {t("al_barengi_desc1")}
                <strong className="text-brand-yellow">
                  {t("al_barengi_desc2")}
                </strong>
                {t("al_barengi_desc3")}
                <strong className="text-brand-yellow">
                  {t("al_barengi_desc4")}
                </strong>
                {t("al_barengi_desc5")}
              </p>
              <p className="text-lg leading-relaxed text-gray-300 font-medium">
                {t("al_barengi_heritage")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Direction Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-charcoal rounded-full blur-3xl opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-brand-yellow rounded-2xl mb-8 mx-auto">
              <i className="ri-rocket-line text-4xl text-brand-jet"></i>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-8">
              {t("growth_direction")}
            </h2>
            <p className="text-2xl text-brand-charcoal leading-relaxed mb-6 font-medium">
              {t("growth_direction_desc1")}
              <strong className="font-bold text-brand-jet">
                {t("growth_direction_desc2")}
              </strong>
              {t("growth_direction_desc3")}
            </p>
            <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
              {t("growth_long_term")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-charcoal">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("ready_to_partner")}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium">
            {t("join_partners")}
          </p>
          <a
            href="/become-a-partner"
            className="inline-flex items-center gap-3 px-10 py-4 bg-brand-coral text-white rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <span>{t("become_partner")}</span>
            <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
