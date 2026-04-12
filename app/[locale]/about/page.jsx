"use client";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection";
import ScrollReveal from "../components/ScrollReveal";
import WhoWeAre from "./components/WhoWeAre";
import AboutMission from "./components/AboutMission";
import CoreValues from "./components/CoreValues";
import Ledaership from "./components/Ledaership";
import OurEdgeSection from "./components/OurEdgeSection";
import AboutCertifications from "./components/AboutCertifications";
import GrowthDirection from "./components/GrowthDirection";
import GlobalCTA from "../components/GlobalCTA";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <HeroSection
        img={"/images/about/about page banner.webp"}
        subtitle={t("about_us_nav")}
        title={t("who_we_are")}
        description1={t("who_we_are_subtitle1")}
        yellowText={t("who_we_are_subtitle2")}
        description2={t("who_we_are_subtitle3")} />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Vision & Mission Section */}
      <AboutMission />

      {/* Core Values Section */}
      <CoreValues />

      {/* Leadership Team Section */}
      <Ledaership />

      {/* Our Edge Section */}
      <OurEdgeSection />

      {/* Certifications Section */}
      <AboutCertifications />

      {/* Growth Direction Section */}
      <GrowthDirection />

      {/* CTA Section */}
      <GlobalCTA title={t("ready_to_partner")} subtitle={t("join_growing_portfolio")} contact={false} />
    </div>
  );
}
