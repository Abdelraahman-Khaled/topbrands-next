import React from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../components/ScrollReveal';

const WhoWeAre = () => {
    const { t } = useTranslation();
    return (
        <section className="py-12 md:py-20 bg-white">
            <ScrollReveal className="max-w-7xl mx-auto px-8 ">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[350px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/about/about section in about page.webp"
                            alt={t("contact_accent")}
                            className="w-full h-full object-cover object-right"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-lg md:text-xl text-brand-charcoal leading-relaxed font-medium">
                            {t("connect_brands")}
                        </p>
                        <p className="text-lg md:text-xl text-brand-charcoal leading-relaxed font-medium">
                            {t("established_2025")}
                        </p>

                        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-8">
                            <div className="bg-brand-yellow rounded-2xl p-6">
                                <div className="w-12 h-12 flex items-center justify-center bg-brand-jet rounded-xl mb-4">
                                    <i className="ri-building-line text-2xl text-brand-yellow"></i>
                                </div>
                                <p className="text-sm text-brand-charcoal font-bold mb-1">
                                    {t("group_heritage")}
                                </p>
                                <p className="text-2xl font-bold text-brand-jet">
                                    {t("years_market")}
                                </p>
                            </div>

                            <div className="bg-brand-paleblue rounded-2xl p-6">
                                <div className="w-12 h-12 flex items-center justify-center bg-brand-charcoal rounded-xl mb-4">
                                    <i className="ri-map-pin-line text-2xl text-brand-yellow"></i>
                                </div>
                                <p className="text-sm text-brand-charcoal font-bold mb-1">
                                    {t("coverage_label")}
                                </p>
                                <p className="text-2xl font-bold text-brand-jet">
                                    {t("nationwide")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}

export default WhoWeAre