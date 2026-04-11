"use client";
import WhiteHero from "../components/WhiteHero";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../components/ScrollReveal";

export default function CookiePolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <WhiteHero
        title={t('cookie_policy')}
        description={t('last_updated_cookie')}
      />

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-jet rounded-full blur-[120px] opacity-5 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">

              {/* Section 1 - Introduction */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-jet tracking-tighter border-l-8 border-brand-yellow pl-6">
                  {t('cookie_s1_title')}
                </h2>
                <p className="text-base md:text-xl text-brand-charcoal font-semibold leading-relaxed">
                  {t('cookie_s1_desc')}
                </p>
              </div>

              {/* Section 2 - Usage */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-jet tracking-tighter border-l-8 border-brand-jet pl-6">
                  {t('cookie_s2_title')}
                </h2>
                <p className="text-base md:text-xl text-brand-charcoal font-semibold leading-relaxed">
                  {t('cookie_s2_desc')}
                </p>
                <ul className="grid sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-charcoal font-bold group">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-yellow rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-md">
                        <i className="ri-check-line text-brand-jet text-sm md:text-lg"></i>
                      </div>
                      <span className="text-sm md:text-lg tracking-tight pt-0.5">{t(`ck_s2_item${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 - Categories */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-jet tracking-tighter border-l-8 border-brand-yellow pl-6">
                  {t('cookie_s3_title')}
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="p-8 md:p-10 bg-brand-paleblue rounded-[40px] border border-brand-charcoal/5 shadow-sm hover:border-brand-yellow transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-brand-jet rounded-2xl flex items-center justify-center shadow-lg">
                           <span className="text-brand-yellow font-black text-xl">{i}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-brand-jet tracking-tight">
                          {t(`ck_s3_cat${i}_t`)}
                        </h3>
                      </div>
                      <p className="text-base md:text-xl text-brand-charcoal font-semibold leading-relaxed">
                        {t(`ck_s3_cat${i}_d`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4 - Third Party */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-jet tracking-tighter border-l-8 border-brand-jet pl-6">
                  {t('cookie_s4_title')}
                </h2>
                <div className="p-8 md:p-12 bg-brand-paleblue/50 rounded-[40px] border border-brand-charcoal/5">
                  <p className="text-base md:text-xl text-brand-charcoal font-semibold leading-relaxed mb-8">
                    {t('cookie_s4_desc')}
                  </p>
                  <ul className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <li key={i} className="flex items-start gap-4 text-brand-charcoal font-bold group">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-yellow rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-md">
                          <i className="ri-check-line text-brand-jet text-sm md:text-lg"></i>
                        </div>
                        <span className="text-sm md:text-lg tracking-tight pt-0.5">{t(`ck_s4_item${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 5 - Management */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-jet tracking-tighter border-l-8 border-brand-yellow pl-6">
                  {t('cookie_s5_title')}
                </h2>
                <p className="text-base md:text-xl text-brand-charcoal font-semibold leading-relaxed">
                  {t('cookie_s5_desc')}
                </p>
                <div className="space-y-6 mb-8">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-4 text-brand-charcoal font-bold group">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-jet rounded-full flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform shadow-md">
                        <i className="ri-settings-4-line text-brand-yellow text-sm md:text-lg"></i>
                      </div>
                      <span className="text-sm md:text-lg tracking-tight pt-0.5">{t(`ck_s5_opt${i}`)}</span>
                    </li>
                  ))}
                </div>
                <div className="p-8 bg-brand-paleblue rounded-3xl border border-brand-charcoal/5 flex items-start gap-6 shadow-sm">
                  <div className="w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <i className="ri-information-line text-brand-jet text-2xl"></i>
                  </div>
                  <p className="text-base md:text-lg text-brand-charcoal font-bold leading-relaxed italic">
                    {t('ck_s5_note')}
                  </p>
                </div>
              </div>

              {/* Browser Management */}
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-jet tracking-tighter">
                  {t('cookie_s6_title')}
                </h2>
                <p className="text-base md:text-xl text-brand-charcoal font-semibold leading-relaxed">{t('cookie_s6_desc')}</p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'Chrome', icon: 'ri-chrome-line' },
                    { name: 'Firefox', icon: 'ri-firefox-line' },
                    { name: 'Safari', icon: 'ri-safari-line' },
                    { name: 'Edge', icon: 'ri-edge-line' }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-4 p-8 bg-white rounded-[32px] border border-brand-paleblue hover:border-brand-yellow hover:shadow-2xl transition-all duration-500 group">
                      <div className="w-16 h-16 bg-brand-paleblue rounded-2xl flex items-center justify-center group-hover:bg-brand-yellow transition-colors duration-500">
                        <i className={`${item.icon} text-3xl md:text-4xl text-brand-jet group-hover:scale-110 transition-transform`}></i>
                      </div>
                      <span className="font-black text-brand-jet text-sm md:text-base uppercase tracking-widest">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Statements */}
              {[7, 8].map((n) => (
                <div key={n} className="space-y-8 p-8 md:p-12 bg-white rounded-[40px] border-2 border-brand-paleblue">
                  <h2 className="text-3xl md:text-4xl font-black text-brand-jet tracking-tighter border-b-4 border-brand-yellow pb-4 inline-block">
                    {t(`cookie_s${n}_title`)}
                  </h2>
                  <p className="text-lg md:text-2xl text-brand-charcoal font-bold leading-relaxed italic opacity-80">
                    {t(`cookie_s${n}_desc`)}
                  </p>
                </div>
              ))}

              {/* Contact Card */}
              <div className="pt-16 md:pt-24 border-t border-brand-charcoal/5">
                <div className="bg-brand-jet p-8 md:p-16 rounded-[48px] md:rounded-[64px] text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-yellow rounded-full blur-[100px] opacity-10"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                      {t('cookie_s9_title')}
                    </h2>
                    <p className="text-lg md:text-xl text-brand-paleblue/60 font-bold mb-12 max-w-2xl">
                      {t('cookie_s9_desc')}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-8">
                        <p className="text-2xl md:text-3xl font-black text-brand-yellow mb-8">
                          {t('cookie_company_name')}
                        </p>
                        <div className="space-y-6">
                          <a href="mailto:privacy@b2bdistribution.sy" className="flex items-center gap-6 text-brand-paleblue hover:text-brand-yellow transition-all group/link">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover/link:bg-brand-yellow group-hover/link:scale-110 transition-all">
                              <i className="ri-mail-line text-2xl group-hover/link:text-brand-jet"></i>
                            </div>
                            <span className="text-lg md:text-xl font-black tracking-tight tracking-widest leading-none">privacy@b2bdistribution.sy</span>
                          </a>
                          <a href="tel:+963116022" className="flex items-center gap-6 text-brand-paleblue hover:text-brand-yellow transition-all group/link">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover/link:bg-brand-yellow group-hover/link:scale-110 transition-all">
                              <i className="ri-phone-line text-2xl group-hover/link:text-brand-jet"></i>
                            </div>
                            <span className="text-lg md:text-xl font-black tracking-tight tracking-widest leading-none" dir="ltr">+963 11 6022</span>
                          </a>
                        </div>
                      </div>
                      
                      <div className="bg-white/5 p-8 rounded-[40px] border border-white/10">
                        <div className="flex items-center gap-6 mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center shadow-lg">
                            <i className="ri-map-pin-line text-2xl text-brand-jet"></i>
                          </div>
                          <span className="text-xl md:text-2xl font-black text-white">{t('privacy_location_label') || "Address"}</span>
                        </div>
                        <p className="text-lg md:text-xl text-brand-paleblue/80 font-semibold leading-relaxed">
                          {t('cookie_location')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}