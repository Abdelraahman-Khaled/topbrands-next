import { useSearchParams, Link } from "react-router-dom";
import { useTranslation } from "next-i18next";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

export default function BrandsPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const categoryParam = searchParams.get("category");

  const internationalBrands = [
    {
      id: 1,
      name: "PINAR",
      slug: "pinar",
      logo: "https://readdy.ai/api/search-image?query=PINAR%20Turkish%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-pinar-page-001&orientation=landscape",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Leading Turkish food brand specializing in dairy products, olive oil, and premium food items with international quality standards.",
      products: ["Olive Oil", "Dairy Products", "Cheese", "Butter"],
      origin: "Turkey",
    },
    {
      id: 2,
      name: "Ülker",
      slug: "ulker",
      logo: "https://readdy.ai/api/search-image?query=Ulker%20Turkish%20biscuit%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-ulker-page-002&orientation=landscape",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "One of Turkey's most beloved snack brands, offering a wide range of biscuits, chocolates, and confectionery products.",
      products: ["Biscuits", "Chocolates", "Wafers", "Cakes"],
      origin: "Turkey",
    },
    {
      id: 3,
      name: "Halta",
      slug: "halta",
      logo: "https://readdy.ai/api/search-image?query=Halta%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-halta-page-003&orientation=landscape",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Premium food and beverage brand known for natural juices, sauces, and quality food products.",
      products: ["Fruit Juices", "Tomato Paste", "Sauces", "Beverages"],
      origin: "International",
    },
    {
      id: 4,
      name: "Jacker",
      slug: "jacker",
      logo: "https://readdy.ai/api/search-image?query=Jacker%20snack%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-jacker-page-004&orientation=landscape",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "Popular snack brand offering crispy chips, crackers, and savory snacks for all occasions.",
      products: ["Potato Chips", "Crackers", "Corn Snacks", "Savory Snacks"],
      origin: "International",
    },
    {
      id: 5,
      name: "Global Dairy Co.",
      slug: "global-dairy-co",
      logo: "https://readdy.ai/api/search-image?query=international%20dairy%20products%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-intl-page-005&orientation=landscape",
      category: "dairy-products",
      categoryName: "Dairy Products",
      description:
        "International dairy brand providing fresh milk, yogurt, and dairy essentials with strict quality control.",
      products: ["Fresh Milk", "Yogurt", "Cream", "Dairy Desserts"],
      origin: "International",
    },
    {
      id: 6,
      name: "RefreshCo",
      slug: "refreshco",
      logo: "https://readdy.ai/api/search-image?query=global%20beverage%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-intl-page-006&orientation=landscape",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Global beverage company offering refreshing drinks, energy beverages, and premium water products.",
      products: ["Soft Drinks", "Energy Drinks", "Bottled Water", "Juices"],
      origin: "International",
    },
  ];

  const regionalBrands = [
    {
      id: 7,
      name: "Al Sham Foods",
      slug: "al-sham-foods",
      logo: "https://readdy.ai/api/search-image?query=Middle%20Eastern%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-reg-page-001&orientation=landscape",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Authentic Middle Eastern food brand specializing in traditional flavors and regional specialties.",
      products: ["Tahini", "Halva", "Spices", "Traditional Foods"],
      origin: "Syria",
    },
    {
      id: 8,
      name: "Damascus Essentials",
      slug: "damascus-essentials",
      logo: "https://readdy.ai/api/search-image?query=Arabic%20FMCG%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-reg-page-002&orientation=landscape",
      category: "non-food-fmcg",
      categoryName: "Non-Food FMCG",
      description:
        "Leading regional FMCG brand providing household essentials and personal care products.",
      products: [
        "Cleaning Products",
        "Personal Care",
        "Household Items",
        "Hygiene Products",
      ],
      origin: "Syria",
    },
    {
      id: 9,
      name: "Levant Sweets",
      slug: "levant-sweets",
      logo: "https://readdy.ai/api/search-image?query=Levantine%20consumer%20goods%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-reg-page-003&orientation=landscape",
      category: "snacks-confectionery",
      categoryName: "Snacks & Confectionery",
      description:
        "Traditional Levantine confectionery brand offering authentic sweets and snacks.",
      products: ["Baklava", "Maamoul", "Traditional Sweets", "Nuts"],
      origin: "Syria",
    },
    {
      id: 10,
      name: "Syrian Dairy Fresh",
      slug: "syrian-dairy-fresh",
      logo: "https://readdy.ai/api/search-image?query=Syrian%20local%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-reg-page-004&orientation=landscape",
      category: "dairy-products",
      categoryName: "Dairy Products",
      description:
        "Local dairy producer known for fresh milk, labneh, and traditional Syrian dairy products.",
      products: ["Fresh Milk", "Labneh", "White Cheese", "Yogurt"],
      origin: "Syria",
    },
    {
      id: 11,
      name: "Aleppo Gourmet",
      slug: "aleppo-gourmet",
      logo: "https://readdy.ai/api/search-image?query=regional%20food%20products%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-reg-page-005&orientation=landscape",
      category: "food-beverages",
      categoryName: "Food & Beverages",
      description:
        "Premium regional food brand featuring gourmet products and specialty ingredients.",
      products: ["Olive Oil", "Pickles", "Preserves", "Gourmet Foods"],
      origin: "Syria",
    },
    {
      id: 12,
      name: "Orient Home Care",
      slug: "orient-home-care",
      logo: "https://readdy.ai/api/search-image?query=Middle%20East%20consumer%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=200&height=120&seq=brand-reg-page-006&orientation=landscape",
      category: "non-food-fmcg",
      categoryName: "Non-Food FMCG",
      description:
        "Regional home care brand providing quality cleaning and household maintenance products.",
      products: ["Detergents", "Cleaners", "Air Fresheners", "Tissues"],
      origin: "Syria",
    },
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
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=diverse%20international%20and%20regional%20FMCG%20brand%20products%20arranged%20professionally%20on%20display%20shelves%20colorful%20packaging%20modern%20retail%20environment%20bright%20lighting%20organized%20presentation%20Syria%20Damascus&width=1920&height=600&seq=brands-hero-main&orientation=landscape"
            alt="Brand Portfolio"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
            <span className="text-sm font-semibold text-brand-teal tracking-widest uppercase">
              {t("brand_portfolio_nav")}
            </span>
            <div className="h-px w-16 bg-brand-teal"></div>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            {currentCategory
              ? currentCategory.name
              : typeParam === "international"
                ? t("international_brands")
                : typeParam === "regional"
                  ? t("regional_brands")
                  : t("trusted_fmcg_brands")}
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
            {t("brand_portfolio_desc_1")}
            <strong className="font-semibold text-brand-yellow">
              {t("brand_portfolio_desc_2")}
            </strong>
            {t("brand_portfolio_desc_3")}
          </p>
        </div>
      </section>

      {/* Brand Type Filter */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/brands"
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${!typeParam && !categoryParam
                ? "bg-brand-teal text-white"
                : "bg-brand-paleblue text-brand-charcoal hover:bg-brand-teal hover:text-white"
                }`}
            >
              {t("all_brands")}
            </a>
            <a
              href="/brands?type=international"
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 rtl:space-x-reverse ${typeParam === "international" && !categoryParam
                ? "bg-brand-teal text-white"
                : "bg-brand-paleblue text-brand-charcoal hover:bg-brand-teal hover:text-white"
                }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-global-line text-lg"></i>
              </div>
              <span>{t("international_brands")}</span>
            </a>
            <a
              href="/brands?type=regional"
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 rtl:space-x-reverse ${typeParam === "regional" && !categoryParam
                ? "bg-brand-teal text-white"
                : "bg-brand-paleblue text-brand-charcoal hover:bg-brand-teal hover:text-white"
                }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-map-pin-line text-lg"></i>
              </div>
              <span>{t("regional_brands")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">
              {t("product_categories")}
            </h2>
            <p className="text-xl text-brand-charcoal">
              {t("comprehensive_fmcg_dist")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href={`/brands?category=${category.id}`}
                className={`group bg-brand-paleblue rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border-2 text-center cursor-pointer block ${categoryParam === category.id
                  ? "border-brand-teal"
                  : "border-transparent hover:border-brand-teal"
                  }`}
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center ${category.color} rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${category.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-brand-jet mb-2">
                  {category.name}
                </h3>
                <span className="text-sm text-brand-charcoal group-hover:text-brand-teal transition-colors flex items-center justify-center space-x-1 rtl:space-x-reverse">
                  <span>{t("view_brands")}</span>
                  <i className="ri-arrow-right-line group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"></i>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-coral cursor-pointer block"
              >
                <div className="w-full h-40 flex items-center justify-center bg-brand-paleblue p-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-brand-charcoal font-medium uppercase tracking-wider">
                      {t(brand.category.replace("-", "_"))}
                    </span>
                    <span className="px-3 py-1 bg-brand-coral text-white text-xs font-semibold rounded-full">
                      {brand.origin}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-jet mb-3 group-hover:text-brand-teal transition-colors">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-charcoal to-brand-jet">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("want_your_brand_distributed")}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("join_growing_portfolio")}
          </p>
          <a
            href="/become-a-partner"
            className="inline-flex items-center space-x-3 rtl:space-x-reverse px-10 py-4 bg-brand-coral text-white rounded-full font-semibold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <span>{t("become_partner")}</span>
            <i className="ri-arrow-right-line text-xl rtl:rotate-180"></i>
          </a>
        </div>
      </section>


    </div>
  );
}
