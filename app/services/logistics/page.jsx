
export default function LogisticsPage() {
  const features = [
    {
      icon: 'ri-building-4-line',
      title: 'Modern Warehousing',
      description: 'State-of-the-art warehouse facilities with organized storage systems and inventory management.'
    },
    {
      icon: 'ri-temp-cold-line',
      title: 'Temperature Control',
      description: 'Climate-controlled storage and transportation for temperature-sensitive FMCG products.'
    },
    {
      icon: 'ri-route-line',
      title: 'Route Optimization',
      description: 'Advanced route planning for efficient delivery and reduced transportation costs.'
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and automated stock replenishment systems.'
    }
  ];

  const capabilities = [
    { icon: 'ri-truck-line', label: 'Fleet Management' },
    { icon: 'ri-stack-line', label: 'Bulk Storage' },
    { icon: 'ri-time-line', label: 'Same-Day Delivery' },
    { icon: 'ri-shield-check-line', label: 'Quality Control' },
    { icon: 'ri-file-list-3-line', label: 'Documentation' },
    { icon: 'ri-customer-service-line', label: '24/7 Support' }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20warehouse%20interior%20with%20organized%20shelving%20forklifts%20logistics%20operations%20professional%20industrial%20photography%20bright%20lighting%20clean%20facility%20FMCG%20storage&width=1920&height=800&seq=logistics-hero-001&orientation=landscape"
            alt="Logistics & Warehousing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-semibold text-brand-yellow tracking-widest uppercase">/ LOGISTICS</span>
            <div className="h-px w-16 bg-brand-yellow"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Advanced Logistics
            <br />
            <span className="text-brand-yellow">& Warehousing</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl">
            Efficient warehousing, optimized delivery routes, and temperature-controlled transportation when required. Your products handled with care and precision.
          </p>
        </div>
      </section>

      {/* Capabilities Bar */}
      <section className="py-12 bg-brand-yellow">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {capabilities.map((cap, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-jet rounded-2xl mb-3">
                  <i className={`${cap.icon} text-2xl text-brand-yellow`}></i>
                </div>
                <span className="text-sm font-semibold text-brand-jet">{cap.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Logistics Solutions</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              Comprehensive logistics infrastructure designed for FMCG excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-brand-paleblue rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-brand-yellow">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${feature.icon} text-3xl text-brand-yellow`}></i>
                </div>
                <h3 className="text-2xl font-bold text-brand-jet mb-4">{feature.title}</h3>
                <p className="text-base text-brand-charcoal leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Section */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=warehouse%20worker%20using%20forklift%20moving%20pallets%20organized%20storage%20facility%20professional%20logistics%20operations%20bright%20industrial%20lighting%20clean%20modern%20warehouse&width=600&height=500&seq=logistics-warehouse-001&orientation=portrait"
                alt="Warehouse Operations"
                className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Warehouse Excellence</h2>
              <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                Our warehousing facilities are designed to handle the unique requirements of FMCG products, ensuring product integrity and efficient order fulfillment.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl">
                    <i className="ri-checkbox-circle-line text-2xl text-brand-jet"></i>
                  </div>
                  <span className="text-lg text-brand-jet font-medium">Organized storage zones by product category</span>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl">
                    <i className="ri-checkbox-circle-line text-2xl text-brand-jet"></i>
                  </div>
                  <span className="text-lg text-brand-jet font-medium">FIFO inventory management system</span>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl">
                    <i className="ri-checkbox-circle-line text-2xl text-brand-jet"></i>
                  </div>
                  <span className="text-lg text-brand-jet font-medium">Quality inspection at receiving and dispatch</span>
                </div>
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-yellow rounded-xl">
                    <i className="ri-checkbox-circle-line text-2xl text-brand-jet"></i>
                  </div>
                  <span className="text-lg text-brand-jet font-medium">Secure facility with 24/7 monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">Fleet & Transportation</h2>
              <p className="text-lg text-brand-charcoal mb-8 leading-relaxed">
                Our diverse fleet of vehicles ensures timely delivery across all market segments, from urban retail to regional wholesale.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <i className="ri-truck-line text-4xl text-brand-yellow mb-3"></i>
                  <h4 className="text-lg font-bold text-brand-jet">Heavy Trucks</h4>
                  <p className="text-sm text-brand-charcoal">Bulk deliveries</p>
                </div>
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <i className="ri-car-line text-4xl text-brand-yellow mb-3"></i>
                  <h4 className="text-lg font-bold text-brand-jet">Vans</h4>
                  <p className="text-sm text-brand-charcoal">Urban distribution</p>
                </div>
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <i className="ri-temp-cold-line text-4xl text-brand-yellow mb-3"></i>
                  <h4 className="text-lg font-bold text-brand-jet">Refrigerated</h4>
                  <p className="text-sm text-brand-charcoal">Cold chain</p>
                </div>
                <div className="bg-brand-paleblue p-6 rounded-2xl text-center">
                  <i className="ri-motorbike-line text-4xl text-brand-yellow mb-3"></i>
                  <h4 className="text-lg font-bold text-brand-jet">Express</h4>
                  <p className="text-sm text-brand-charcoal">Quick delivery</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=fleet%20of%20delivery%20trucks%20parked%20in%20row%20at%20logistics%20facility%20professional%20commercial%20vehicles%20white%20trucks%20bright%20daylight%20clean%20industrial%20setting&width=600&height=500&seq=logistics-fleet-001&orientation=portrait"
                alt="Fleet Management"
                className="w-full h-[500px] object-cover object-center rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Logistics Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Top Brands Syria handle your FMCG logistics and warehousing needs
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
