import React from 'react'
import { useTranslation } from 'react-i18next'
const AboutCertifications = () => {
    const { t } = useTranslation();
    const certifications = [
        {
            icon: "ri-shield-check-line",
            title: t("iso_cert"),
            description: t("iso_cert_desc"),
        },
        {
            icon: "ri-restaurant-line",
            title: t("food_safety"),
            description: t("food_safety_desc"),
        },
        {
            icon: "ri-truck-line",
            title: t("cold_chain"),
            description: t("cold_chain_desc"),
        },
        {
            icon: "ri-file-list-3-line",
            title: t("reg_compliance"),
            description: t("reg_compliance_desc"),
        },
    ];
    return (
        <section className="py-20  bg-brand-paleblue">
            <div className="max-w-7xl mx-auto px-8 ">
                <div className="text-center mb-16">
                    <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">
                        {t("certs_standards")}
                    </h2>
                    <p className="text-xl text-brand-charcoal max-w-3xl mx-auto font-medium">
                        {t("certs_standards_subtitle")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-xl mb-4 mx-auto">
                                <i className={`${cert.icon} text-3xl text-brand-jet`}></i>
                            </div>
                            <h3 className="text-lg font-bold text-brand-jet mb-3">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-brand-charcoal leading-relaxed font-medium">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutCertifications