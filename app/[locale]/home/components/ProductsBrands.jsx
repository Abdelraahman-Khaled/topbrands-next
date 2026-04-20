"use client";
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import LocalizedLink from "../../components/LocalizedLink";

export default function ProductsBrands() {
  const { t } = useTranslation()
  const internationalBrands = [
    {
      name: "Coffee Joy",
      slug: "coffee-joy",
      logo: "/images/home/brands/Coffee Joy.webp",
    },
    {
      name: "Danisa",
      slug: "danisa",
      logo: "/images/home/brands/Danisa.webp",
    },
    {
      name: "Domty",
      slug: "domty",
      logo: "/images/home/brands/Domty.webp",
    },
    {
      name: "Kopiko",
      slug: "kopiko",
      logo: "/images/home/brands/Kopiko.webp",
    },
    {
      name: "Landessa",
      slug: "landessa",
      logo: "/images/home/brands/Landessa.webp",
    },
    {
      name: "Leeza",
      slug: "leeza",
      logo: "/images/home/brands/Leeza.webp",
    },
  ];

  const regionalBrands = [
    {
      name: "Lotus",
      slug: "lotus",
      logo: "/images/home/brands/Lotus.webp",
    },
    {
      name: "Pinar",
      slug: "pinar-regional",
      logo: "/images/home/brands/Pinar.webp",
    },
    {
      name: "Sirarcha",
      slug: "sirarcha",
      logo: "/images/home/brands/Sirarcha.webp",
    },
    {
      name: "Tora Bika",
      slug: "coffee-joy",
      logo: "/images/home/brands/alarabi.webp",
    },
    {
      name: "Ulker",
      slug: "ulker-regional",
      logo: "/images/home/brands/Ulker.webp",
    },
    {
      name: "Wild Power",
      slug: "wild-power",
      logo: "/images/home/brands/Wild Power.webp",
    },
  ];
  const allBrands = [...internationalBrands, ...regionalBrands];

  return (
    <section id="brands" className="py-16 sm:py-24 bg-[#DEE3EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <ScrollReveal>
          <div className="text-center flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal tracking-wider mb-10 md:mb-16">
              {t("our_brands")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col items-center gap-12 max-w-7xl mx-auto shadow-sm">
            {/* Centered Responsive Flex Grid */}
            <div className="w-full flex flex-wrap justify-center items-center gap-x-6 gap-y-12 sm:gap-x-12">
              {allBrands.map((brand, index) => (
                <LocalizedLink
                  key={index}
                  href={`/brands/${brand.slug}`}
                  className="w-[calc(50%-1.5rem)] md:w-[calc(33.33%-3rem)] lg:w-[calc(20%-3rem)] aspect-[4/3] flex items-center justify-center transition-transform hover:-translate-y-2 duration-300 group"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-[110px] sm:max-w-[130px] md:max-w-full max-h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)] group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-all duration-300"
                  />
                </LocalizedLink>
              ))}
            </div>

            {/* Centered Button Row */}
            <div className="pt-4 sm:pt-8 w-full flex justify-center">
              <LocalizedLink href="/brands">
                <div className="mask-btn mask-btn--yellow-black">
                  <span className="mask-btn__label">
                    {t("see_all_brands")}
                    <i className="ri-arrow-right-line rtl:rotate-180 mx-2"></i>
                  </span>
                  <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                    {t("see_all_brands")}
                    <i className="ri-arrow-right-line rtl:rotate-180 mx-2"></i>
                  </span>
                </div>
              </LocalizedLink>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
