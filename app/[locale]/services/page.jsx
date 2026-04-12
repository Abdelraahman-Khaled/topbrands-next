"use client";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import ServicesGrid from "./components/ServicesCards";
import ExcellenceSection from "./components/ServiceExellence";
import GlobalCTA from "../components/GlobalCTA";



import ScrollReveal from "../components/ScrollReveal";

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
      <HeroSection img={"/images/services/hero.webp"}
        title={t("Integrated FMCG")}
        yellowTitle={t("distribution_solutions_title")}
        subtitle={t("our_services")}
        description1={t("services_hero_desc_1")}
        yellowText={t("services_hero_desc_2")}
        description2={t("services_hero_desc_3")}
      />
      <ServicesGrid />
      <ExcellenceSection />
      <GlobalCTA title={t("services_cta_title")} subtitle={t("services_cta_desc")} contact={true} />
    </div>
  );
}
