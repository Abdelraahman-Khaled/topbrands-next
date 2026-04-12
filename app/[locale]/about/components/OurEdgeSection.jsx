import React from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from '../../components/ScrollReveal';
import StaggerContainer from '../../components/StaggerContainer';
import StaggerItem from '../../components/StaggerItem';

const OurEdgeSection = () => {
    const { t } = useTranslation();
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8 ">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
                            {t("competitive_edge")}
                        </h2>
                        <p className="text-lg md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                            {t("competitive_edge_subtitle")}
                        </p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-8">
                    <StaggerItem className="bg-brand-paleblue rounded-2xl p-6 md:p-8 border-l-4 border-brand-yellow rtl:border-l-0 rtl:border-r-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-brand-yellow rounded-xl mb-6">
                            <i className="ri-route-line text-2xl text-black"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-jet mb-4">
                            {t("optimized_network")}
                        </h3>
                        <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                            {t("optimized_network_desc")}
                        </p>
                    </StaggerItem>

                    <StaggerItem className="bg-brand-paleblue rounded-2xl p-6 md:p-8 border-l-4 border-brand-charcoal rtl:border-l-0 rtl:border-r-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-brand-charcoal rounded-xl mb-6">
                            <i className="ri-database-2-line text-2xl text-white"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-jet mb-4">
                            {t("advanced_inventory")}
                        </h3>
                        <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                            {t("advanced_inventory_desc")}
                        </p>
                    </StaggerItem>

                    <StaggerItem className="bg-brand-paleblue rounded-2xl p-6 md:p-8 border-l-4 border-brand-charcoal rtl:border-l-0 rtl:border-r-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-brand-charcoal rounded-xl mb-6">
                            <i className="ri-team-line text-2xl text-white"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-jet mb-4">
                            {t("sales_force")}
                        </h3>
                        <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                            {t("sales_force_desc")}
                        </p>
                    </StaggerItem>

                    <StaggerItem className="bg-brand-paleblue rounded-2xl p-6 md:p-8 border-l-4 border-brand-yellow rtl:border-l-0 rtl:border-r-4">
                        <div className="w-14 h-14 flex items-center justify-center bg-brand-yellow rounded-xl mb-6">
                            <i className="ri-line-chart-line text-2xl text-black"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-jet mb-4">
                            {t("market_intelligence")}
                        </h3>
                        <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                            {t("market_intelligence_desc")}
                        </p>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    )
}

export default OurEdgeSection

