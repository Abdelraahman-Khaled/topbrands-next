import HeroSection from "../components/HeroSection";
import GlobalCTA from "../components/GlobalCTA";
import ScrollReveal from "../components/ScrollReveal";
import Counter from "../components/Counter";
import { getPageData } from "@/services/home.service";
import BrandsGrid from "./BrandsGrid";

export default async function BrandsPage({ params }) {
  const { locale } = await params;
  const data = await getPageData("brands", locale, 1);

  if (!data || !data.brands) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-jet mb-4">
            {locale === "ar" ? "خطأ في تحميل العلامات التجارية" : "Error loading brands"}
          </h1>
          <p className="text-brand-charcoal">
            {locale === "ar" ? "يرجى المحاولة مرة أخرى في وقت لاحق." : "Please try again later."}
          </p>
        </div>
      </div>
    );
  }

  const { brands, sections, pagination } = data;

  const findSection = (key) => sections.find((s) => s[key])?.[key];
  const heroData = findSection("hero");
  const ctaData = findSection("categories");

  return (
    <div className="min-h-screen bg-[#DEE3EB]">
      {heroData && <HeroSection data={heroData} />}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-between mb-12">
              <p className="text-lg text-brand-charcoal font-medium">
                {locale === "ar" ? (
                  <>
                    إظهار <strong className="text-brand-jet">{pagination?.total_count ?? brands.length}</strong> علامة تجارية موثوقة
                  </>
                ) : (
                  <>
                    Showing <strong className="text-brand-jet">{pagination?.total_count ?? brands.length} </strong> trusted brands
                  </>
                )}
              </p>
            </div>
          </ScrollReveal>

          <BrandsGrid initialBrands={brands} initialPagination={pagination} locale={locale} />
        </div>
      </section>

      {ctaData && <GlobalCTA data={ctaData} />}
    </div>
  );
}
