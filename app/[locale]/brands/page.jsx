"use client";

import { useTranslation } from "react-i18next";
import LocalizedLink from "../components/LocalizedLink";
import HeroSection from "../components/HeroSection";
import GlobalCTA from "../components/GlobalCTA";
import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";
import ScrollReveal from "../components/ScrollReveal";

function BrandsContent() {
  const { t } = useTranslation();

  const internationalBrands = [
    {
      id: 1,
      name: "Coffee Joy",
      slug: "coffee-joy",
      logo: "/images/brands/Coffee Joy.webp",
      description:
        "Premium coffee-flavored biscuits known for their thin, crispy texture and rich aroma, perfect for coffee lovers.",
    },
    {
      id: 2,
      name: "Danisa",
      slug: "danisa",
      logo: "/images/brands/Danisa.webp",
      description:
        "Traditional Danish butter cookies made with original Danish recipes and high-quality ingredients for a premium experience.",
    },
    {
      id: 3,
      name: "Domty",
      slug: "domty",
      logo: "/images/brands/Domty.webp",
      description:
        "Leading manufacturer of high-quality dairy and juice products, famous for its wide variety and excellent taste.",
    },
    {
      id: 4,
      name: "Kopiko",
      slug: "kopiko",
      logo: "/images/brands/Kopiko.webp",
      description:
        "The world's #1 coffee candy and a pioneer in coffee-based snacks and beverages, loved globally.",
    },
    {
      id: 5,
      name: "Landessa",
      slug: "landessa",
      logo: "/images/brands/Landessa.webp",
      description:
        "Premium iced coffee beverages made with 100% Arabica beans and fresh Alpine milk for a refreshing kick.",
    },
    {
      id: 6,
      name: "Leeza",
      slug: "leeza",
      logo: "/images/brands/Leeza.webp",
      description:
        "Versatile range of sweet spreads and confectionery products known for their smooth texture and rich flavor.",
    },
  ];

  const regionalBrands = [
    {
      id: 7,
      name: "Lotus",
      slug: "lotus",
      logo: "/images/brands/Lotus.webp",
      description:
        "Original caramelized biscuits and spreads with a unique taste and crunchy texture, loved by all ages.",
    },
    {
      id: 8,
      name: "Pinar",
      slug: "pinar-regional",
      logo: "/images/brands/Pinar.webp",
      description:
        "High-quality Turkish dairy brand known for its authentic Labneh and premium cheese products.",
    },
    {
      id: 9,
      name: "Sirarcha",
      slug: "sirarcha",
      logo: "/images/brands/Sirarcha.webp",
      description:
        "Bold and spicy chili sauces that add the perfect kick to any meal, crafted for flavor enthusiasts.",
    },
    {
      id: 10,
      name: "Ulker",
      slug: "ulker-regional",
      logo: "/images/brands/Ulker.webp",
      description:
        "A household name for biscuits and chocolates, delivering quality treats and sweets across the region.",
    },
    {
      id: 11,
      name: "Wild Power",
      slug: "wild-power",
      logo: "/images/brands/Wild Power.webp",
      description:
        "Dynamic energy drink brand providing a reliable boost of energy and refreshing flavors for active lifestyles.",
    },
  ];  // {
    //   id: 12,
    //   name: "Al Sham",
    //   slug: "al-sham",
    //   logo: "/images/brands/Lotus.webp", // Placeholder as ProductsBrands had only 5
    //   category: "food-beverages",
    //   categoryName: "Food & Beverages",
    //   description:
    //     "Traditional flavors and quality food products representing the rich culinary heritage of the region.",
    //   products: ["Regional Specialties", "Fine Foods"],
    //   origin: "Regional",
    // },

  const allBrands = [...internationalBrands, ...regionalBrands];

  return (
    <>
      <HeroSection
        title={t("trusted_fmcg_brands")}
        subtitle={t("brand_portfolio_nav")}
        description1={t("brand_portfolio_desc_1")}
        yellowText={t("brand_portfolio_desc_2")}
        description2={t("brand_portfolio_desc_3")}
        img={"/images/brands banner.webp"}
      />

      {/* Brands Grid */}
      <ScrollReveal delay={0.2}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 ">
            <div className="flex items-center justify-between mb-12">
              <p className="text-lg text-brand-charcoal">
                {t("showing")}{" "}
                <strong className="text-brand-jet">
                  {allBrands.length}
                </strong>
                {t("brands_word")}
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBrands.map((brand) => (
                <StaggerItem key={brand.id}>
                  <LocalizedLink
                    href={`/brands/${brand.slug}`}
                    className="block h-full group bg-white rounded-2xl overflow-hidden border-2 border-transparent cursor-pointer"
                  >
                    <div className="h-full">
                      <div className="w-full h-40 flex items-center justify-center bg-white p-6">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-brand-jet mb-3 transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
                          {brand.description}
                        </p>
                      </div>
                    </div>
                  </LocalizedLink>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <GlobalCTA title={t("want_your_brand_distributed")}
        subtitle={t("join_growing_portfolio")}
      />
    </>
  );
}

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-[#DEE3EB]">
      <BrandsContent />
    </div>
  );
}

