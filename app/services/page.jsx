import { useTranslation } from "next-i18next";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = [
    {
      icon: "ri-truck-line",
      title: t("distribution"),
      description: t("dist_desc_detailed"),
      link: "/services/distribution",
      gradient: "from-slate-500 to-slate-600",
      iconBg: "bg-slate-500",
      borderColor: "border-slate-400",
    },
    {
      icon: "ri-route-line",
      title: t("logistics_supply_chain"),
      description: t("logistics_desc_detailed"),
      link: "/services/logistics",
      gradient: "from-gray-600 to-gray-700",
      iconBg: "bg-gray-600",
      borderColor: "border-gray-500",
    },
    {
      icon: "ri-store-3-line",
      title: t("merchandising_retail"),
      description: t("merchandising_desc_detailed"),
      link: "/services/merchandising",
      gradient: "from-zinc-500 to-zinc-600",
      iconBg: "bg-zinc-500",
      borderColor: "border-zinc-400",
    },
  ];

  const features = [
    {
      icon: "ri-map-pin-line",
      title: t("nationwide_coverage"),
      description: t("govs_across_syria"),
      color: "text-slate-600",
    },
    {
      icon: "ri-store-2-line",
      title: t("retail_network"),
      description: t("retail_partners_active"),
      color: "text-gray-600",
    },
    {
      icon: "ri-box-3-line",
      title: t("product_portfolio_subtitle"),
      description: t("product_lines_count"),
      color: "text-zinc-600",
    },
    {
      icon: "ri-time-line",
      title: t("delivery_speed"),
      description: t("delivery_times"),
      color: "text-slate-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-300 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-600 tracking-widest uppercase">
              {t("our_services_nav")}
            </span>
            <div className="h-px w-16 bg-gray-400"></div>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-brand-jet mb-6">
            {t("comprehensive_fmcg")}
            <br />
            <span className="text-gray-600">
              {t("distribution_solutions_title")}
            </span>
          </h1>

          <p className="text-2xl text-brand-charcoal leading-relaxed max-w-4xl">
            {t("end_to_end_dist")}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
                  <i
                    className={`${feature.icon} text-2xl ${feature.color}`}
                  ></i>
                </div>
                <p className="text-sm text-brand-charcoal font-medium mb-1">
                  {feature.title}
                </p>
                <p className="text-lg font-bold text-brand-jet">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("our_core_services")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              {t("integrated_dist")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor} hover:scale-105`}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center ${service.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>

                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-100 leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-white font-semibold hover:translate-x-2 rtl:hover:-translate-x-2 transition-transform cursor-pointer rtl:space-x-reverse"
                >
                  <span>{t("learn_more")}</span>
                  <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Excellence Section */}
      <section className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("service_excellence")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              {t("what_makes_stand_out")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-slate-500 hover:shadow-xl transition-all duration-300 rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-slate-100 rounded-xl mb-6">
                <i className="ri-speed-line text-2xl text-slate-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("fast_delivery")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("optimized_routes")}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-gray-500 hover:shadow-xl transition-all duration-300 rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl mb-6">
                <i className="ri-shield-check-line text-2xl text-gray-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("quality_assurance")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("quality_assurance_desc_detailed")}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-zinc-500 hover:shadow-xl transition-all duration-300 rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-zinc-100 rounded-xl mb-6">
                <i className="ri-line-chart-line text-2xl text-zinc-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("market_intelligence")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("real_time_sales")}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-slate-500 hover:shadow-xl transition-all duration-300 rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-slate-100 rounded-xl mb-6">
                <i className="ri-customer-service-2-line text-2xl text-slate-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("dedicated_support")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("prof_account_mgmt")}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-gray-500 hover:shadow-xl transition-all duration-300 rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-xl mb-6">
                <i className="ri-database-2-line text-2xl text-gray-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("inventory_mgmt")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("adv_systems_stockouts")}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-l-4 border-zinc-500 hover:shadow-xl transition-all duration-300 rtl:border-l-0 rtl:border-r-4">
              <div className="w-14 h-14 flex items-center justify-center bg-zinc-100 rounded-xl mb-6">
                <i className="ri-team-line text-2xl text-zinc-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("professional_team")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("trained_sales_force")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
              {t("our_process")}
            </h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              {t("streamlined_approach")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-slate-500 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("order_processing")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("efficient_order_mgmt")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gray-600 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("warehouse_picking")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("accurate_picking")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-zinc-500 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("route_optimization")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("smart_routing")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-slate-600 rounded-2xl mb-6 mx-auto">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-4">
                {t("delivery_support")}
              </h3>
              <p className="text-brand-charcoal leading-relaxed">
                {t("prof_delivery_merch")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-700 to-slate-700">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("ready_optimize")}
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t("partner_reliable_efficient")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/become-a-partner"
              className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-10 py-4 bg-brand-yellow text-brand-jet rounded-full font-semibold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span>{t("become_partner")}</span>
              <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center space-x-3 rtl:space-x-reverse px-10 py-4 bg-white text-brand-jet rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span>{t("contact_us")}</span>
              <i className="ri-phone-line text-xl"></i>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
