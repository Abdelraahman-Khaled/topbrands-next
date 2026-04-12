"use client";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import StaggerContainer from "./StaggerContainer";
import StaggerItem from "./StaggerItem";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-[#4B4F54] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 pb-12 border-b border-gray-500">
            <a href="/" className="flex items-center mb-6 lg:mb-0 cursor-pointer">
              <img
                src="/images/footer.webp"
                alt="Top Brands Syria"
                className="h-12 w-auto"
              />
            </a>
            <p className="text-base ">{t("leading_fmcg")}</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <StaggerItem>
            <h4 className="text-lg font-semibold mb-6">{t("company")}</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="/about"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("about")}
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("services")}
                </a>
              </li>
              <li>
                <a
                  href="/brands"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("brand_portfolio")}
                </a>
              </li>
              <li>
                <a
                  href="/market-coverage"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("coverage")}
                </a>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-lg font-semibold mb-6">{t("categories")}</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="/brands?category=food-beverages"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("food_beverages")}
                </a>
              </li>
              <li>
                <a
                  href="/brands?category=snacks-confectionery"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("snacks_confectionery")}
                </a>
              </li>
              <li>
                <a
                  href="/brands?category=dairy-products"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("dairy_products")}
                </a>
              </li>
              <li>
                <a
                  href="/brands?category=non-food-fmcg"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("non_food_fmcg")}
                </a>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-lg font-semibold mb-6">{t("resources")}</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="/blog"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("blog_insights")}
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("faq")}
                </a>
              </li>
              <li>
                <a
                  href="/become-a-partner"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("become_partner")}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("contact_us")}
                </a>
              </li>
            </ul>
          </StaggerItem>

          <StaggerItem>
            <h4 className="text-lg font-semibold mb-6">{t("legal")}</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="/privacy-policy"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("privacy_policy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("terms_conditions")}
                </a>
              </li>
              <li>
                <a
                  href="/cookie-policy"
                  className=" hover:text-black hover:translate-x-1 rtl:hover:-translate-x-1 transition-all cursor-pointer inline-block"
                >
                  {t("cookie_policy")}
                </a>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-8 items-center pt-12 border-t border-gray-500">
            <div className="w-full h-44 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://readdy.ai/api/search-image?query=assorted%20branded%20FMCG%20products%20including%20packaged%20foods%20snacks%20and%20beverages%20arranged%20artistically%20on%20clean%20surface%20professional%20product%20photography%20bright%20lighting%20colorful%20packaging&width=280&height=180&seq=footer-products-001&orientation=landscape"
                alt="Products"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:px-6">
              <p className="text-3xl font-semibold  leading-snug">
                {t("quality_products")},
                <br />
                {t("reliable_distribution")},
                <br />
                {t("nationwide_reach")}
              </p>
            </div>

            <div className="text-right rtl:text-left">
              <p className="text-sm  mb-5 leading-relaxed">{t("stay_updated")}</p>
              <form className="flex rounded-lg overflow-hidden shadow-lg rtl:flex-row-reverse">
                <input
                  type="email"
                  name="email"
                  placeholder={t("enter_email")}
                  className="flex-1 px-4 py-3.5 bg-transparent border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-brand-yellow transition-all text-sm rounded-l-lg rtl:rounded-l-none rtl:rounded-r-lg"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-brand-yellow hover:brightness-110 text-brand-jet font-semibold transition-all inline-flex items-center space-x-2 rtl:space-x-reverse rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg whitespace-nowrap"
                >
                  <span>{t("subscribe")}</span>
                  <i className="ri-arrow-right-line rtl:rotate-180"></i>
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse mt-12 pt-8 border-t border-gray-500">
            <a
              href="#"
              className="w-10 border-[#4B4F54] border-2 h-10 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-jet transition-all cursor-pointer"
            >
              <i className="ri-linkedin-fill text-lg"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 border-[#4B4F54] border-2 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-jet transition-all cursor-pointer"
            >
              <i className="ri-facebook-fill text-lg"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 border-[#4B4F54] border-2 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-jet transition-all cursor-pointer"
            >
              <i className="ri-instagram-line text-lg"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 border-[#4B4F54] border-2 rounded-full flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow hover:text-brand-jet transition-all cursor-pointer"
            >
              <i className="ri-whatsapp-line text-lg"></i>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-center">
            <p className="text-sm  mb-2">
              © 2025 Top Brands Syria. {t("all_rights_reserved")}.
            </p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm  hover:text-black transition-colors"
            ></a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
