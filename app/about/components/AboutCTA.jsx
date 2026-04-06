import React from 'react'
import { useTranslation } from 'react-i18next'
const AboutCTA = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 bg-linear-to-br from-brand-charcoal to-brand-jet">
            <div className="max-w-7xl mx-auto px-8  text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    {t("ready_to_partner")}
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-medium">
                    {t("join_partners")}
                </p>
                <a
                    href="/become-a-partner"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-brand-yellow text-brand-charcoal rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
                >
                    <span>{t("become_a_partner")}</span>
                    <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                </a>
            </div>
        </section>
    )
}

export default AboutCTA