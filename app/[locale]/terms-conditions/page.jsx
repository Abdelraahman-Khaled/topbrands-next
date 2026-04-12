"use client";
import { useTranslation } from "react-i18next";
import WhiteHero from "../components/WhiteHero";

export default function TermsConditions() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <WhiteHero title={t('terms_conditions')} description={t('last_updated')} />

      <section className="py-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="space-y-10">
            n
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('agreement_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                {t('agreement_desc')}
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('requirements_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('requirements_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 flex items-center justify-center bg-brand-yellow rounded-full shrink-0">
                      <i className="ri-check-line text-black"></i>
                    </div>
                    <span>{t(`req_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('orders_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('orders_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 flex items-center justify-center bg-brand-yellow rounded-full shrink-0">
                      <i className="ri-check-line text-black"></i>
                    </div>
                    <span>{t(`ord_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('pricing_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('pricing_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 flex items-center justify-center bg-brand-yellow rounded-full shrink-0">
                      <i className="ri-check-line text-black"></i>
                    </div>
                    <span>{t(`prc_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('quality_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('quality_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-2 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 flex items-center justify-center bg-brand-yellow rounded-full shrink-0">
                      <i className="ri-check-line text-black"></i>
                    </div>
                    <span>{t(`qlt_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Static Content Sections (6-11) */}
            <div className="space-y-10">
              {[
                { key: 'ip' },
                { key: 'confidentiality' },
                { key: 'liability' },
                { key: 'termination' },
                { key: 'law' },
                { key: 'changes' }
              ].map((section) => (
                <div key={section.key} className="space-y-4">
                  <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                    {t(`${section.key}_title`)}
                  </h2>
                  <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                    {t(`${section.key}_desc`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Section 12 - Contact */}
            <div className="relative pt-4">
              <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('contact_title')}
              </h2>
              <p className="text-black font-medium leading-relaxed mb-6" style={{ fontFamily: 'Quicksand' }}>
                {t('contact_desc')}
              </p>
              <div className="bg-[#DEE3EB] w-full backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <p className="text-black font-bold mb-3" style={{ fontFamily: 'Quicksand' }}>{t('company_name')}</p>
                <div className="space-y-3">
                  <p className="text-brand-charcoal font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-mail-line text-black"></i>
                    {t('company_email')}
                  </p>
                  <p className="text-brand-charcoal font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-phone-line text-black"></i>
                    {t('company_phone')}
                  </p>
                  <p className="text-brand-charcoal font-medium flex items-center gap-2" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-map-pin-line text-black"></i>
                    {t('company_address')}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}