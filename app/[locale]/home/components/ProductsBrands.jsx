"use client";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import LocalizedLink from "../../components/LocalizedLink";

export default function ProductsBrands() {
  const { t } = useTranslation()
  const internationalBrands = [
    {
      name: "Coffee Joy",
      logo: "/images/home/brands/Coffee Joy.webp",
    },
    {
      name: "Danisa",
      logo: "/images/home/brands/Danisa.webp",
    },
    {
      name: "Domty",
      logo: "/images/home/brands/Domty.webp",
    },
    {
      name: "Kopiko",
      logo: "/images/home/brands/Kopiko.webp",
    },
    {
      name: "Landessa",
      logo: "/images/home/brands/Landessa.webp",
    },
    {
      name: "Leeza",
      logo: "/images/home/brands/Leeza.webp",
    },
  ];

  const regionalBrands = [
    {
      name: "Lotus",
      logo: "/images/home/brands/Lotus.webp",

    },
    {
      name: "Pinar",
      logo: "/images/home/brands/Pinar.webp",

    },
    {
      name: "Sirarcha",
      logo: "/images/home/brands/Sirarcha.webp",

    },
    // {
    //   name: "Tora Bika",
    //   logo: "/images/home/brands/Tora Bika.webp",

    // },
    {
      name: "Ulker",
      logo: "/images/home/brands/Ulker.webp",

    },
    {
      name: "Wild Power",
      logo: "/images/home/brands/Wild Power.webp",

    },
  ];

  return (
    <section id="brands" className="py-12 sm:py-20 lg:py-28 relative overflow-hidden bg-[#DEE3EB]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-jet mb-2">
              {t("our_products")}
            </h2>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal">
              {t("our_portfolio")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <LocalizedLink
              href="/brands"
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer h-[400px] sm:h-[500px] lg:h-[720px] block"
            >
              <img
                src="https://readdy.ai/api/search-image?query=artistic%20flat%20lay%20composition%20of%20diverse%20FMCG%20products%20including%20packaged%20foods%20beverages%20snacks%20and%20household%20items%20arranged%20aesthetically%20on%20clean%20white%20surface%20professional%20product%20photography%20bright%20even%20lighting%20top%20down%20view%20colorful%20packaging&width=620&height=720&seq=products-montage-001&orientation=portrait"
                alt={t("our_brands")}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 rtl:left-8 rtl:right-8">
                <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-sm text-white uppercase tracking-widest mb-2">
                    {t("our_brands")}
                  </p>
                  <p className="text-2xl font-semibold text-white mb-4">
                    {t("explore_all_brands")}
                  </p>
                  <div className="mask-btn mask-btn--yellow-white border-none!">
                    <span className="mask-btn__label">{t("show_more")}</span>
                    <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                      {t("show_more")}
                      <i className="ri-arrow-right-line rtl:rotate-180 mx-2"></i>
                    </span>
                  </div>
                </div>
              </div>
            </LocalizedLink>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <LocalizedLink
                href="/brands"
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white h-auto sm:h-[344px] block"
              >
                <div className="p-8 h-full flex flex-col justify-between gap-3">
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4">
                      {internationalBrands.map((brand, index) => (
                        <div
                          key={index}
                          className="w-full h-20 flex items-center justify-center"
                        >
                          <div className=" rounded-xl p-3 shadow-sm w-full h-full flex items-center justify-center">
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end rtl:justify-start">
                    <div className="mask-btn mask-btn--yellow-black">
                      <span className="mask-btn__label">{t("show_more")}</span>
                      <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                        {t("show_more")}
                        <i className="ri-arrow-right-line rtl:rotate-180 mx-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </LocalizedLink>

              <LocalizedLink
                href="/brands"
                className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white h-auto sm:h-[344px] block"
              >
                <div className="p-8 h-full flex flex-col justify-between gap-3">
                  <div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mt-4">
                      {regionalBrands.map((brand, index) => (
                        <div
                          key={index}
                          className="w-full h-20 flex items-center justify-center"
                        >
                          <div className=" rounded-xl p-3 shadow-sm w-full h-full flex items-center justify-center">
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="max-w-full max-h-full object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end rtl:justify-start">
                    <div className="mask-btn mask-btn--yellow-black">
                      <span className="mask-btn__label">{t("show_more")}</span>
                      <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                        {t("show_more")}
                        <i className="ri-arrow-right-line rtl:rotate-180 mx-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </LocalizedLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
