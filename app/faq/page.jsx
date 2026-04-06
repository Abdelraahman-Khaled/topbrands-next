import { useState } from 'react';



const faqs = [
  {
    id: 1,
    question: 'What areas does B2B Distribution cover in Syria?',
    answer: 'We provide comprehensive coverage across all major Syrian cities including Damascus, Aleppo, Homs, Latakia, Hama, and Tartus. Our distribution network reaches both urban centers and regional markets, ensuring your products are available wherever your customers are.',
    category: 'Coverage'
  },
  {
    id: 2,
    question: 'What types of products do you distribute?',
    answer: 'We specialize in FMCG products across multiple categories including Food & Beverages, Snacks & Confectionery, Dairy Products, and Non-Food FMCG items. We work with both international and regional brands to provide a diverse product portfolio.',
    category: 'Products'
  },
  {
    id: 3,
    question: 'How can I become a distribution partner?',
    answer: 'To become a partner, you need to be a legally registered business in Syria with appropriate retail or distribution licenses. Visit our "Become a Partner" page to submit your application. Our team will review your request and contact you to discuss partnership opportunities.',
    category: 'Partnership'
  },
  {
    id: 4,
    question: 'What are your minimum order requirements?',
    answer: 'Minimum order quantities vary by product category and brand. Our sales team will provide specific MOQ information based on your business needs and location. We strive to accommodate businesses of all sizes.',
    category: 'Orders'
  },
  {
    id: 5,
    question: 'What are your delivery schedules?',
    answer: 'We operate regular delivery routes to all covered areas. Delivery frequency depends on your location and order volume. Major cities typically receive deliveries 2-3 times per week, while regional areas have scheduled weekly deliveries. Custom delivery arrangements can be made for high-volume partners.',
    category: 'Delivery'
  },
  {
    id: 6,
    question: 'Do you offer credit terms?',
    answer: 'Yes, we offer flexible payment terms to qualified business partners. Credit terms are determined based on business history, creditworthiness, and order volume. New partners typically start with cash-on-delivery terms before transitioning to credit arrangements.',
    category: 'Payment'
  },
  {
    id: 7,
    question: 'How do you ensure product quality during distribution?',
    answer: 'We maintain strict quality control throughout our supply chain. Our warehouses are equipped with temperature-controlled storage for sensitive products. We follow FIFO (First In, First Out) principles and conduct regular quality checks. All products are handled according to manufacturer specifications.',
    category: 'Quality'
  },
  {
    id: 8,
    question: 'What happens if I receive damaged products?',
    answer: 'Any damaged or defective products must be reported within 24 hours of delivery. Our team will investigate the issue and arrange for replacement or credit as appropriate. We require photographic evidence and proper documentation for all damage claims.',
    category: 'Returns'
  },
  {
    id: 9,
    question: 'Do you provide merchandising support?',
    answer: 'Yes, we offer comprehensive merchandising services including planogram execution, shelf management, promotional display setup, and in-store visibility optimization. Our professional sales team works closely with retailers to maximize product performance.',
    category: 'Services'
  },
  {
    id: 10,
    question: 'Can I track my orders?',
    answer: 'Yes, we provide order tracking capabilities for our partners. Once your order is confirmed, you will receive updates on its status. Our customer service team is also available to provide real-time information about your deliveries.',
    category: 'Orders'
  },
  {
    id: 11,
    question: 'What certifications does B2B Distribution hold?',
    answer: 'We maintain all necessary certifications for FMCG distribution including food safety certifications, quality management standards, and compliance with Syrian regulatory requirements. Specific certification details are available upon request.',
    category: 'Quality'
  },
  {
    id: 12,
    question: 'How do you handle product returns and exchanges?',
    answer: 'Returns are accepted for valid quality issues, damaged products, or incorrect deliveries. Return authorization must be obtained before returning any products. Products must be in their original condition and packaging. Expired products due to improper storage by the partner are not eligible for return.',
    category: 'Returns'
  },
  {
    id: 13,
    question: 'Do you offer exclusive distribution rights?',
    answer: 'Exclusive distribution arrangements are negotiated on a case-by-case basis depending on the brand, territory, and business commitment. Contact our partnership team to discuss exclusive distribution opportunities.',
    category: 'Partnership'
  },
  {
    id: 14,
    question: 'What is your relationship with Al Barengi Group?',
    answer: 'B2B Distribution operates under the Al Barengi Group umbrella, benefiting from over 30 years of experience in the Syrian market. This relationship provides us with strong financial backing, extensive market knowledge, and established business relationships.',
    category: 'Company'
  },
  {
    id: 15,
    question: 'How can I contact customer support?',
    answer: 'Our customer support team is available via phone at +963 11 123 4567 or email at info@b2bdistribution.sy. You can also submit inquiries through our contact form on the website. We respond to all inquiries within 24 hours during business days.',
    category: 'Support'
  }
];

const categories = ['All', 'Coverage', 'Products', 'Partnership', 'Orders', 'Delivery', 'Payment', 'Quality', 'Returns', 'Services', 'Company', 'Support'];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openId, setOpenId] = useState < number | null > (null);

  const filteredFAQs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20customer%20support%20help%20desk%20modern%20office%20environment%20friendly%20service%20team%20answering%20questions%20bright%20contemporary%20workspace%20Syria%20Damascus%20business%20assistance&width=1920&height=600&seq=faq-hero-main&orientation=landscape"
            alt="FAQ"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 font-medium">
            Find answers to common questions about our services, partnerships, and operations
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${selectedCategory === category
                  ? 'bg-brand-teal text-white'
                  : 'bg-brand-paleblue text-brand-charcoal hover:bg-brand-teal hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-brand-teal transition-all"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-brand-paleblue/30 transition-all"
                >
                  <div className="flex-1">
                    <span className="inline-block bg-brand-coral text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-brand-jet">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="ml-4 w-8 h-8 flex items-center justify-center">
                    <i className={`ri-${openId === faq.id ? 'subtract' : 'add'}-line text-2xl text-brand-teal`}></i>
                  </div>
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-5">
                    <p className="text-brand-charcoal font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-paleblue">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-jet mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-brand-charcoal mb-8 font-medium">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-brand-teal text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all whitespace-nowrap"
            >
              Contact Us
            </a>
            <a
              href="/become-a-partner"
              className="bg-brand-coral text-white px-8 py-4 rounded-lg font-bold hover:brightness-110 transition-all whitespace-nowrap"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
