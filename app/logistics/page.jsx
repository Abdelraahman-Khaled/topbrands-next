'use client'
import React from 'react';
import { Warehouse, Thermometer, Map, Box, CheckCircle2, Truck, ClipboardList, Van, CarIcon, Bike, Motorbike } from 'lucide-react';
import { useTranslation } from "react-i18next";
import WhyPartnerSection from './components/WhyPartnerSection';
import HeroSection from '../components/HeroSection';
import Subscribe from '../components/Subscribe';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer from '../components/StaggerContainer';
import StaggerItem from '../components/StaggerItem';
// SECTION: Hero with Icon Ribbon

const LogisticsHero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative">
      <div className="relative h-[450px] w-full overflow-hidden bg-[#0B1411]">
        <img
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-40"
          alt="Logistics"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24">
          <h1 className="text-5xl font-bold text-white max-w-2xl">
            {t('log_hero_title')} <span className="text-[#F7E326]">{t('log_hero_yellow')}</span>
          </h1>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl leading-relaxed">
            {t('log_hero_desc')}
          </p>
        </div>
      </div>

      {/* Icon Navigation Ribbon */}
      <div className="bg-[#F7E326] py-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 md:gap-16 px-6">
          {[Warehouse, Truck, Thermometer, Map, Box, ClipboardList].map((Icon, i) => (
            <div key={i} className="flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
              <Icon size={28} className="text-black" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SECTION: Solutions Grid
const LogisticsSolutions = () => {
  const cards = [
    { id: 1, icon: Warehouse }, { id: 2, icon: Thermometer },
    { id: 3, icon: Map }, { id: 4, icon: Box }
  ];
  const { t } = useTranslation();

  return (
    <ScrollReveal>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="md:text-5xl text-4xl font-bold text-black mb-4">{t('log_solutions_title')}</h2>
          <p className="text-brand-charcoal mb-16">{t('log_solutions_subtitle')}</p>
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {cards.map((card) => (
              <StaggerItem key={card.id}>
                <div className="h-full bg-[#DEE3EB] p-10 rounded-2xl flex flex-col items-start text-left gap-4 shadow-sm">
                  <div className="bg-[#4B4B4B] p-3 rounded-lg text-brand-yellow">
                    <card.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{t(`log_card${card.id}_title`)}</h3>
                  <p className="text-brand-charcoal text-base">{t(`log_card${card.id}_desc`)}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </ScrollReveal>
  );
};

// SECTION: Warehouse Excellence (Points)
const WarehouseExcellence = () => {
  const { t } = useTranslation();
  return (
    <ScrollReveal>
      <section className="py-24 bg-[#DEE3EB]">
        <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1000"
            className="rounded-3xl shadow-xl h-full object-cover"
            alt="Forklift"
          />
          <div>
            <h2 className="text-5xl  font-bold text-black mb-4">{t('wh_excellence_title')}</h2>
            <p className="text-brand-charcoal mb-8">{t('wh_excellence_desc')}</p>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl">
                  <div className="bg-[#F7E326] p-2 rounded-lg">
                    <CheckCircle2 size={20} className="text-black" />
                  </div>
                  <p className="font-medium text-black text-lg">{t(`wh_point${i}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

const icons = [
  { id: 1, src: "/images/icons/truck.png" },
  { id: 2, src: "/images/icons/van.png" },
  { id: 3, src: "/images/icons/thermometer.png" },
  { id: 4, src: "/images/icons/bike.png" },
]
// SECTION: Fleet
const FleetSection = () => {
  const { t } = useTranslation();
  return (
    <ScrollReveal>
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-bold text-black mb-4">{t('fleet_title')}</h2>
            <p className="text-brand-charcoal mb-10">{t('fleet_desc')}</p>
            <StaggerContainer className="grid grid-cols-2 gap-4">
              {icons.map((i) => (
                <StaggerItem key={i.id}>
                  <div className="bg-[#DEE3EB] p-6 rounded-2xl border text-center border-gray-200 h-full">
                    <div className="flex items-center justify-center">
                      <img src={i.src} className="text-black mb-3" />
                    </div>
                    <h4 className="font-bold text-lg text-black">{t(`fleet_cat${i.id}_title`)}</h4>
                    <p className="text-sm text-brand-charcoal mt-1">{t(`fleet_cat${i.id}_desc`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1000"
            className="rounded-3xl shadow-xl order-1 lg:order-2 h-full"
            alt="Truck Fleet"
          />
        </div>
      </section>
    </ScrollReveal>
  );
}

export default function LogisticsPage() {
  const { t } = useTranslation();
  return (
    <main>

      <HeroSection
        img={"/images/logistics/logistics-hero.jpg"}
        title={t("Advanced_Logistics")}
        yellowTitle={t("log_hero_yellow")}
        subtitle={t("Logistics")}
        description1={t("Advanced_Logistics_desc")}
      />
      {/* <LogisticsHero /> */}
      <WhyPartnerSection />
      <LogisticsSolutions />
      <WarehouseExcellence />
      <FleetSection />
      <Subscribe
        title={t("log_cta_title")}
        becomePartner={true}

      />
      {/* Newsletter/CTA can be placed here */}
    </main>
  );
}
