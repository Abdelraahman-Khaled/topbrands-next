import React from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const Subscribe = ({ title, becomePartner = false, mail = false }) => {
    const { t } = useTranslation();
    return (
        <section className="relative w-full bg-[#0B1411] py-16 md:py-24 px-6 overflow-hidden">

            {/* Background Glows */}
            <div
                className="absolute top-1/2 -left-20 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: 'radial-gradient(circle, #F7E326 0%, transparent 70%)' }}
            />
            <div
                className="absolute top-1/2 -right-20 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20"
                style={{ background: 'radial-gradient(circle, #F7E326 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">

                {/* Mail Icon */}
                {
                    mail && (
                        <div className="mb-8 text-white">
                            <Mail size={48} strokeWidth={1.5} />
                        </div>
                    )
                }

                {/* Text Content */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    {title}
                </h2>
                <p className="text-white/90 text-base sm:text-lg mb-8 md:mb-10 max-w-2xl px-4 md:px-0">
                    {t("newsletter_desc")}
                </p>

                {/* Form */}
                {
                    becomePartner ?
                        <div className='flex flex-col sm:flex-row gap-4 w-full justify-center px-4 md:px-0'>
                            <Link
                                href={'/become-a-partner'}
                                className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-brand-yellow text-brand-charcoal rounded-full font-bold text-base md:text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer w-full sm:w-auto"
                            >
                                <span>{t("become_a_partner")}</span>
                                <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                            </Link>

                            <Link
                                href={"/services"}
                                className="inline-flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-inherit text-brand-white border-2 border-brand-white rounded-full font-bold text-base md:text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer hover:bg-white duration-300 hover:text-brand-charcoal w-full sm:w-auto"
                            >
                                <span>{t("btn_services")}</span>
                                <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
                            </Link>

                        </div>
                        :
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl"
                        >
                            <input
                                type="email"
                                placeholder={t("newsletter_placeholder")}
                                className="w-full flex-1 bg-white/5 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#F7E326]/50 transition-colors"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-[#F7E326] hover:bg-[#e5d120] text-black font-bold px-8 md:px-10 py-4 rounded-lg transition-all duration-200 whitespace-nowrap"
                            >
                                {t("newsletter_btn")}
                            </button>
                        </form>
                }


            </div>
        </section>
    );
};

export default Subscribe;