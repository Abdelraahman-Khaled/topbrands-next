'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutGrid, Eye, Percent, BarChart3, Check, UserCheck, MapPinned, Handshake, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Subscribe from '../components/Subscribe';

const MerchCard = ({ src: src, id, t }) => (
    <div className="bg-[#DEE3EB] p-10 rounded-3xl flex flex-col gap-4 shadow-sm hover:bg-gray-200 transition-all">
        <div className="bg-[#F7E326] w-12 h-12 flex items-center justify-center rounded-xl">
            <img src={src} alt="icon" className="text-black" />
        </div>
        <h3 className="text-2xl font-bold text-black">{t(`merch${id}_t`)}</h3>
        <p className="text-brand-charcoal text-base font-normal leading-relaxed">{t(`merch${id}_d`)}</p>
    </div>
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
            <section className="bg-[#F7E326] py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
                    {['placement', 'shelf', 'pos', 'stock', 'competitor', 'photo', 'promo', 'inventory'].map((key) => (
                        <div key={key} className="bg-black text-white px-6 py-2.5 rounded-full flex items-center gap-3 text-sm font-medium shadow-md">
                            <Check size={14} className="text-[#F7E326]" strokeWidth={3} />
                            {t(`pill_${key}`)}
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Merchandising Services */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <h2 className="text-5xl font-bold text-black tracking-tight">{t('merch_title')}</h2>
                    <p className="text-brand-charcoal font-normal">{t('merch_subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <MerchCard src={'/images/icons/window.png'} id={1} t={t} />
                    <MerchCard src={'/images/icons/store.png'} id={2} t={t} />
                    <MerchCard src={'/images/icons/ticket.png'} id={3} t={t} />
                    <MerchCard src={'/images/icons/tracking.png'} id={4} t={t} />
                </div>
            </section>

            {/* 4. Expert Sales Team */}
            <section className="py-24 bg-[#DEE3EB] px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <h2 className="text-5xl font-bold text-black tracking-tight">{t('expert_title')}</h2>
                        <p className='text-brand-charcoal text-lg font-normal'>{t('expert_subtitle')}</p>
                        <div className="space-y-8">
                            {[{ id: 1, icon: UserCheck }, { id: 2, icon: MapPinned }, { id: 3, icon: Handshake }].map((item) => (
                                <div key={item.id} className="flex gap-5 items-start">
                                    <div className="bg-[#F7E326] p-3 rounded-xl">
                                        <item.icon size={24} className="text-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-black">{t(`exp${item.id}_t`)}</h4>
                                        <p className="text-brand-charcoal text-sm mt-1">{t(`exp${item.id}_d`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <img src="/images/professional-sales/sales team.webp" className="rounded-3xl w-full h-full object-cover" alt="Sales Team" />
                </div>
            </section>

            {/* 5. Results Section */}
            <section className="py-24 bg-white px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <img src="/images/professional-sales/results.webp" className="rounded-[2.5rem] w-full object-cover order-2 lg:order-1" alt="Retail Shelf" />
                    </div>
                    <div className="order-1 lg:order-2 space-y-10">
                        <h2 className="text-5xl font-bold text-black tracking-tight">{t('results_title')}</h2>
                        <p className='text-brand-charcoal text-lg font-normal'>{t('results_desc')}</p>
                        <div className="grid grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-[#DEE3EB] p-8 rounded-3xl text-center border border-gray-100">
                                    <h3 className="text-4xl font-black text-brand-charcoal mb-1">{t(`stat${i}_v`)}</h3>
                                    <p className="text-sm text-brand-charcoal font-normal">{t(`stat${i}_l`)}</p>
                                </div>
                            ))}
                        </div>
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