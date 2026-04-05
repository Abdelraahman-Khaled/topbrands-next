import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="w-full px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center cursor-pointer">
            <img
              src="https://static.readdy.ai/image/33ae949e9bb8604989b852dfb93165e8/f5682646b37da99c847f4d571dfb20bd.png"
              alt="Top Brands Syria"
              className="h-12 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center space-x-12 rtl:space-x-reverse">
            <a
              href="/"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("home")}
            </a>
            <a
              href="/about"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("about")}
            </a>
            <a
              href="/services"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("services")}
            </a>
            <a
              href="/brands"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("brands")}
            </a>
            <a
              href="/market-coverage"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("coverage")}
            </a>
            <a
              href="/blog"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("blog")}
            </a>
            <a
              href="/contact"
              className={`text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${isScrolled
                  ? "text-brand-charcoal hover:text-brand-yellow"
                  : "text-white hover:text-brand-yellow"
                }`}
            >
              {t("contact")}
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1.5 rounded-md font-bold transition-all flex items-center gap-2 ${isScrolled
                  ? "text-brand-charcoal hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
                }`}
            >
              <i className="ri-global-line"></i>
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
            <a
              href="/become-a-partner"
              className={`px-6 py-2.5 rounded-lg border-2 font-semibold transition-all whitespace-nowrap cursor-pointer ${isScrolled
                  ? "border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-brand-jet"
                }`}
            >
              {t("become_partner")}
            </a>
            <a
              href="/contact"
              className="px-6 py-2.5 bg-brand-yellow text-brand-jet rounded-lg font-semibold hover:brightness-110 transition-all whitespace-nowrap cursor-pointer"
            >
              {t("get_in_touch")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
