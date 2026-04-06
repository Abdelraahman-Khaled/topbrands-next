"use client";
import GlobalCTA from "../../components/GlobalCTA";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from "react-i18next";

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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-brand-paleblue to-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <Link
            href="/brands"
            className="inline-flex items-center space-x-2 text-brand-charcoal hover:text-black transition-colors mb-8 cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            <span className="font-medium">Back to Brands</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="px-4 py-2 bg-brand-yellow text-[#101010] text-sm font-semibold rounded-full">
                  {brand.origin}
                </span>
                <span className="px-4 py-2 bg-brand-charcoal text-white text-sm font-semibold rounded-full">
                  {brand.category}
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-6">{brand.name}</h1>
              <p className="text-xl font-normal text-brand-charcoal leading-relaxed mb-8">
                {brand.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-yellow text-[#101010] rounded-full font-semibold hover:brightness-110 duration-300 transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Contact for Orders</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
                <a
                  href="/become-a-partner"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-brand-charcoal text-brand-charcoal rounded-full font-semibold duration-300 hover:bg-brand-charcoal hover:text-white transition-all whitespace-nowrap cursor-pointer"
                >
                  <span>Become a Partner</span>
                </a>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white" data-product-shop>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">
              {brand.name} Products
            </h2>
            <p className="text-xl text-brand-charcoal">
              Explore our complete range of {brand.name} products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brand.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 "
              >
                <div className="relative w-full h-64 bg-brand-paleblue overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-brand-teal text-white text-sm font-semibold rounded-full">
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-jet mb-2 group-hover:text-brand-teal transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-charcoal leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-brand-charcoal font-medium uppercase tracking-wider">
                      Size: {product.size}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCTA
        title={`${t("Interested_in")} ${brand.name} ${t("Products")}?`}
        subtitle={`Contact us for detailed product information, pricing, and availability`}
        btnText="contact_us"
      />
    </div>
  );
}
