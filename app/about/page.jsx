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
      <ScrollReveal>
        <WhoWeAre />
      </ScrollReveal>

      {/* Vision & Mission Section */}
      <ScrollReveal>
        <AboutMission />
      </ScrollReveal>

      {/* Core Values Section */}
      <ScrollReveal>
        <CoreValues />
      </ScrollReveal>

      {/* Leadership Team Section */}
      <ScrollReveal>
        <Ledaership />
      </ScrollReveal>

      {/* Our Edge Section */}
      <ScrollReveal>
        <OurEdgeSection />
      </ScrollReveal>

      {/* Certifications Section */}
      <ScrollReveal>
        <AboutCertifications />
      </ScrollReveal>

      {/* Al Barengi Group Section */}
      {/* <section className="py-20  bg-white">
        <div className="max-w-7xl mx-auto px-8 ">
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
      </section> */}

      {/* Growth Direction Section */}
      <ScrollReveal delay={0.2}>
        <GrowthDirection />
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={0.3}>
        <GlobalCTA title={t("ready_to_partner")} subtitle={t("join_growing_portfolio")} contact={false} />
      </ScrollReveal>
    </div>
  );
}
