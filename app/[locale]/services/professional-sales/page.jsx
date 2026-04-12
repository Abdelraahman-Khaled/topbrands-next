'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, Eye, Percent, BarChart3, Check, UserCheck, MapPinned, Handshake, ArrowRight } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import Subscribe from '../../components/Subscribe';
import ScrollReveal from '../../components/ScrollReveal';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';

const MerchCard = ({ src, id, t }) => (
    <StaggerItem className="h-full">
        <div className="bg-[#DEE3EB] p-8 md:p-10 rounded-[32px] flex flex-col gap-5 h-full shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group border border-transparent hover:border-brand-yellow">
            <div className="bg-brand-yellow w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <img src={src} alt="icon" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black">{t(`merch${id}_t`)}</h3>
            <p className="text-brand-charcoal text-sm md:text-base font-medium leading-relaxed">{t(`merch${id}_d`)}</p>
        </div>
    </StaggerItem>
);

export default function SalesMerchandisingPage() {
    const { t } = useTranslation();

    return (
        <main className="w-full bg-white">
            {/* 1. Hero Section */}
            <HeroSection
                img="/images/professional-sales/hero-img.webp"
                title={t('professional_sales')}
                subtitle={t('merchandising')}
                yellowTitle={t('sales_hero_yellow')}
                description1={t('professional_sales_desc')}
            />

            {/* 2. Black & Yellow Pill Ribbon */}
            <section className="bg-brand-yellow py-8 md:py-12 px-6">
                <StaggerContainer className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
                    {['placement', 'shelf', 'pos', 'stock', 'competitor', 'photo', 'promo', 'inventory'].map((key) => (
                        <StaggerItem key={key}>
                            <div className="bg-black text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold shadow-md hover:scale-105 transition-transform duration-300">
                                <Check size={14} className="text-brand-yellow" strokeWidth={3} />
                                {t(`pill_${key}`)}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* 3. Merchandising Services */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 md:mb-16 space-y-3 lg:space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight uppercase">{t('merch_title')}</h2>
                        <p className="text-lg md:text-xl text-brand-charcoal font-medium max-w-3xl mx-auto">{t('merch_subtitle')}</p>
                    </div>
                </ScrollReveal>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <MerchCard src={'/images/icons/window.png'} id={1} t={t} />
                    <MerchCard src={'/images/icons/store.png'} id={2} t={t} />
                    <MerchCard src={'/images/icons/ticket.png'} id={3} t={t} />
                    <MerchCard src={'/images/icons/tracking.png'} id={4} t={t} />
                </StaggerContainer>
            </section>

            {/* 4. Expert Sales Team */}
            <section className="py-16 md:py-24 bg-brand-paleblue px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-8 md:space-y-10">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight uppercase">{t('expert_title')}</h2>
                            <p className='text-lg md:text-xl text-brand-charcoal font-medium mt-4 lg:mt-6'>{t('expert_subtitle')}</p>
                        </ScrollReveal>
                        <StaggerContainer className="space-y-6 md:space-y-8">
                            {[{ id: 1, icon: UserCheck }, { id: 2, icon: MapPinned }, { id: 3, icon: Handshake }].map((item) => (
                                <StaggerItem key={item.id} className="flex gap-4 md:gap-5 items-start group">
                                    <div className="bg-brand-yellow p-3 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                                        <item.icon size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold text-black">{t(`exp${item.id}_t`)}</h4>
                                        <p className="text-brand-charcoal text-sm md:text-base font-medium mt-1">{t(`exp${item.id}_d`)}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                    <ScrollReveal delay={0.2} className="group overflow-hidden rounded-3xl">
                        <img src="/images/professional-sales/sales team.webp" className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" alt="Sales Team" />
                    </ScrollReveal>
                </div>
            </section>

            {/* 5. Results Section */}
            <section className="py-16 md:py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <ScrollReveal className="order-2 lg:order-1 group overflow-hidden rounded-[2.5rem]">
                        <img 
                            src="/images/professional-sales/results.webp" 
                            className="w-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
                            alt="Retail Shelf" 
                        />
                    </ScrollReveal>
                    <div className="order-1 lg:order-2 space-y-8 md:space-y-10">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight uppercase">{t('results_title')}</h2>
                            <p className='text-lg md:text-xl text-brand-charcoal font-medium mt-4 lg:mt-6'>{t('results_desc')}</p>
                        </ScrollReveal>
                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <StaggerItem key={i}>
                                    <div className="bg-brand-paleblue p-6 md:p-8 rounded-[32px] text-center border border-transparent hover:border-brand-yellow hover:shadow-lg transition-all duration-300">
                                        <h3 className="text-3xl md:text-4xl font-black text-brand-jet mb-1">{t(`stat${i}_v`)}</h3>
                                        <p className="text-xs md:text-sm text-brand-charcoal font-bold uppercase tracking-wider">{t(`stat${i}_l`)}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* 6. CTA */}
            <Subscribe
                title={t("sales_cta_t")}
                becomePartner={true}
            />
        </main>
    );
}