"use client";
import GlobalCTA from "../../components/GlobalCTA";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from "react-i18next";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";

export default function BrandDetailPage() {
  const { t } = useTranslation();
  const { slug } = useParams();

  const brandsData = {
    'pinar': {
      name: 'PINAR',
      logo: 'https://readdy.ai/api/search-image?query=PINAR%20Turkish%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=300&height=180&seq=brand-pinar-detail-logo&orientation=landscape',
      category: 'Food & Beverages',
      origin: 'Turkey',
      description: 'PINAR is a leading Turkish food brand specializing in dairy products, olive oil, and premium food items with international quality standards. Established with a commitment to excellence, PINAR has become synonymous with quality and trust in the FMCG sector.',
      products: [
        { id: 1, name: 'Premium Olive Oil', size: '1L', image: 'https://readdy.ai/api/search-image?query=PINAR%20premium%20olive%20oil%20bottle%20elegant%20packaging%20professional%20product%20photography%20clean%20white%20background%20high%20quality%20food%20product&width=400&height=400&seq=pinar-prod-001&orientation=squarish', description: 'Extra virgin olive oil, cold pressed from finest olives' },
        { id: 2, name: 'Premium Olive Oil', size: '500ml', image: 'https://readdy.ai/api/search-image?query=PINAR%20olive%20oil%20small%20bottle%20elegant%20packaging%20professional%20product%20photography%20clean%20white%20background%20premium%20quality&width=400&height=400&seq=pinar-prod-002&orientation=squarish', description: 'Extra virgin olive oil, cold pressed from finest olives' },
        { id: 3, name: 'Fresh Milk', size: '1L', image: 'https://readdy.ai/api/search-image?query=PINAR%20fresh%20milk%20carton%20white%20packaging%20professional%20product%20photography%20clean%20white%20background%20dairy%20product&width=400&height=400&seq=pinar-prod-003&orientation=squarish', description: 'Fresh pasteurized whole milk' },
        { id: 4, name: 'Natural Yogurt', size: '500g', image: 'https://readdy.ai/api/search-image?query=PINAR%20natural%20yogurt%20cup%20white%20packaging%20professional%20product%20photography%20clean%20white%20background%20creamy%20dairy&width=400&height=400&seq=pinar-prod-004&orientation=squarish', description: 'Creamy natural yogurt' },
        { id: 5, name: 'White Cheese', size: '400g', image: 'https://readdy.ai/api/search-image?query=PINAR%20white%20cheese%20package%20feta%20style%20professional%20product%20photography%20clean%20white%20background%20dairy%20product&width=400&height=400&seq=pinar-prod-005&orientation=squarish', description: 'Traditional white cheese' },
        { id: 6, name: 'Butter', size: '250g', image: 'https://readdy.ai/api/search-image?query=PINAR%20butter%20block%20golden%20yellow%20professional%20product%20photography%20clean%20white%20background%20dairy%20essential&width=400&height=400&seq=pinar-prod-006&orientation=squarish', description: 'Pure creamy butter' },
      ]
    },
    'ulker': {
      name: 'Ülker',
      logo: 'https://readdy.ai/api/search-image?query=Ulker%20Turkish%20biscuit%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=300&height=180&seq=brand-ulker-detail-logo&orientation=landscape',
      category: 'Snacks & Confectionery',
      origin: 'Turkey',
      description: 'Ülker is one of Turkey\'s most beloved snack brands, offering a wide range of biscuits, chocolates, and confectionery products. With decades of experience, Ülker has mastered the art of creating delicious treats that bring joy to families across the region.',
      products: [
        { id: 1, name: 'Chocolate Biscuits', size: '200g', image: 'https://readdy.ai/api/search-image?query=Ulker%20chocolate%20biscuits%20package%20premium%20snack%20professional%20product%20photography%20clean%20white%20background%20delicious%20treat&width=400&height=400&seq=ulker-prod-001&orientation=squarish', description: 'Crispy biscuits with chocolate coating' },
        { id: 2, name: 'Chocolate Biscuits', size: '100g', image: 'https://readdy.ai/api/search-image?query=Ulker%20chocolate%20biscuits%20small%20pack%20premium%20snack%20professional%20product%20photography%20clean%20white%20background%20sweet%20treat&width=400&height=400&seq=ulker-prod-002&orientation=squarish', description: 'Crispy biscuits with chocolate coating' },
        { id: 3, name: 'Wafer Rolls', size: '150g', image: 'https://readdy.ai/api/search-image?query=Ulker%20wafer%20rolls%20package%20cream%20filled%20professional%20product%20photography%20clean%20white%20background%20sweet%20snack&width=400&height=400&seq=ulker-prod-003&orientation=squarish', description: 'Cream-filled wafer rolls' },
        { id: 4, name: 'Chocolate Bar', size: '80g', image: 'https://readdy.ai/api/search-image?query=Ulker%20chocolate%20bar%20premium%20packaging%20professional%20product%20photography%20clean%20white%20background%20sweet%20confectionery&width=400&height=400&seq=ulker-prod-004&orientation=squarish', description: 'Rich milk chocolate bar' },
        { id: 5, name: 'Chocolate Bar', size: '40g', image: 'https://readdy.ai/api/search-image?query=Ulker%20chocolate%20bar%20small%20size%20premium%20packaging%20professional%20product%20photography%20clean%20white%20background&width=400&height=400&seq=ulker-prod-005&orientation=squarish', description: 'Rich milk chocolate bar' },
        { id: 6, name: 'Assorted Biscuits', size: '300g', image: 'https://readdy.ai/api/search-image?query=Ulker%20assorted%20biscuits%20variety%20pack%20professional%20product%20photography%20clean%20white%20background%20premium%20snacks&width=400&height=400&seq=ulker-prod-006&orientation=squarish', description: 'Variety pack of delicious biscuits' },
      ]
    },
    'halta': {
      name: 'Halta',
      logo: 'https://readdy.ai/api/search-image?query=Halta%20food%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=300&height=180&seq=brand-halta-detail-logo&orientation=landscape',
      category: 'Food & Beverages',
      origin: 'International',
      description: 'Halta is a premium food and beverage brand known for natural juices, sauces, and quality food products. The brand focuses on delivering authentic flavors and nutritious options for health-conscious consumers.',
      products: [
        { id: 1, name: 'Natural Fruit Juice', size: '1L', image: 'https://readdy.ai/api/search-image?query=Halta%20natural%20fruit%20juice%20bottle%20colorful%20packaging%20professional%20product%20photography%20clean%20white%20background%20refreshing%20beverage&width=400&height=400&seq=halta-prod-001&orientation=squarish', description: '100% natural fruit juice, no added sugar' },
        { id: 2, name: 'Natural Fruit Juice', size: '500ml', image: 'https://readdy.ai/api/search-image?query=Halta%20fruit%20juice%20small%20bottle%20colorful%20packaging%20professional%20product%20photography%20clean%20white%20background&width=400&height=400&seq=halta-prod-002&orientation=squarish', description: '100% natural fruit juice, no added sugar' },
        { id: 3, name: 'Tomato Paste', size: '800g', image: 'https://readdy.ai/api/search-image?query=Halta%20tomato%20paste%20can%20premium%20packaging%20professional%20product%20photography%20clean%20white%20background%20food%20product&width=400&height=400&seq=halta-prod-003&orientation=squarish', description: 'Premium quality tomato paste' },
        { id: 4, name: 'Tomato Paste', size: '400g', image: 'https://readdy.ai/api/search-image?query=Halta%20tomato%20paste%20small%20can%20premium%20packaging%20professional%20product%20photography%20clean%20white%20background&width=400&height=400&seq=halta-prod-004&orientation=squarish', description: 'Premium quality tomato paste' },
        { id: 5, name: 'Mixed Fruit Nectar', size: '1L', image: 'https://readdy.ai/api/search-image?query=Halta%20mixed%20fruit%20nectar%20bottle%20colorful%20packaging%20professional%20product%20photography%20clean%20white%20background&width=400&height=400&seq=halta-prod-005&orientation=squarish', description: 'Delicious blend of tropical fruits' },
        { id: 6, name: 'Green Tea', size: '100 bags', image: 'https://readdy.ai/api/search-image?query=Halta%20green%20tea%20box%20elegant%20packaging%20professional%20product%20photography%20clean%20white%20background%20healthy%20beverage&width=400&height=400&seq=halta-prod-006&orientation=squarish', description: 'Natural green tea leaves' },
      ]
    },
    'jacker': {
      name: 'Jacker',
      logo: 'https://readdy.ai/api/search-image?query=Jacker%20snack%20brand%20logo%20clean%20white%20background%20professional%20product%20branding&width=300&height=180&seq=brand-jacker-detail-logo&orientation=landscape',
      category: 'Snacks & Confectionery',
      origin: 'International',
      description: 'Jacker is a popular snack brand offering crispy chips, crackers, and savory snacks for all occasions. Known for bold flavors and quality ingredients, Jacker has become a favorite choice for snack lovers.',
      products: [
        { id: 1, name: 'Potato Chips', size: '150g', image: 'https://readdy.ai/api/search-image?query=Jacker%20potato%20chips%20bag%20crispy%20snack%20professional%20product%20photography%20clean%20white%20background%20salty%20treat&width=400&height=400&seq=jacker-prod-001&orientation=squarish', description: 'Crispy salted potato chips' },
        { id: 2, name: 'Potato Chips', size: '75g', image: 'https://readdy.ai/api/search-image?query=Jacker%20potato%20chips%20small%20bag%20crispy%20snack%20professional%20product%20photography%20clean%20white%20background&width=400&height=400&seq=jacker-prod-002&orientation=squarish', description: 'Crispy salted potato chips' },
        { id: 3, name: 'Crackers', size: '200g', image: 'https://readdy.ai/api/search-image?query=Jacker%20crackers%20box%20savory%20snack%20professional%20product%20photography%20clean%20white%20background%20crispy%20biscuit&width=400&height=400&seq=jacker-prod-003&orientation=squarish', description: 'Savory wheat crackers' },
        { id: 4, name: 'Corn Snacks', size: '120g', image: 'https://readdy.ai/api/search-image?query=Jacker%20corn%20snacks%20bag%20crunchy%20professional%20product%20photography%20clean%20white%20background%20savory%20treat&width=400&height=400&seq=jacker-prod-004&orientation=squarish', description: 'Crunchy corn snacks with cheese flavor' },
        { id: 5, name: 'Mixed Nuts', size: '180g', image: 'https://readdy.ai/api/search-image?query=Jacker%20mixed%20nuts%20package%20premium%20quality%20professional%20product%20photography%20clean%20white%20background%20healthy%20snack&width=400&height=400&seq=jacker-prod-005&orientation=squarish', description: 'Premium roasted mixed nuts' },
        { id: 6, name: 'Tortilla Chips', size: '160g', image: 'https://readdy.ai/api/search-image?query=Jacker%20tortilla%20chips%20bag%20crispy%20professional%20product%20photography%20clean%20white%20background%20mexican%20snack&width=400&height=400&seq=jacker-prod-006&orientation=squarish', description: 'Crispy tortilla chips with salsa flavor' },
      ]
    },
  };

  const brand = slug ? brandsData[slug] : null;

  if (!brand) {
    return (
      <div className="min-h-screen bg-white">

        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-brand-jet mb-4">Brand Not Found</h1>
          <Link href="/brands" className="text-brand-teal hover:underline">
            Back to Brands
          </Link>
        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">


      {/* Brand Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-brand-paleblue to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <Link
            href="/brands"
            className="inline-flex items-center space-x-2 text-brand-charcoal hover:text-black transition-colors mb-8 cursor-pointer group"
          >
            <i className="ri-arrow-left-line text-xl group-hover:-translate-x-1 transition-transform"></i>
            <span className="font-bold uppercase tracking-widest text-xs md:text-sm">Back to Brands</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 mb-6 md:mb-8">
                <span className="px-4 py-1.5 bg-brand-yellow text-brand-jet text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {brand.origin}
                </span>
                <span className="px-4 py-1.5 bg-brand-jet text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {brand.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-jet mb-6">{brand.name}</h1>
              <p className="text-base md:text-lg lg:text-xl font-medium text-brand-charcoal leading-relaxed mb-8 md:mb-10 max-w-2xl">
                {brand.description}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-brand-yellow text-brand-jet rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Contact for Orders</span>
                  <i className="ri-shopping-cart-line text-lg"></i>
                </a>
                <a
                  href="/become-a-partner"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-brand-jet text-brand-jet rounded-full font-bold hover:bg-brand-jet hover:text-white transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Become a Partner</span>
                </a>
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
        <section className="py-16 md:py-24 bg-white" data-product-shop>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-brand-jet mb-4 md:mb-6">
                Featured {brand.name} Products
              </h2>
              <p className="text-base md:text-xl text-brand-charcoal max-w-3xl mx-auto font-medium lead-relaxed">
                Explore our curated selection of high-quality {brand.name} products, delivered with excellence throughout the region.
              </p>
            </div>

            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {brand.products.map((product) => (
                <StaggerItem key={product.id}>
                  <div
                    className="group h-full bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-charcoal/5 flex flex-col"
                  >
                    <div className="relative w-full h-64 md:h-72 bg-brand-paleblue overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 rtl:left-4 rtl:right-auto">
                        <span className="px-3 py-1 bg-brand-teal text-white text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                          {product.size}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <h3 className="text-xl md:text-2xl font-bold text-brand-jet mb-3 group-hover:text-brand-teal transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm md:text-base text-brand-charcoal leading-relaxed mb-6 flex-grow font-medium">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                        <span className="text-[10px] md:text-xs text-brand-charcoal font-bold uppercase tracking-widest flex items-center gap-2">
                          <i className="ri-flask-line text-brand-teal"></i>
                          Size: {product.size}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-jet group-hover:bg-brand-yellow transition-colors duration-300">
                          <i className="ri-arrow-right-up-line"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
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
