
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

export default function MerchandisingPage() {
  const features = [
    {
      icon: 'ri-layout-grid-line',
      title: 'Planogram Execution',
      description: 'Professional implementation of brand planograms ensuring optimal product placement and shelf organization.'
    },
    {
      icon: 'ri-store-line',
      title: 'In-Store Visibility',
      description: 'Strategic product positioning and display management to maximize brand visibility at point of sale.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Promotional Compliance',
      description: 'Accurate execution of promotional activities, pricing displays, and marketing materials in-store.'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Performance Tracking',
      description: 'Regular monitoring and reporting on shelf presence, stock levels, and competitive positioning.'
    }
  ];

  const services = [
    'Product placement optimization',
    'Shelf space management',
    'POS material installation',
    'Stock rotation (FIFO)',
    'Competitor monitoring',
    'Photo reporting',
    'Promotional setup',
    'Inventory checks'
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20merchandiser%20arranging%20products%20on%20supermarket%20shelves%20organized%20retail%20display%20bright%20store%20lighting%20commercial%20photography%20clean%20modern%20store%20interior&width=1920&height=800&seq=merchandising-hero-001&orientation=landscape"
            alt="Sales & Merchandising"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-semibold text-brand-yellow tracking-widest uppercase">/ MERCHANDISING</span>
            <div className="h-px w-16 bg-brand-yellow"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Professional Sales
            <br />
            <span className="text-brand-yellow">& Merchandising</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl">
            Experienced sales teams with deep local market knowledge and strong customer relationships. We ensure your brand stands out at every point of sale.
          </p>
        </div>
      </section>

      {/* Services Bar */}
      <section className="py-12 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-2 bg-brand-jet px-5 py-2.5 rounded-full">
                <i className="ri-check-line text-brand-yellow"></i>
                <span className="text-sm font-medium text-white whitespace-nowrap">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Merchandising Services</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              Comprehensive in-store execution to drive brand visibility and sales performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-brand-paleblue rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-yellow">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-3xl text-brand-jet`}></i>
                </div>
                <h3 className="text-2xl font-bold text-brand-jet mb-4">{feature.title}</h3>
                <p className="text-base text-brand-charcoal leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Team Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Expert Sales Team</h2>
              <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                Our dedicated sales force combines deep market knowledge with professional execution to build strong retailer relationships and drive consistent sell-through.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0">
                    <i className="ri-user-star-line text-2xl text-brand-jet"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-jet mb-1">Trained Professionals</h4>
                    <p className="text-brand-charcoal">Skilled in sales techniques and product knowledge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0">
                    <i className="ri-map-pin-user-line text-2xl text-brand-jet"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-jet mb-1">Local Market Experts</h4>
                    <p className="text-brand-charcoal">Deep understanding of regional consumer preferences</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl flex-shrink-0">
                    <i className="ri-handshake-line text-2xl text-brand-jet"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-jet mb-1">Relationship Builders</h4>
                    <p className="text-brand-charcoal">Strong connections with retailers and wholesalers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20sales%20representative%20talking%20with%20store%20manager%20in%20retail%20environment%20friendly%20business%20discussion%20bright%20store%20lighting%20commercial%20photography&width=600&height=500&seq=merchandising-sales-001&orientation=portrait"
                alt="Sales Team"
                className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://readdy.ai/api/search-image?query=well%20organized%20supermarket%20shelf%20with%20consumer%20products%20perfect%20product%20display%20retail%20merchandising%20excellence%20bright%20store%20lighting%20clean%20modern%20store&width=600&height=500&seq=merchandising-results-001&orientation=portrait"
                alt="Merchandising Results"
                className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Driving Results</h2>
              <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                Our merchandising efforts translate directly into improved brand performance and increased sales at the point of purchase.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">95%</div>
                  <p className="text-sm text-brand-charcoal">Shelf Availability</p>
                </div>
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">100%</div>
                  <p className="text-sm text-brand-charcoal">Planogram Compliance</p>
                </div>
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">Weekly</div>
                  <p className="text-sm text-brand-charcoal">Store Visits</p>
                </div>
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-brand-yellow mb-2">Real-time</div>
                  <p className="text-sm text-brand-charcoal">Reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Boost Your In-Store Presence
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our merchandising team maximize your brand visibility across Syria
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/become-a-partner"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-brand-yellow text-brand-jet rounded-full font-semibold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span>Become a Partner</span>
              <i className="ri-arrow-right-line text-xl"></i>
            </a>
            <a
              href="/services"
              className="inline-flex items-center space-x-3 px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-brand-jet transition-all whitespace-nowrap cursor-pointer"
            >
              <span>All Services</span>
              <i className="ri-arrow-left-line text-xl"></i>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
