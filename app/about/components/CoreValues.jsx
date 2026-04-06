import React from 'react'
import { useTranslation } from 'react-i18next';
const CoreValues = () => {
    const { t } = useTranslation();
    const values = [
        {
            icon: "ri-eye-line",
            title: t("transparency"),
            description: t("transparency_desc"),
        },
        {
            icon: "ri-customer-service-2-line",
            title: t("customer_commitment"),
            description: t("customer_commitment_desc"),
        },
        {
            icon: "ri-shield-check-line",
            title: t("reliability"),
            description: t("reliability_desc"),
        },
        {
            icon: "ri-team-line",
            title: t("partnership_mindset"),
            description: t("partnership_mindset_desc"),
        },
        {
            icon: "ri-line-chart-line",
            title: t("market_excellence"),
            description: t("market_excellence_desc"),
        },
    ];
    return (
        <section className="py-20  bg-white">
            <div className="max-w-7xl mx-auto px-8 ">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
                        {t("core_values")}
                    </h2>
                    <p className="text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                        {t("core_values_subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group bg-brand-paleblue rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-yellow"
                        >
                            <div className="w-14 h-14 flex items-center justify-center bg-brand-charcoal rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                <i className={`${value.icon} text-2xl text-white`}></i>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-jet mb-4">
                                {value.title}
                            </h3>
                            <p className="text-base text-brand-charcoal leading-relaxed font-medium">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreValues