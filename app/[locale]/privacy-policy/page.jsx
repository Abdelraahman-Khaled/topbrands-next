"use client";
import WhiteHero from "../components/WhiteHero";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <WhiteHero
        title={t('privacy_policy')}
        description={t('last_updated')} 
      />

      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="space-y-12">
            {/* Section 1 - List */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s1_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s1_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <span>{t(`pri_s1_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 2 - List */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s2_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s2_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <span>{t(`pri_s2_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 - List */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s3_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s3_desc')}
              </p>
              <ul className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <span>{t(`pri_s3_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections 4 & 5 - Text */}
            {[4, 5].map((n) => (
              <div key={n} className="space-y-4">
                <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                  {t(`privacy_s${n}_title`)}
                </h2>
                <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                  {t(`privacy_s${n}_desc`)}
                </p>
              </div>
            ))}

            {/* Section 6 - List */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s6_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium leading-relaxed mb-4" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s6_desc')}
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                    <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center shrink-0">
                      <i className="ri-check-line text-black text-sm"></i>
                    </div>
                    <span>{t(`pri_s6_item${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections 7 & 8 - Text */}
            {[7, 8].map((n) => (
              <div key={n} className="space-y-4">
                <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                  {t(`privacy_s${n}_title`)}
                </h2>
                <p className="text-[#4B4F54] font-medium leading-relaxed" style={{ fontFamily: 'Quicksand' }}>
                  {t(`privacy_s${n}_desc`)}
                </p>
              </div>
            ))}

            {/* Section 9 - Contact Card (Clean Version) */}
            <div className="space-y-6 pt-10 border-t border-gray-100">
              <h2 className="text-3xl font-bold text-black" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s9_title')}
              </h2>
              <p className="text-[#4B4F54] font-medium" style={{ fontFamily: 'Quicksand' }}>
                {t('privacy_s9_desc')}
              </p>
              <div className="bg-[#DEE3EB] p-8 rounded-2xl border border-gray-200 space-y-5">
                <p className="text-black font-bold text-xl" style={{ fontFamily: 'Quicksand' }}>
                  {t('privacy_company_name')}
                </p>
                <div className="space-y-3">
                  <p className="flex items-center gap-4 text-gray-700 font-semibold" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-mail-line text-black text-xl"></i> privacy@b2bdistribution.sy
                  </p>
                  <p className="flex items-center gap-4 text-gray-700 font-semibold" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-phone-line text-black text-xl"></i> +963 11 123 4567
                  </p>
                  <p className="flex items-center gap-4 text-gray-700 font-semibold" style={{ fontFamily: 'Quicksand' }}>
                    <i className="ri-map-pin-line text-black text-xl"></i> {t('privacy_location')}
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