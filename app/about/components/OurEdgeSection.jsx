import React from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedCard from '../../components/AnimatedCard';
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";

const OurEdgeSection = () => {
    const { t } = useTranslation();
    const edges = [
        {
            icon: "ri-route-line",
            title: t("optimized_network"),
            description: t("optimized_network_desc"),
            isYellow: true
        },
        {
            icon: "ri-database-2-line",
            title: t("advanced_inventory"),
            description: t("advanced_inventory_desc"),
            isYellow: false
        },
        {
            icon: "ri-team-line",
            title: t("sales_force"),
            description: t("sales_force_desc"),
            isYellow: false
        },
        {
            icon: "ri-line-chart-line",
            title: t("market_intelligence"),
            description: t("market_intelligence_desc"),
            isYellow: true
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-brand-jet mb-4 md:mb-6 uppercase tracking-tighter">
                        {t("competitive_edge")}
                    </h2>
                    <p className="text-base md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                        {t("competitive_edge_subtitle")}
                    </p>
                    <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full mt-8 md:mt-10"></div>
                </div>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                    {edges.map((edge, index) => (
                        <StaggerItem key={index} className="h-full">
                            <AnimatedCard className="bg-brand-paleblue rounded-[40px] p-8 md:p-12 border-l-[12px] border-brand-yellow rtl:border-l-0 rtl:border-r-[12px] hover:shadow-2xl transition-all duration-500 h-full group border border-brand-charcoal/5">
                                <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg ${edge.isYellow ? 'bg-brand-yellow text-brand-jet' : 'bg-brand-jet text-white'}`}>
                                    <i className={`${edge.icon} text-3xl md:text-4xl`}></i>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-brand-jet mb-6 group-hover:text-brand-teal transition-colors tracking-tight">
                                    {edge.title}
                                </h3>
                                <p className="text-sm md:text-base text-brand-charcoal leading-relaxed font-semibold">
                                    {edge.description}
                                </p>
                                <div className="mt-8 pt-8 border-t border-brand-charcoal/5 w-full">
                                    <div className="w-12 h-1.5 bg-brand-yellow/30 rounded-full"></div>
                                </div>
                            </AnimatedCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    )
}

export default OurEdgeSection