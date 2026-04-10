'use client'
import React from 'react';
import { Store, Building2, Layers, MapPin, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import GlobalCTA from '../components/GlobalCTA';
import Subscribe from '../components/Subscribe';
import HeroCounter from '../components/HeroCounter';


// SECTION: Channels
const ChannelsGrid = () => {
    const { t } = useTranslation()

    const icons = [Store, Building2, Layers, MapPin];
    return (
        <section className="py-24 bg-[#E9EDF2]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('channels_title')}</h2>
                    <p className="text-gray-500 font-medium">{t('channels_subtitle')}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => {
                        const Icon = icons[i - 1];
                        return (
                            <div key={i} className="bg-white p-10 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-[#F7E326] w-12 h-12 flex items-center justify-center rounded-lg">
                                    <Icon size={24} className="text-black" />
                                </div>
                                <h3 className="text-xl font-bold text-black">{t(`channel${i}_title`)}</h3>
                                <p className="text-brand-charcoal text-sm leading-relaxed">{t(`channel${i}_desc`)}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

// SECTION: How We Distribute
const ProcessSection = () => {
    const { t } = useTranslation()
    return (

        <section className="py-24 bg-white px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">{t('how_title')}</h2>
                    <p className="text-brand-charcoal mb-10 leading-relaxed">{t('how_subtitle')}</p>
                    <div className="space-y-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-5">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F7E326] flex items-center justify-center text-black font-bold text-sm">
                                    {i}
                                </div>
                                <div>
                                    <h4 className="font-bold text-black text-lg">{t(`step${i}_title`)}</h4>
                                    <p className="text-sm text-brand-charcoal text-base mt-1">{t(`step${i}_desc`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="/images/national-distribution/distribute.jpg"
                        className="rounded-3xl shadow-2xl"
                        alt="Partnership"
                    />
                </div>
            </div>
        </section>
    );
}

export default function DistributionPage() {
    const { t } = useTranslation()
    const statData = [
        { title: t('stat1_val'), subtitle: t('stat1_label') },
        { title: t('stat2_val'), subtitle: t('stat2_label') },
        { title: t('stat3_val'), subtitle: t('stat3_label') },
        { title: t('stat4_val'), subtitle: t('stat4_label') },
    ];
    return (
        <main>
            <HeroSection
                title={t('dist_hero_title')}
                subtitle={t('distribution')}
                yellowTitle={t("dist_hero_yellow")}
                description1={t("dist_hero_desc")}
                img="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
                buttonText={t('dist_hero_button')}
                buttonLink="/contact"
            />
            {/* Stats Bar */}
            <HeroCounter
                stats={statData}
            />
            {/* <div className="bg-[#F7E326] py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-center border-r last:border-none border-black/10">
                            <h2 className="text-4xl lg:text-6xl font-black text-black mb-1">{t(`stat${i}_val`)}</h2>
                            <p className="text-sm font-bold text-brand-charcoal uppercase tracking-tight">{t(`stat${i}_label`)}</p>
                        </div>
                    ))}
                </div>
            </div> */}
            <ChannelsGrid />
            <ProcessSection />
            <Subscribe
                title={t('cta_title')}
                becomePartner={true}
            />
            {/* Newsletter / CTA Section (Re-use the one from the previous step) */}
        </main>
    );
}