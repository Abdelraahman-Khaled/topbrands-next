import GlobalCTA from "../../components/GlobalCTA";
import LocalizedLink from '../../components/LocalizedLink';
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import { getBrandProducts } from "@/services/home.service";

export default async function BrandDetailPage({ params }) {
  const { slug, locale } = await params;
  const isAr = locale === 'ar';

  // Fetching brand and its products data
  const data = await getBrandProducts(slug, locale);
  const brandData = data?.brand;

  if (!brandData) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-brand-jet mb-4">
            {isAr ? "العلامة التجارية غير موجودة" : "Brand Not Found"}
          </h1>
          <LocalizedLink href="/brands" className="text-brand-teal hover:underline text-lg font-medium">
            {isAr ? "العودة إلى القائمة" : "Back to Brands"}
          </LocalizedLink>
        </div>
      </div>
    );
  }

  // Simplified mapping using the translated keys provided by the API
  const title = brandData.title;
  const description = brandData.description;
  const brandProducts = brandData.products || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Brand Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none opacity-80"
          style={{ backgroundImage: "url('/images/blogs%20banner.webp')" }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-brand-paleblue/20 via-white/40 to-white/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <LocalizedLink
            href="/brands"
            className="inline-flex items-center space-x-2 text-black hover:text-brand-yellow transition-colors mb-8 cursor-pointer group"
          >
            <i className={`ri-arrow-${isAr ? 'right' : 'left'}-line text-xl group-hover:${isAr ? 'translate-x-1' : '-translate-x-1'} transition-transform`}></i>
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm">
              {isAr ? "العودة إلى العلامات التجارية" : "Back to Brands"}
            </span>
          </LocalizedLink>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className={`order-2 lg:order-1 ${isAr ? 'text-right' : 'text-left'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-jet mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-medium text-brand-charcoal leading-relaxed mb-8 md:mb-10 max-w-2xl opacity-90">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <LocalizedLink
                  href="/contact"
                  className="mask-btn mask-btn--yellow-black !rounded-full shadow-lg hover:shadow-xl group"
                >
                  <span className="mask-btn__label gap-3">
                    {isAr ? "تواصل للطلب" : "Contact for Orders"}
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </span>
                  <span className="mask-btn__fill gap-3">
                    {isAr ? "تواصل للطلب" : "Contact for Orders"}
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </span>
                </LocalizedLink>
                <LocalizedLink
                  href="/contact"
                  className="mask-btn mask-btn--none-black !rounded-full shadow-lg hover:shadow-xl group"
                >
                  <span className="mask-btn__label gap-3">
                    {isAr ? "كن شريكاً" : "Become a partner"}
                  </span>
                  <span className="mask-btn__fill gap-3">
                    {isAr ? "كن شريكاً" : "Become a partner"}
                  </span>
                </LocalizedLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-[48px] shadow-2xl p-8 md:p-16 flex items-center justify-center relative overflow-hidden group border border-gray-100">
                <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={brandData.image_url}
                  alt={brandData.alt_text || brandData.title}
                  className="max-w-full max-h-48 md:max-h-64 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      {brandProducts.length > 0 && (
        <ScrollReveal delay={0.1}>
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
              <div className="text-center mb-12 md:mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-brand-jet mb-4 md:mb-6 leading-tight">
                  {isAr ? "منتجات مختارة من" : "Featured Products from"} {title}
                </h2>
              </div>

              <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-center">
                {brandProducts.map((product) => (
                  <div
                    key={product.id}
                    className="block h-full group shadow-xl bg-white rounded-3xl overflow-hidden border-2 border-transparent transition-all hover:border-[#F7E326]"
                  >
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-brand-jet mb-4">
                        {product.title}
                      </h3>
                      <div className="flex items-center text-brand-yellow font-bold gap-2">
                        <i className="ri-checkbox-circle-line"></i>
                        {isAr ? "متوفر الآن" : "Available Now"}
                      </div>
                    </div>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* CTA Section */}
      <GlobalCTA
        title={isAr ? `مهتم بمنتجات ${title}؟` : `Interested in ${title} Products?`}
        subtitle={isAr
          ? `كن شريكاً لنا لجلب مجموعة ${title} المميزة لعملائك.`
          : `Partner with us to bring ${title}'s premium range to your customers.`}
        btnText="contact_us"
      />
    </div>
  );
}
