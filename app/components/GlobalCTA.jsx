import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next'
const GlobalCTA = ({ title, subtitle, contact = false, btnText = "become_a_partner", btnLink = "/become-a-partner" }) => {
    const { t } = useTranslation();
    return (
        <section className="py-20 bg-linear-to-br from-brand-charcoal to-brand-jet">
            <div className="max-w-7xl mx-auto px-8  text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    {t(title)}
                </h2>
                <p className="text-xl text-[#D1D5DB] mb-8 max-w-2xl mx-auto font-medium">
                    {t(subtitle)}
                </p>
                <Link
                    href={btnLink}
                    className="inline-flex ms-2 items-center gap-3 px-10 py-4 bg-brand-yellow text-brand-charcoal rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
                >
                    <span>{t(btnText)}</span>
                    <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                </Link>
                {
                    contact && (
                        <Link
                            href={"/contact"}
                            className="inline-flex ms-2 items-center gap-3 px-10 py-4 bg-inherit text-brand-white border-2 border-brand-white rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer hover:bg-white duration-300 hover:text-brand-charcoal"
                        >
                            <span>{t("contact_us")}</span>
                            <i className="ri-mail-line text-xl rtl:rotate-180"></i>
                        </Link>
                    )
                }
            </div>
        </section>
    )
}

export default GlobalCTA