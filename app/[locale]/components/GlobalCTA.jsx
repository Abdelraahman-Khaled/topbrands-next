import React from 'react'
import { useTranslation } from 'react-i18next'
import ScrollReveal from './ScrollReveal';
import LocalizedLink from './LocalizedLink';

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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
                    <LocalizedLink
                        href={btnLink}
                        className="mask-btn mask-btn--yellow-white !rounded-full sm:w-auto w-full shadow-xl hover:shadow-2xl"
                    >
                        <span className="mask-btn__label gap-3">
                            {t(btnText)}
                            <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                        </span>
                        <span className="mask-btn__fill gap-3">
                            {t(btnText)}
                            <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                        </span>
                    </LocalizedLink>
                    {
                        contact && (
                            <LocalizedLink
                                href={"/contact"}
                                className="mask-btn mask-btn--none-white !rounded-full sm:w-auto w-full shadow-xl hover:shadow-2xl"
                            >
                                <span className="mask-btn__label gap-3">
                                    {t("contact_us")}
                                    <i className="ri-mail-line text-xl rtl:rotate-180"></i>
                                </span>
                                <span className="mask-btn__fill gap-3">
                                    {t("contact_us")}
                                    <i className="ri-mail-line text-xl rtl:rotate-180"></i>
                                </span>
                             </LocalizedLink>
                        )
                    }
                </div>
            </ScrollReveal>
        </section>
    )
}

export default GlobalCTA