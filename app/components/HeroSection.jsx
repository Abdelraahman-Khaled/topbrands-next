import React from 'react'
import { useTranslation } from 'react-i18next';

const HeroSection = ({ subtitle, title, description1, yellowText, description2, img, yellowTitle }) => {
    const { t } = useTranslation();

    return (
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[60vh] flex items-center">
            <div className="absolute inset-0">
                <img
                    src={img}
                    alt={t("contact_accent")}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent rtl:bg-gradient-to-l rtl:from-black/80 rtl:via-black/40 rtl:to-transparent"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6 lg:mb-8">
                    <span className="text-xs md:text-sm font-semibold text-brand-yellow tracking-widest uppercase">
                      / {subtitle}
                    </span>
                    <div className="h-px w-10 md:w-16 bg-brand-yellow"></div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold w-full text-white mb-6 lg:mb-8 leading-[1.1]">
                    {title}
                    <span className="text-brand-yellow block mt-2 lg:inline lg:mt-0"> {yellowTitle}</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl font-light">
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