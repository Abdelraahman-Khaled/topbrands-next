'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    BarChart4, Rocket, Globe, ShoppingCart,
    Users2, PieChart, Search, Target,
    Settings2, LineChart, ArrowRight
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import HeroCounter from '../components/HeroCounter';
import Subscribe from '../components/Subscribe';

const ServiceCard = ({ src, id, t }) => (
    <div className="bg-[#DEE3EB] p-10 rounded-3xl flex flex-col gap-4  hover:shadow-md transition-all">
        <div className="bg-brand-yellow w-14 h-14 flex items-center justify-center rounded-2xl shadow-inner">
            <img src={src} alt="icon" className="text-black" />
        </div>
        <h3 className="text-xl font-bold text-black leading-tight">{t(`mkt_s${id}_t`)}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{t(`mkt_s${id}_d`)}</p>
    </div>
);

export default function MarketingPage() {
    const { t } = useTranslation();
    const statData = [
        { title: t('mkt_stat1_v'), subtitle: t('mkt_stat1_l') },
        { title: t('mkt_stat2_v'), subtitle: t('mkt_stat2_l') },
        { title: t('mkt_stat3_v'), subtitle: t('mkt_stat3_l') },
        { title: t('mkt_stat4_v'), subtitle: t('mkt_stat4_l') },
    ];
    return (
        <main className="w-full bg-white">
            {/* 1. Hero Section */}
            <HeroSection
                title={t('mkt_hero_title')}
                subtitle={t('mkt_hero_title')}
                yellowTitle={t('mkt_hero_yellow')}
                description1={t('mkt_hero_desc')}
                img={"/images/markting/hero-img.webp"}
            />
            <HeroCounter
                stats={statData}
            />

            {/* 2. Marketing Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">{t('mkt_services_t')}</h2>
                        <p className="text-gray-500 text-lg font-medium">{t('mkt_services_s')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard src={"/images/icons/analysis.png"} id={1} t={t} />
                        <ServiceCard src={"/images/icons/loud.png"} id={2} t={t} />
                        <ServiceCard src={"/images/icons/phone.png"} id={3} t={t} />
                        <ServiceCard src={"/images/icons/market.png"} id={4} t={t} />
                        <ServiceCard src={"/images/icons/group.png"} id={5} t={t} />
                        <ServiceCard src={"/images/icons/chart.png"} id={6} t={t} />
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us (Image Right) */}
            <section className="py-24 bg-[#DEE3EB]">
                <div className="max-w-7xl px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">{t('mkt_why_t')}</h2>
                        <p className="text-brand-charcoal text-lg font-normal">{t('mkt_why_d')}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { id: 1, src: '/images/icons/light.png' }, { id: 2, src: '/images/icons/aim.png' },
                                { id: 3, src: '/images/icons/rocket.png' }, { id: 4, src: '/images/icons/tracking.png' }
                            ].map((item) => (
                                <div key={item.id} className="space-y-3 flex flex-row gap-6">
                                    <div className="bg-[#F7E326] h-13 w-28 flex items-center justify-center rounded-xl">
                                        <img src={item.src} alt="icon" className="text-black" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-black text-lg tracking-tight">{t(`mkt_why_p${item.id}_t`)}</h4>
                                        <p className="text-sm text-gray-500 font-medium leading-relaxed">{t(`mkt_why_p${item.id}_d`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <img
                            src="/images/markting/marketing solutions.webp"
                            className="rounded-3xl h-full w-full object-cover"
                            alt="Team Strategy"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Our Approach (Numbered Steps) */}
            <section className="py-24 bg-white ">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">{t('mkt_app_t')}</h2>
                        <p className="text-brand-charcoal text-xl font-normal">{t('mkt_app_s')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center space-y-6 group">
                                <div className="relative mx-auto w-16 h-16 font-bold flex items-center justify-center rounded-full bg-[#F7E326] text-black text-3xl shadow-lg group-hover:scale-110 transition-transform">
                                    {i}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-black">{t(`mkt_step${i}_t`)}</h4>
                                    <p className="text-base text-brand-charcoal font-normal leading-relaxed">{t(`mkt_step${i}_d`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <Subscribe title={t('mkt_cta_t')} becomePartner={true} />
        </main>
    );
}