"use client";
import { useState } from "react";
import LocalizedLink from "../components/LocalizedLink";
import { useTranslation } from "react-i18next";
import Subscribe from "../components/Subscribe";
import ScrollReveal from "../components/ScrollReveal";
import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";



const blogPosts = [
  {
    id: 1,
    titleKey: "blog_1_title",
    excerptKey: "blog_1_excerpt",
    categoryKey: "market_insights",
    date: "March 15, 2025",
    readTime: "5 min read",
    image:
      "https://readdy.ai/api/search-image?query=modern%20syrian%20market%20supermarket%20shelves%20with%20colorful%20FMCG%20products%20professional%20retail%20environment%20bright%20lighting%20organized%20display&width=800&height=500&seq=blog1&orientation=landscape",
    authorKey: "market_research_team",
  },
  {
    id: 2,
    titleKey: "blog_2_title",
    excerptKey: "blog_2_excerpt",
    categoryKey: "consumer_behavior",
    date: "March 10, 2025",
    readTime: "7 min read",
    image:
      "https://readdy.ai/api/search-image?query=seasonal%20shopping%20calendar%20with%20fresh%20products%20fruits%20vegetables%20beverages%20snacks%20arranged%20by%20season%20colorful%20display%20professional%20photography&width=800&height=500&seq=blog2&orientation=landscape",
    authorKey: "consumer_insights_team",
  },
  {
    id: 3,
    titleKey: "blog_3_title",
    excerptKey: "blog_3_excerpt",
    categoryKey: "retail_trends",
    date: "March 5, 2025",
    readTime: "6 min read",
    image:
      "https://readdy.ai/api/search-image?query=modern%20supermarket%20interior%20in%20middle%20eastern%20city%20wide%20aisles%20bright%20lighting%20shoppers%20with%20carts%20professional%20retail%20space%20clean%20organized&width=800&height=500&seq=blog3&orientation=landscape",
    authorKey: "retail_strategy_team",
  },
  {
    id: 4,
    titleKey: "blog_4_title",
    excerptKey: "blog_4_excerpt",
    categoryKey: "distribution",
    date: "February 28, 2025",
    readTime: "8 min read",
    image:
      "https://readdy.ai/api/search-image?query=logistics%20trucks%20fleet%20on%20syrian%20roads%20professional%20distribution%20vehicles%20organized%20warehouse%20loading%20dock%20efficient%20operations&width=800&height=500&seq=blog4&orientation=landscape",
    authorKey: "operations_team",
  },
  {
    id: 5,
    titleKey: "blog_5_title",
    excerptKey: "blog_5_excerpt",
    categoryKey: "product_categories",
    date: "February 20, 2025",
    readTime: "5 min read",
    image:
      "https://readdy.ai/api/search-image?query=colorful%20snacks%20and%20confectionery%20products%20chips%20chocolates%20candies%20arranged%20attractively%20on%20retail%20shelf%20vibrant%20packaging%20professional%20display&width=800&height=500&seq=blog5&orientation=landscape",
    authorKey: "category_mgmt_team",
  },
  {
    id: 6,
    titleKey: "blog_6_title",
    excerptKey: "blog_6_excerpt",
    categoryKey: "logistics",
    date: "February 15, 2025",
    readTime: "6 min read",
    image:
      "https://readdy.ai/api/search-image?query=refrigerated%20warehouse%20with%20dairy%20products%20temperature%20controlled%20storage%20professional%20cold%20chain%20facility%20organized%20shelving%20modern%20equipment&width=800&height=500&seq=blog6&orientation=landscape",
    authorKey: "logistics_team",
  },
  {
    id: 7,
    titleKey: "blog_7_title",
    excerptKey: "blog_7_excerpt",
    categoryKey: "partnerships",
    date: "February 10, 2025",
    readTime: "7 min read",
    image:
      "https://readdy.ai/api/search-image?query=business%20handshake%20partnership%20meeting%20in%20modern%20office%20professional%20team%20collaboration%20middle%20eastern%20business%20setting%20bright%20environment&width=800&height=500&seq=blog7&orientation=landscape",
    authorKey: "partnership_team",
  },
  {
    id: 8,
    titleKey: "blog_8_title",
    excerptKey: "blog_8_excerpt",
    categoryKey: "digital_trends",
    date: "February 5, 2025",
    readTime: "6 min read",
    image:
      "https://readdy.ai/api/search-image?query=online%20shopping%20on%20mobile%20phone%20with%20grocery%20products%20digital%20commerce%20modern%20technology%20ecommerce%20app%20interface%20professional%20photography&width=800&height=500&seq=blog8&orientation=landscape",
    authorKey: "digital_innovation_team",
  },
  {
    id: 9,
    titleKey: "blog_9_title",
    excerptKey: "blog_9_excerpt",
    categoryKey: "quality_safety",
    date: "January 30, 2025",
    readTime: "5 min read",
    image:
      "https://readdy.ai/api/search-image?query=quality%20control%20inspector%20checking%20food%20products%20safety%20standards%20certification%20professional%20warehouse%20environment%20organized%20clean%20facility&width=800&height=500&seq=blog9&orientation=landscape",
    authorKey: "quality_assurance_team",
  },
];

const categoryKeys = [
  "all",
  "market_insights",
  "consumer_behavior",
  "retail_trends",
  "distribution",
  "product_categories",
  "logistics",
  "partnerships",
  "digital_trends",
  "quality_safety",
];

export default function Blog() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.categoryKey === selectedCategory);

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/blogs banner.webp"
            alt="Blog Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-6">
              <span
                className="px-6 py-2 bg-[#F7E326] text-[#000000] rounded-full text-sm font-bold uppercase tracking-wider"

              >
                {t("latest_updates")}
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"

            >
              {t("insights_updates")}
            </h1>
            <p
              className="text-lg md:text-xl text-[#E5E7EB] font-medium"

            >
              {t("stay_informed_blog")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <ScrollReveal>
        <section className="py-8 bg-white border-[#DEE3EB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {categoryKeys.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${selectedCategory === category
                    ? "bg-gradient-to-r from-[#F7E326] to-[#E5D324] text-[#000000] shadow-lg transform scale-105"
                    : "bg-white text-[#4B4F54] hover:bg-[#F7E326]/20 border-2 border-[#DEE3EB] hover:border-[#F7E326]"
                    }`}

                >
                  {t(category)}
                </button>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured Post */}
      {selectedCategory === "all" && (
        <ScrollReveal>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-8">
                <h2
                  className="text-3xl font-bold text-[#000000] flex items-center gap-3"

                >
                  <i className="ri-fire-fill text-brand-yellow text-4xl"></i>
                  {t("featured_article")}
                </h2>
              </div>
              <LocalizedLink
                href={`/blog/${blogPosts[0].id}`}
                className="block bg-gradient-to-br from-[#000000] to-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 sm:h-80 md:h-auto overflow-hidden">
                    <img
                      src={"/images/blogs/featured articles.webp"}
                      alt="featured articles"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6">
                      <span
                        className="bg-[#F7E326] text-[#000000] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2"

                      >
                        <i className="ri-star-fill"></i>
                        {t(blogPosts[0].categoryKey)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                    <div
                      className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4"

                    >
                      <span className="flex items-center gap-2 rtl:flex-row-reverse bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
                        <i className="ri-calendar-line text-brand-charcoal"></i>
                        {blogPosts[0].date}
                      </span>
                      <span className="flex items-center gap-2 rtl:flex-row-reverse bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap">
                        <i className="ri-time-line text-brand-yellow"></i>
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <h3
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-[#F7E326] duration-300 transition-colors"

                    >
                      {t(blogPosts[0].titleKey)}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 text-base sm:text-lg font-medium leading-relaxed"

                    >
                      {t(blogPosts[0].excerptKey)}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/20">
                      <span
                        className="text-xs sm:text-sm text-gray-400 font-semibold flex items-center gap-2 rtl:flex-row-reverse"

                      >
                        <i className="ri-user-line text-brand-charcoal"></i>
                        {t(blogPosts[0].authorKey)}
                      </span>
                      <span
                        className="bg-[#F7E326] text-[#000000] px-5 sm:px-6 py-2.5 sm:py-3 duration-300 rounded-lg font-bold flex items-center gap-2 rtl:flex-row-reverse group-hover:bg-white transition-all whitespace-nowrap text-sm sm:text-base"

                      >
                        {t("read_article")}
                        <i className="ri-arrow-right-line rtl:rotate-180"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </LocalizedLink>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-white via-[#DEE3EB]/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 md:mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#000000]"

            >
              {selectedCategory === "all"
                ? t("latest_articles")
                : `${t(selectedCategory)} ${t("articles")}`}
            </h2>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .slice(selectedCategory === "all" ? 1 : 0)
              .map((post) => (
                <StaggerItem key={post.id}>
                  <LocalizedLink
                    href={`/blog/${post.id}`}
                    className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-gray-200 block"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={t(post.titleKey)}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                        <span
                          className="bg-[#F7E326] text-[#000000] px-4 py-2 rounded-full text-sm font-bold shadow-lg"

                        >
                          {t(post.categoryKey)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div
                        className="flex items-center gap-4 text-sm text-[#4B4F54] mb-3"

                      >
                        <span className="flex items-center gap-1 rtl:flex-row-reverse">
                          <i className="ri-calendar-line text-brand-charcoal"></i>
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 rtl:flex-row-reverse">
                          <i className="ri-time-line text-brand-yellow"></i>
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold text-[#000000] mb-3 group-hover:text-black transition-colors line-clamp-2"

                      >
                        {t(post.titleKey)}
                      </h3>
                      <p
                        className="text-[#4B4F54] mb-4 font-medium leading-relaxed line-clamp-3"

                      >
                        {t(post.excerptKey)}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#DEE3EB]">
                        <span
                          className="text-sm text-[#4B4F54] font-semibold"

                        >
                          {t(post.authorKey)}
                        </span>
                        <span
                          className="text-brand-charcoal font-bold flex items-center gap-2 rtl:flex-row-reverse group-hover:gap-3 transition-all whitespace-nowrap"

                        >
                          {t("read_more")}
                          <i className="ri-arrow-right-line rtl:rotate-180"></i>
                        </span>
                      </div>
                    </div>
                  </LocalizedLink>
                </StaggerItem>
              ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <Subscribe title={t("newsletter_title")} mail={true} />


    </div>
  );
}

