import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal';

const GlobalCTA = ({ title, subtitle, contact = false, btnText = "become_a_partner", btnLink = "/become-a-partner" }) => {
    const { t } = useTranslation();
    return (
        <section className="py-16 lg:py-24 bg-linear-to-br from-brand-charcoal to-brand-jet">
            <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {t(title)}
                </h2>
                <p className="text-lg md:text-xl text-[#D1D5DB] mb-10 max-w-2xl mx-auto font-medium">
                    {t(subtitle)}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <Link
                        href={btnLink}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-brand-charcoal rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
                    >
                        <span>{t(btnText)}</span>
                        <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                    </Link>
                    {
                        contact && (
                            <Link
                                href={"/contact"}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-bold text-lg hover:bg-white hover:text-brand-charcoal transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
                            >
                                <span>{t("contact_us")}</span>
                                <i className="ri-mail-line text-xl rtl:rotate-180"></i>
                            </Link>
                        )
                    }
                </div>
            </ScrollReveal>
        </section>
    )
}

export default GlobalCTA