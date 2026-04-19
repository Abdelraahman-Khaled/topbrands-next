"use client";
import GlobalCTA from "../../components/GlobalCTA";
import LocalizedLink from '../../components/LocalizedLink';
import { useParams } from 'next/navigation';
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";


export default function BrandDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams();

  // Mapping slugs to translation keys to maintain dynamic content
  const brandsData = {
    'coffee-joy': {
      name: t('brand_coffee_joy_name'),
      logo: '/images/brands/Coffee Joy.webp',
      slug: "coffee-joy",
      description: t('brand_coffee_joy_desc'),
      products: [
        { id: 1, name: t('brand_coffee_joy_prod_1_name'), size: '45g', image: '/images/brands/Coffee Joy.webp', description: t('brand_coffee_joy_prod_1_desc') },
        { id: 2, name: t('brand_coffee_joy_prod_2_name'), size: '180g', image: '/images/brands/Coffee Joy.webp', description: t('brand_coffee_joy_prod_2_desc') }
      ]
    },
    'danisa': {
      name: t('brand_danisa_name'),
      logo: '/images/brands/Danisa.webp',
      slug: "danisa",
      description: t('brand_danisa_desc'),
      products: [
        { id: 1, name: t('brand_danisa_prod_1_name'), size: '454g', image: 'https://readdy.ai/api/search-image?query=Danisa%20butter%20cookies%20blue%20tin%20premium%20gift&width=400&height=400&seq=dan-1', description: t('brand_danisa_prod_1_desc') },
        { id: 2, name: t('brand_danisa_prod_2_name'), size: '200g', image: 'https://readdy.ai/api/search-image?query=Danisa%20cookies%20luxury%20packaging&width=400&height=400&seq=dan-2', description: t('brand_danisa_prod_2_desc') }
      ]
    },
    'domty': {
      name: t('brand_domty_name'),
      logo: '/images/brands/Domty.webp',
      slug: "domty",
      description: t('brand_domty_desc'),
      products: [
        { id: 1, name: t('brand_domty_prod_1_name'), size: '500g', image: 'https://readdy.ai/api/search-image?query=Domty%20feta%20cheese%20white%20packaging%20fresh%20dairy&width=400&height=400&seq=dom-1', description: t('brand_domty_prod_1_desc') },
        { id: 2, name: t('brand_domty_prod_2_name'), size: '1L', image: 'https://readdy.ai/api/search-image?query=Domty%20mango%20juice%20carton%20refreshing%20beverage&width=400&height=400&seq=dom-2', description: t('brand_domty_prod_2_desc') }
      ]
    },
    'kopiko': {
      name: t('brand_kopiko_name'),
      logo: '/images/brands/Kopiko.webp',
      slug: "kopiko",
      description: t('brand_kopiko_desc'),
      products: [
        { id: 1, name: t('brand_kopiko_prod_1_name'), size: '150g', image: 'https://readdy.ai/api/search-image?query=Kopiko%20coffee%20candy%20pouch%20real%20coffee%20extract&width=400&height=400&seq=kop-1', description: t('brand_kopiko_prod_1_desc') },
        { id: 2, name: t('brand_kopiko_prod_2_name'), size: '250ml', image: 'https://readdy.ai/api/search-image?query=Kopiko%20Lucky%20Day%20coffee%20drink%20bottle&width=400&height=400&seq=kop-2', description: t('brand_kopiko_prod_2_desc') }
      ]
    },
    'landessa': {
      name: t('brand_landessa_name'),
      logo: '/images/brands/Landessa.webp',
      slug: "landessa",
      description: t('brand_landessa_desc'),
      products: [
        { id: 1, name: t('brand_landessa_prod_1_name'), size: '230ml', image: 'https://readdy.ai/api/search-image?query=Landessa%20iced%20coffee%20latte%20can%20alpine%20milk&width=400&height=400&seq=lan-1', description: t('brand_landessa_prod_1_desc') },
        { id: 2, name: t('brand_landessa_prod_2_name'), size: '230ml', image: 'https://readdy.ai/api/search-image?query=Landessa%20iced%20coffee%20espresso%20can&width=400&height=400&seq=lan-2', description: t('brand_landessa_prod_2_desc') }
      ]
    },
    'leeza': {
      name: t('brand_leeza_name'),
      logo: '/images/brands/Leeza.webp',
      slug: "leeza",
      description: t('brand_leeza_desc'),
      products: [
        { id: 1, name: t('brand_leeza_prod_1_name'), size: '350g', image: 'https://readdy.ai/api/search-image?query=Leeza%20chocolate%20hazelnut%20spread%20jar&width=400&height=400&seq=lee-1', description: t('brand_leeza_prod_1_desc') },
        { id: 2, name: t('brand_leeza_prod_2_name'), size: '150g', image: 'https://readdy.ai/api/search-image?query=Leeza%20wafer%20snack%20cream%20filled&width=400&height=400&seq=lee-2', description: t('brand_leeza_prod_2_desc') }
      ]
    },
    'lotus': {
      name: t('brand_lotus_name'),
      logo: '/images/brands/Lotus.webp',
      slug: "lotus",
      description: t('brand_lotus_desc'),
      products: [
        { id: 1, name: t('brand_lotus_prod_1_name'), size: '250g', image: 'https://readdy.ai/api/search-image?query=Lotus%20Biscoff%20biscuits%20pack%20caramelized&width=400&height=400&seq=lot-1', description: t('brand_lotus_prod_1_desc') },
        { id: 2, name: t('brand_lotus_prod_2_name'), size: '400g', image: 'https://readdy.ai/api/search-image?query=Lotus%20Biscoff%20cookie%20spread%20jar&width=400&height=400&seq=lot-2', description: t('brand_lotus_prod_2_desc') }
      ]
    },
    'pinar-regional': {
      name: t('brand_pinar_regional_name'),
      logo: '/images/brands/Pinar.webp',
      slug: "pinar-regional",
      description: t('brand_pinar_regional_desc'),
      products: [
        { id: 1, name: t('brand_pinar_regional_prod_1_name'), size: '400g', image: 'https://readdy.ai/api/search-image?query=Pinar%20labneh%20tub%20creamy%20turkish%20cheese&width=400&height=400&seq=pin-1', description: t('brand_pinar_regional_prod_1_desc') },
        { id: 2, name: t('brand_pinar_regional_prod_2_name'), size: '500g', image: 'https://readdy.ai/api/search-image?query=Pinar%20white%20cheese%20turkish%20style&width=400&height=400&seq=pin-2', description: t('brand_pinar_regional_prod_2_desc') }
      ]
    },
    'sirarcha': {
      name: t('brand_sirarcha_name'),
      logo: '/images/brands/Sirarcha.webp',
      slug: "sirarcha",
      description: t('brand_sirarcha_desc'),
      products: [
        { id: 1, name: t('brand_sirarcha_prod_1_name'), size: '480ml', image: 'https://readdy.ai/api/search-image?query=Sriracha%20chili%20sauce%20bottle%20hot%20spicy&width=400&height=400&seq=sir-1', description: t('brand_sirarcha_prod_1_desc') },
        { id: 2, name: t('brand_sirarcha_prod_2_name'), size: '430ml', image: 'https://readdy.ai/api/search-image?query=Sriracha%20mayo%20sauce%20creamy%20spicy&width=400&height=400&seq=sir-2', description: t('brand_sirarcha_prod_2_desc') }
      ]
    },
    'ulker-regional': {
      name: t('brand_ulker_regional_name'),
      logo: '/images/brands/Ulker.webp',
      slug: "ulker-regional",
      description: t('brand_ulker_regional_desc'),
      products: [
        { id: 1, name: t('brand_ulker_regional_prod_1_name'), size: '80g', image: 'https://readdy.ai/api/search-image?query=Ulker%20chocolate%20bar%20turkish%20confectionery&width=400&height=400&seq=ulk-1', description: t('brand_ulker_regional_prod_1_desc') },
        { id: 2, name: t('brand_ulker_regional_prod_2_name'), size: '150g', image: 'https://readdy.ai/api/search-image?query=Ulker%20petit%20beurre%20biscuits%20classic&width=400&height=400&seq=ulk-2', description: t('brand_ulker_regional_prod_2_desc') }
      ]
    },
    'wild-power': {
      name: t('brand_wild_power_name'),
      logo: '/images/brands/Wild Power.webp',
      slug: "wild-power",
      description: t('brand_wild_power_desc'),
      products: [
        { id: 1, name: t('brand_wild_power_prod_1_name'), size: '250ml', image: 'https://readdy.ai/api/search-image?query=Wild%20Power%20energy%20drink%20can%20refreshing&width=400&height=400&seq=wp-1', description: t('brand_wild_power_prod_1_desc') },
        { id: 2, name: t('brand_wild_power_prod_2_name'), size: '250ml', image: 'https://readdy.ai/api/search-image?query=Wild%20Power%20energy%20drink%20can%20sugar%20free&width=400&height=400&seq=wp-2', description: t('brand_wild_power_prod_2_desc') }
      ]
    }
  };

  const brand = slug ? brandsData[slug] : null;

  if (!brand) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-brand-jet mb-4">{t('brand_not_found')}</h1>
          <LocalizedLink href="/brands" className="text-brand-teal hover:underline text-lg font-medium">
            {t('back_to_brands')}
          </LocalizedLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Brand Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-white overflow-hidden">
        {/* Background Layer with Image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center pointer-events-none "
          style={{ backgroundImage: "url('/images/blogs%20banner.webp')" }}
        />
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-brand-paleblue/20 via-white/40 to-white/80 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <LocalizedLink
            href="/brands"
            className="inline-flex items-center space-x-2 text-black hover:text-black transition-colors mb-8 cursor-pointer group"
          >
            <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform"></i>
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm">{t('back_to_brands')}</span>
          </LocalizedLink>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-jet mb-6 leading-tight">{brand.name}</h1>
              <p className="text-base md:text-lg lg:text-xl font-medium text-black leading-relaxed mb-8 md:mb-10 max-w-2xl opacity-90">
                {brand.description}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <LocalizedLink
                  href="/contact"
                  className="mask-btn mask-btn--yellow-black !rounded-full shadow-lg hover:shadow-xl group"
                >
                  <span className="mask-btn__label gap-3">
                    {t('contact_for_orders')}
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </span>
                  <span className="mask-btn__fill gap-3">
                    {t('contact_for_orders')}
                    <i className="ri-shopping-cart-line text-lg"></i>
                  </span>
                </LocalizedLink>
                <LocalizedLink
                  href="/partner"
                  className="mask-btn mask-btn--none-black !rounded-full group"
                >
                  <span className="mask-btn__label">
                    {t('become_a_partner')}
                  </span>
                  <span className="mask-btn__fill">
                    {t('become_a_partner')}
                  </span>
                </LocalizedLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-[48px] shadow-2xl p-8 md:p-16 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-48 md:max-h-64 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ScrollReveal delay={0.1}>
        <section className="py-16 md:py-24" data-product-shop>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-brand-jet mb-4 md:mb-6 leading-tight">
                {t('featured_products_title', { name: brand.name })}
              </h2>
              <p className="text-base md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
                {t('featured_products_desc', { name: brand.name })}
              </p>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {brand.products.map((product) => (
                <>
                  <div
                    key={product.id}
                    className="block h-full group shadow-xl bg-white rounded-2xl overflow-hidden border-2 border-transparent cursor-pointer"
                  >
                    <div className="h-full">
                      <div className="w-full h-40 flex items-center justify-center bg-white p-6">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-brand-jet mb-3 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
                          {product.description}
                        </p>
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-xs text-brand-charcoal font-semibold mb-2 uppercase tracking-wider">
                            {t("key_products")}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span
                              className="px-3 py-1 bg-brand-paleblue text-brand-jet text-xs rounded-full"
                            >
                              {product.size}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal delay={0.2}>
        <GlobalCTA
          title={`${t("Interested_in")} ${brand.name} ${t("Products")}?`}
          subtitle={`Partner with us to bring ${brand.name}'s premium range to your customers or place a bulk order today.`}
          btnText="contact_us"
        />
      </ScrollReveal>
    </div>
  );
}
