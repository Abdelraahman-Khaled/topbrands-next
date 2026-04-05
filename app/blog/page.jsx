import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";



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
      <section className="relative pt-32 pb-20 min-h-[500px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20business%20person%20writing%20blog%20article%20on%20laptop%20in%20modern%20office%20workspace%20with%20coffee%20cup%20notebooks%20and%20plants%20bright%20natural%20lighting%20creative%20workspace%20inspiring%20environment%20clean%20desk%20setup&width=1920&height=600&seq=blog-hero-main-001&orientation=landscape"
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
                style={{ fontFamily: "Quicksand" }}
              >
                {t("latest_updates")}
              </span>
            </div>
            <h1
              className="text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "Quicksand" }}
            >
              {t("insights_updates")}
            </h1>
            <p
              className="text-xl text-gray-200 font-medium"
              style={{ fontFamily: "Quicksand" }}
            >
              {t("stay_informed_blog")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-r from-[#DEE3EB] to-white border-b border-[#DEE3EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryKeys.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${selectedCategory === category
                  ? "bg-gradient-to-r from-[#F7E326] to-[#E5D324] text-[#000000] shadow-lg transform scale-105"
                  : "bg-white text-[#4B4F54] hover:bg-[#F7E326]/20 border-2 border-[#DEE3EB] hover:border-[#F7E326]"
                  }`}
                style={{ fontFamily: "Quicksand" }}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "all" && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <h2
                className="text-3xl font-bold text-[#000000] flex items-center gap-3"
                style={{ fontFamily: "Quicksand" }}
              >
                <i className="ri-fire-fill text-[#FF6B6B] text-4xl"></i>
                {t("featured_article")}
              </h2>
            </div>
            <Link
              to={`/blog/${blogPosts[0].id}`}
              className="block bg-gradient-to-br from-[#000000] to-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={t(blogPosts[0].titleKey)}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6">
                    <span
                      className="bg-[#F7E326] text-[#000000] px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      <i className="ri-star-fill"></i>
                      {t(blogPosts[0].categoryKey)}
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div
                    className="flex items-center gap-4 text-sm text-gray-400 mb-4"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    <span className="flex items-center gap-2 rtl:flex-row-reverse bg-white/10 px-4 py-2 rounded-full">
                      <i className="ri-calendar-line text-[#14B8A6]"></i>
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-2 rtl:flex-row-reverse bg-white/10 px-4 py-2 rounded-full">
                      <i className="ri-time-line text-[#FF6B6B]"></i>
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <h3
                    className="text-4xl font-bold text-white mb-4 group-hover:text-[#F7E326] transition-colors"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    {t(blogPosts[0].titleKey)}
                  </h3>
                  <p
                    className="text-gray-300 mb-6 text-lg font-medium leading-relaxed"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    {t(blogPosts[0].excerptKey)}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/20">
                    <span
                      className="text-sm text-gray-400 font-semibold flex items-center gap-2 rtl:flex-row-reverse"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      <i className="ri-user-line text-[#14B8A6]"></i>
                      {t(blogPosts[0].authorKey)}
                    </span>
                    <span
                      className="bg-[#F7E326] text-[#000000] px-6 py-3 rounded-lg font-bold flex items-center gap-2 rtl:flex-row-reverse group-hover:bg-white transition-all whitespace-nowrap"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      {t("read_article")}
                      <i className="ri-arrow-right-line rtl:rotate-180"></i>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-white via-[#DEE3EB]/30 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2
              className="text-3xl font-bold text-[#000000]"
              style={{ fontFamily: "Quicksand" }}
            >
              {selectedCategory === "all"
                ? t("latest_articles")
                : `${t(selectedCategory)} ${t("articles")}`}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .slice(selectedCategory === "all" ? 1 : 0)
              .map((post) => (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-[#14B8A6] block"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={t(post.titleKey)}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                      <span
                        className="bg-[#F7E326] text-[#000000] px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                        style={{ fontFamily: "Quicksand" }}
                      >
                        {t(post.categoryKey)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div
                      className="flex items-center gap-4 text-sm text-[#4B4F54] mb-3"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      <span className="flex items-center gap-1 rtl:flex-row-reverse">
                        <i className="ri-calendar-line text-[#14B8A6]"></i>
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1 rtl:flex-row-reverse">
                        <i className="ri-time-line text-[#FF6B6B]"></i>
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-[#000000] mb-3 group-hover:text-[#14B8A6] transition-colors line-clamp-2"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      {t(post.titleKey)}
                    </h3>
                    <p
                      className="text-[#4B4F54] mb-4 font-medium leading-relaxed line-clamp-3"
                      style={{ fontFamily: "Quicksand" }}
                    >
                      {t(post.excerptKey)}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#DEE3EB]">
                      <span
                        className="text-sm text-[#4B4F54] font-semibold"
                        style={{ fontFamily: "Quicksand" }}
                      >
                        {t(post.authorKey)}
                      </span>
                      <span
                        className="text-[#14B8A6] font-bold flex items-center gap-2 rtl:flex-row-reverse group-hover:gap-3 transition-all whitespace-nowrap"
                        style={{ fontFamily: "Quicksand" }}
                      >
                        {t("read_more")}
                        <i className="ri-arrow-right-line rtl:rotate-180"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-[#14B8A6] via-[#0D9488] to-[#14B8A6] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7E326] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <i className="ri-mail-line text-6xl text-white"></i>
          </div>
          <h2
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "Quicksand" }}
          >
            {t("subscribe_newsletter")}
          </h2>
          <p
            className="text-xl text-white/90 mb-8 font-medium"
            style={{ fontFamily: "Quicksand" }}
          >
            {t("get_latest_insights")}
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder={t("enter_email_address")}
              className="flex-1 px-6 py-4 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white focus:bg-white/20 outline-none font-medium text-left rtl:text-right"
              style={{ fontFamily: "Quicksand" }}
            />
            <button
              type="submit"
              className="bg-[#F7E326] text-[#000000] px-8 py-4 rounded-lg font-bold hover:bg-white transition-all shadow-lg whitespace-nowrap cursor-pointer"
              style={{ fontFamily: "Quicksand" }}
            >
              {t("subscribe_now")}
            </button>
          </form>
        </div>
      </section>


    </div>
  );
}
