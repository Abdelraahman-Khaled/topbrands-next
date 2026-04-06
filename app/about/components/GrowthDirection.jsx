import React from 'react'
import { useTranslation } from 'react-i18next'
const GrowthDirection = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20  bg-brand-paleblue relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-charcoal rounded-full blur-3xl opacity-10"></div>

            <div className="relative max-w-7xl mx-auto px-8 ">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-brand-yellow rounded-2xl mb-8 mx-auto">
                        <i className="ri-rocket-line text-4xl text-brand-jet"></i>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-8">
                        {t("growth_direction")}
                    </h2>
                    <p className="text-2xl text-brand-charcoal leading-relaxed mb-6 font-medium">
                        {t("growth_direction_desc1")}
                        <strong className="font-bold text-brand-jet">
                            {t("growth_direction_desc2")}
                        </strong>
                        {t("growth_direction_desc3")}
                    </p>
                    <p className="text-xl text-brand-charcoal leading-relaxed font-medium">
                        {t("growth_long_term")}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GrowthDirection