import React from 'react'
import { useTranslation } from 'react-i18next';

const HeroSection = ({ subtitle, title, description1, yellowText, description2, img, yellowTitle }) => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt={t("contact_accent")}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent rtl:bg-gradient-to-l rtl:from-black/70 rtl:via-black/50 rtl:to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-8 ">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
                    <span className="text-sm font-semibold text-brand-yellow tracking-widest uppercase">
                      /  {subtitle}
                    </span>
                    <div className="h-px w-16 bg-brand-yellow"></div>
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold  text-white mb-6">
                    {title}
                    <span className="text-brand-yellow"> {yellowTitle}</span>
                </h1>
                <p className="text-3xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
                    {description1}
                    <strong className="font-bold text-brand-yellow font-almarai">
                        {" "} {yellowText} {" "}
                    </strong>
                    {description2}
                </p>
            </div>
        </section>
    )
}

export default HeroSection