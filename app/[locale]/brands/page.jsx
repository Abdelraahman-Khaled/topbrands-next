"use client";

import { useTranslation } from "react-i18next";
import LocalizedLink from "../components/LocalizedLink";
import HeroSection from "../components/HeroSection";
import GlobalCTA from "../components/GlobalCTA";
import { useState, useEffect } from "react";
import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";
import AnimatedCard from "../components/AnimatedCard";
import ScrollReveal from "../components/ScrollReveal";

function BrandsContent() {
  const { t } = useTranslation();
  const [typeParam, setTypeParam] = useState(null);
  const [categoryParam, setCategoryParam] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTypeParam(params.get("type"));
    setCategoryParam(params.get("category"));
  }, []);

  const internationalBrands = [
    {
      id: 1,
      name: "Coffee Joy",
      slug: "coffee-joy",
      logo: "/images/brands/Coffee Joy.webp",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "Premium coffee-flavored biscuits known for their thin, crispy texture and rich aroma, perfect for coffee lovers.",
      products: ["Coffee Biscuits", "Snack Packs"],
      origin: "International",
    },
    {
      id: 2,
      name: "Danisa",
      slug: "danisa",
      logo: "/images/brands/Danisa.webp",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "Traditional Danish butter cookies made with original Danish recipes and high-quality ingredients for a premium experience.",
      products: ["Butter Cookies", "Premium Tins"],
      origin: "International",
    },
    {
      id: 3,
      name: "Domty",
      slug: "domty",
      logo: "/images/brands/Domty.webp",
      category: "dairy-products",
      categoryName: "Dairy Products",
      description:
        "Leading manufacturer of high-quality dairy and juice products, famous for its wide variety and excellent taste.",
      products: ["Feta Cheese", "Fruit Juices", "Bakery Items"],
      origin: "Egypt",
    },
    {
      id: 4,
      name: "Kopiko",
      slug: "kopiko",
      logo: "/images/brands/Kopiko.webp",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "The world's #1 coffee candy and a pioneer in coffee-based snacks and beverages, loved globally.",
      products: ["Coffee Candy", "Instant Coffee", "Coffee Drinks"],
      origin: "International",
    },
    {
      id: 5,
      name: "Landessa",
      slug: "landessa",
      logo: "/images/brands/Landessa.webp",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Premium iced coffee beverages made with 100% Arabica beans and fresh Alpine milk for a refreshing kick.",
      products: ["Iced Coffee", "Latte", "Espresso Drinks"],
      origin: "Austria",
    },
    {
      id: 6,
      name: "Leeza",
      slug: "leeza",
      logo: "/images/brands/Leeza.webp",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Versatile range of sweet spreads and confectionery products known for their smooth texture and rich flavor.",
      products: ["Chocolate Spread", "Hazelnut Cream"],
      origin: "International",
    },
  ];

  const regionalBrands = [
    {
      id: 7,
      name: "Lotus",
      slug: "lotus",
      logo: "/images/brands/Lotus.webp",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "Original caramelized biscuits and spreads with a unique taste and crunchy texture, loved by all ages.",
      products: ["Biscoff Biscuits", "Cookie Spread"],
      origin: "Regional",
    },
    {
      id: 8,
      name: "Pinar",
      slug: "pinar-regional",
      logo: "/images/brands/Pinar.webp",
      category: "dairy-products",
      categoryName: "Dairy Products",
      description:
        "High-quality Turkish dairy brand known for its authentic Labneh and premium cheese products.",
      products: ["Labneh", "White Cheese", "Dairy Essentials"],
      origin: "Turkey",
    },
    {
      id: 9,
      name: "Sirarcha",
      slug: "sirarcha",
      logo: "/images/brands/Sirarcha.webp",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Bold and spicy chili sauces that add the perfect kick to any meal, crafted for flavor enthusiasts.",
      products: ["Hot Sauce", "Chill Sauces"],
      origin: "Regional",
    },
    {
      id: 10,
      name: "Ulker",
      slug: "ulker-regional",
      logo: "/images/brands/Ulker.webp",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "A household name for biscuits and chocolates, delivering quality treats and sweets across the region.",
      products: ["Chocolate Bars", "Biscuits", "Wafers"],
      origin: "Turkey",
    },
    {
      id: 11,
      name: "Wild Power",
      slug: "wild-power",
      logo: "/images/brands/Wild Power.webp",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Dynamic energy drink brand providing a reliable boost of energy and refreshing flavors for active lifestyles.",
      products: ["Energy Drinks"],
      origin: "Regional",
    },
    // {
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
  ];

  const categories = [
    {
      id: "food-beverages",
      name: t("food_beverages"),
      icon: "ri-restaurant-line",
      color: "bg-brand-teal",
    },
    {
      id: "snacks-confectionery",
      name: t("snacks_confectionery"),
      icon: "ri-cake-3-line",
      color: "bg-brand-coral",
    },
    {
      id: "dairy-products",
      name: t("dairy_products"),
      icon: "ri-cup-line",
      color: "bg-brand-teal",
    },
    {
      id: "non-food-fmcg",
      name: t("non_food_fmcg"),
      icon: "ri-shopping-bag-3-line",
      color: "bg-brand-coral",
    },
  ];

  const allBrands = [...internationalBrands, ...regionalBrands];

  let filteredBrands = allBrands;

  if (typeParam === "international") {
    filteredBrands = internationalBrands;
  } else if (typeParam === "regional") {
    filteredBrands = regionalBrands;
  }

  if (categoryParam) {
    filteredBrands = filteredBrands.filter(
      (brand) => brand.category === categoryParam,
    );
  }

  const currentCategory = categories.find((c) => c.id === categoryParam);

  return (
    <>
      {/* Hero Section with Image */}
      <HeroSection
        title={t("trusted_fmcg_brands")}
        subtitle={t("brand_portfolio_nav")}
        description1={t("brand_portfolio_desc_1")}
        yellowText={t("brand_portfolio_desc_2")}
        description2={t("brand_portfolio_desc_3")}
        img={"/images/brands banner.webp"}
      />

      {/* Brand Type Filter */}
      <ScrollReveal delay={0.1}>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-8 ">
            <div className="flex flex-wrap items-center gap-4">
              <LocalizedLink
                href="/brands"
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${!typeParam && !categoryParam
                  ? "bg-brand-yellow text-black  text-base"
                  : "bg-white text-brand-charcoal hover:bg-brand-yellow hover:text-black"
                  }`}
              >
                {t("all_brands")}
              </LocalizedLink>
              <LocalizedLink
                href="/brands?type=international"
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2  ${typeParam === "international" && !categoryParam
                  ? "bg-brand-yellow text-black  text-base"
                  : "bg-white text-brand-charcoal hover:bg-brand-yellow hover:text-black"
                  }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-global-line text-lg"></i>
                </div>
                <span>{t("international_brands")}</span>
              </LocalizedLink>
              <LocalizedLink
                href="/brands?type=regional"
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2  ${typeParam === "regional" && !categoryParam
                  ? "bg-brand-yellow text-black  text-base"
                  : "bg-white text-brand-charcoal hover:bg-brand-yellow hover:text-black"
                  }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-lg"></i>
                </div>
                <span>{t("regional_brands")}</span>
              </LocalizedLink>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Brands Grid */}
      <ScrollReveal delay={0.2}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 ">
            <div className="flex items-center justify-between mb-12">
              <p className="text-lg text-brand-charcoal">
                {t("showing")}{" "}
                <strong className="text-brand-jet">
                  {filteredBrands.length}
                </strong>
                {t("brands_word")}
                {(typeParam || categoryParam) && (
                  <span>
                    {t("in_word")}
                    <strong className="text-brand-jet">
                      {currentCategory
                        ? currentCategory.name
                        : typeParam === "international"
                          ? t("international_brands")
                          : t("regional_brands")}
                    </strong>
                    {t("category_word")}
                  </span>
                )}
              </p>
            </div>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBrands.map((brand) => (
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
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs text-brand-charcoal font-medium uppercase tracking-wider">
                            {t(brand.category.replace("-", "_"))}
                          </span>
                          <span className="px-3 py-1 bg-brand-yellow text-black text-xs font-semibold rounded-full">
                            {brand.origin}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-brand-jet mb-3 transition-colors">
                          {brand.name}
                        </h3>
                        <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
                          {brand.description}
                        </p>
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-xs text-brand-charcoal font-semibold mb-2 uppercase tracking-wider">
                            {t("key_products")}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {brand.products.map((product, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-brand-paleblue text-brand-jet text-xs rounded-full"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
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
