import Link from "next/link"
import { useTranslation } from "next-i18next";

export default function ProductsBrands() {
  const { t } = useTranslation();

  const internationalBrands = [
    {
      name: "PINAR",
      logo: "https://readdy.ai/api/search-image?query=PINAR%20Turkish%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=intl-pinar-001&orientation=landscape",
    },
    {
      name: "Ülker",
      logo: "https://readdy.ai/api/search-image?query=Ulker%20Turkish%20biscuit%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=intl-ulker-002&orientation=landscape",
    },
    {
      name: "Halta",
      logo: "https://readdy.ai/api/search-image?query=Halta%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=intl-halta-003&orientation=landscape",
    },
    {
      name: "Jacker",
      logo: "https://readdy.ai/api/search-image?query=Jacker%20snack%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=intl-jacker-004&orientation=landscape",
    },
    {
      name: "Nestle",
      logo: "https://readdy.ai/api/search-image?query=international%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=intl-brand-005&orientation=landscape",
    },
    {
      name: "Unilever",
      logo: "https://readdy.ai/api/search-image?query=global%20FMCG%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=intl-brand-006&orientation=landscape",
    },
  ];

  const regionalBrands = [
    {
      name: "Regional 1",
      logo: "https://readdy.ai/api/search-image?query=Middle%20Eastern%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=reg-brand-001&orientation=landscape",
    },
    {
      name: "Regional 2",
      logo: "https://readdy.ai/api/search-image?query=Arabic%20FMCG%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=reg-brand-002&orientation=landscape",
    },
    {
      name: "Regional 3",
      logo: "https://readdy.ai/api/search-image?query=Levantine%20consumer%20goods%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=reg-brand-003&orientation=landscape",
    },
    {
      name: "Regional 4",
      logo: "https://readdy.ai/api/search-image?query=Syrian%20local%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=reg-brand-004&orientation=landscape",
    },
    {
      name: "Regional 5",
      logo: "https://readdy.ai/api/search-image?query=regional%20food%20products%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=reg-brand-005&orientation=landscape",
    },
    {
      name: "Regional 6",
      logo: "https://readdy.ai/api/search-image?query=Middle%20East%20consumer%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=140&height=80&seq=reg-brand-006&orientation=landscape",
    },
  ];

  return (
    <section id="brands" className=" py-20 lg:py-28 relative overflow-hidden bg-[#DEE3EB]">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 ">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-2">
            {t("our_products")}
          </h2>
          <h2 className="text-5xl lg:text-6xl font-bold text-brand-charcoal">
            {t("our_portfolio")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Link
            to="/brands"
            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300  group cursor-pointer h-[720px] block"
          >
            <img
              src="https://readdy.ai/api/search-image?query=artistic%20flat%20lay%20composition%20of%20diverse%20FMCG%20products%20including%20packaged%20foods%20beverages%20snacks%20and%20household%20items%20arranged%20aesthetically%20on%20clean%20white%20surface%20professional%20product%20photography%20bright%20even%20lighting%20top%20down%20view%20colorful%20packaging&width=620&height=720&seq=products-montage-001&orientation=portrait"
              alt={t("our_brands")}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 rtl:left-8 rtl:right-8">
              <div className="bg-black/70 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm text-white uppercase tracking-widest mb-2">
                  {t("our_brands")}
                </p>
                <p className="text-2xl font-semibold text-white mb-4">
                  {t("explore_all_brands")}
                </p>
                <span className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-2.5 bg-brand-yellow text-brand-jet rounded-lg font-medium  transition-all whitespace-nowrap">
                  <span>{t("show_more")}</span>
                  <i className="ri-arrow-right-line rtl:rotate-180"></i>
                </span>
              </div>
            </div>
          </Link>

          <div className="space-y-8">
            <Link
              to="/brands?type=international"
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300  group cursor-pointer bg-white h-[344px] block"
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <p className="text-base font-semibold text-brand-charcoal mb-6">
                    {t("international_brands")}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {internationalBrands.map((brand, index) => (
                      <div
                        key={index}
                        className="w-full h-20 flex items-center justify-center"
                      >
                        <div className=" rounded-full p-3 shadow-md w-full h-full flex items-center justify-center">
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
                  <span className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-2.5 bg-brand-yellow text-brand-jet rounded-lg font-medium  transition-all whitespace-nowrap">
                    <span>{t("show_more")}</span>
                    <i className="ri-arrow-right-line rtl:rotate-180"></i>
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/brands?type=regional"
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300  group cursor-pointer bg-white h-[344px] block"
            >
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <p className="text-base font-semibold text-brand-charcoal mb-6">
                    {t("regional_brands")}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {regionalBrands.map((brand, index) => (
                      <div
                        key={index}
                        className="w-full h-20 flex items-center justify-center"
                      >
                        <div className=" rounded-full p-3 shadow-md w-full h-full flex items-center justify-center">
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
                  <span className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-2.5 bg-brand-yellow text-brand-jet rounded-lg font-medium  transition-all whitespace-nowrap">
                    <span>{t("show_more")}</span>
                    <i className="ri-arrow-right-line rtl:rotate-180"></i>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
