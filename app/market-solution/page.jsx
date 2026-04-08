'use client'
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    BarChart4, Rocket, Globe, ShoppingCart,
    Users2, PieChart, Search, Target,
    Settings2, LineChart, ArrowRight
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, id, t }) => (
    <div className="bg-[#E9EDF2] p-8 rounded-3xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-all">
        <div className="bg-[#F7E326] w-12 h-12 flex items-center justify-center rounded-xl shadow-inner">
            <Icon size={24} className="text-black" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 leading-tight">{t(`mkt_s${id}_t`)}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{t(`mkt_s${id}_d`)}</p>
    </div>
);

export default function MarketingPage() {
    const { t } = useTranslation();

    return (
        <main className="w-full bg-white">
            {/* 1. Hero Section */}
            <section className="relative">
                <div className="relative h-[500px] w-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover brightness-[0.4]"
                        alt="Marketing Meeting"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24">
                        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl tracking-tight">
                            {t('mkt_hero_title')} <span className="text-[#F7E326]">{t('mkt_hero_yellow')}</span>
                        </h1>
                        <p className="text-gray-200 mt-6 text-xl max-w-2xl font-medium leading-relaxed">
                            {t('mkt_hero_desc')}
                        </p>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="bg-[#F7E326] py-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center border-r last:border-none border-black/10 px-4">
                                <h2 className="text-4xl font-black text-black mb-1 tracking-tighter">{t(`mkt_stat${i}_v`)}</h2>
                                <p className="text-[10px] font-black text-black/60 uppercase tracking-widest leading-none">{t(`mkt_stat${i}_l`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Marketing Services Grid */}
            <section className="py-24 bg-white px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{t('mkt_services_t')}</h2>
                        <p className="text-gray-500 text-lg font-medium">{t('mkt_services_s')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ServiceCard icon={BarChart4} id={1} t={t} />
                        <ServiceCard icon={Rocket} id={2} t={t} />
                        <ServiceCard icon={Globe} id={3} t={t} />
                        <ServiceCard icon={ShoppingCart} id={4} t={t} />
                        <ServiceCard icon={Users2} id={5} t={t} />
                        <ServiceCard icon={PieChart} id={6} t={t} />
                    </div>
                </div>
            </section>

            {/* 3. Why Choose Us (Image Right) */}
            <section className="py-24 bg-[#E9EDF2] px-8">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">{t('mkt_why_t')}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { id: 1, icon: Search }, { id: 2, icon: Target },
                                { id: 3, icon: Settings2 }, { id: 4, icon: LineChart }
                            ].map((item) => (
                                <div key={item.id} className="space-y-3">
                                    <div className="bg-[#F7E326] w-8 h-8 flex items-center justify-center rounded-lg">
                                        <item.icon size={16} className="text-black" strokeWidth={3} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 tracking-tight">{t(`mkt_why_p${item.id}_t`)}</h4>
                                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{t(`mkt_why_p${item.id}_d`)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative lg:pl-10">
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                            className="rounded-[2.5rem] shadow-2xl h-[500px] w-full object-cover"
                            alt="Team Strategy"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Our Approach (Numbered Steps) */}
            <section className="py-24 bg-white px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20 space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{t('mkt_app_t')}</h2>
                        <p className="text-gray-500 text-lg font-medium">{t('mkt_app_s')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center space-y-6 group">
                                <div className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#F7E326] text-black font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                                    {i}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-gray-900">{t(`mkt_step${i}_t`)}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed px-4">{t(`mkt_step${i}_d`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-24 bg-[#0B1411] relative overflow-hidden px-8">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#F7E326] rounded-full blur-[140px] opacity-[0.08]" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">{t('mkt_cta_t')}</h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">{t('mkt_cta_s')}</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-[#F7E326] text-black font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-all flex items-center gap-3">
                            {t('btn_get_started')} <ArrowRight size={20} />
                        </button>
                        <button className="border-2 border-white/20 text-white font-bold px-12 py-5 rounded-2xl hover:bg-white hover:text-black transition-all">
                            {t('btn_all_services')}
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}