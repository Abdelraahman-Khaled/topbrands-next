
import LocalizedLink from "../components/LocalizedLink";
export default function CompanyStructurePage() {
  const structure = [
    {
      level: 'Executive Leadership',
      positions: [
        {
          title: 'Chief Executive Officer',
          name: 'Ahmad Al-Barengi',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20business%20executive%20CEO%20in%20formal%20suit%20confident%20leadership%20portrait%20office%20background%20professional%20corporate%20photography&width=300&height=350&seq=ceo-structure&orientation=portrait',
          description: 'Leads overall company strategy and operations'
        }
      ]
    },
    {
      level: 'Senior Management',
      positions: [
        {
          title: 'Chief Operations Officer',
          name: 'Layla Hassan',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businesswoman%20executive%20in%20formal%20business%20attire%20confident%20leadership%20portrait%20modern%20office%20background%20corporate%20photography&width=300&height=350&seq=coo-structure&orientation=portrait',
          description: 'Oversees nationwide operations and logistics'
        },
        {
          title: 'Chief Financial Officer',
          name: 'Omar Khalil',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20business%20executive%20CFO%20in%20formal%20suit%20confident%20portrait%20office%20background%20corporate%20photography&width=300&height=350&seq=cfo-structure&orientation=portrait',
          description: 'Manages financial planning and analysis'
        },
        {
          title: 'Chief Marketing Officer',
          name: 'Sara Mansour',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businesswoman%20marketing%20executive%20in%20business%20attire%20confident%20portrait%20modern%20office%20corporate%20photography&width=300&height=350&seq=cmo-structure&orientation=portrait',
          description: 'Leads marketing and brand development'
        }
      ]
    },
    {
      level: 'Department Heads',
      positions: [
        {
          title: 'Distribution Manager',
          name: 'Khaled Yousef',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20business%20manager%20in%20business%20casual%20confident%20portrait%20warehouse%20background%20corporate%20photography&width=300&height=350&seq=dist-manager&orientation=portrait',
          description: 'Manages distribution network across Syria'
        },
        {
          title: 'Logistics Manager',
          name: 'Nour Saleh',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businesswoman%20logistics%20manager%20in%20business%20attire%20confident%20portrait%20warehouse%20office%20corporate%20photography&width=300&height=350&seq=log-manager&orientation=portrait',
          description: 'Oversees supply chain and logistics operations'
        },
        {
          title: 'Sales Manager',
          name: 'Fadi Haddad',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20business%20sales%20manager%20in%20business%20attire%20confident%20portrait%20office%20background%20corporate%20photography&width=300&height=350&seq=sales-manager&orientation=portrait',
          description: 'Leads sales team and retail partnerships'
        },
        {
          title: 'Quality Assurance Manager',
          name: 'Rania Nasser',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businesswoman%20quality%20manager%20in%20business%20attire%20confident%20portrait%20laboratory%20office%20corporate%20photography&width=300&height=350&seq=qa-manager&orientation=portrait',
          description: 'Ensures product quality and compliance'
        },
        {
          title: 'HR Manager',
          name: 'Tariq Mahmoud',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20business%20HR%20manager%20in%20business%20attire%20confident%20portrait%20office%20background%20corporate%20photography&width=300&height=350&seq=hr-manager&orientation=portrait',
          description: 'Manages human resources and talent development'
        },
        {
          title: 'IT Manager',
          name: 'Lina Khoury',
          image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businesswoman%20IT%20manager%20in%20business%20casual%20confident%20portrait%20tech%20office%20corporate%20photography&width=300&height=350&seq=it-manager&orientation=portrait',
          description: 'Oversees technology infrastructure and systems'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20professional%20business%20environment%20Syria%20Damascus%20corporate%20headquarters%20architecture%20bright%20daylight&width=1920&height=600&seq=company-structure-hero&orientation=landscape"
            alt="Company Structure"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-semibold text-brand-coral tracking-widest uppercase">/ ORGANIZATION</span>
            <div className="h-px w-16 bg-brand-coral"></div>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            Company Structure
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
            Our organizational structure is designed to ensure <strong className="font-semibold text-brand-yellow">efficient operations</strong> and <strong className="font-semibold text-brand-yellow">exceptional service delivery</strong> across all levels of the company.
          </p>
        </div>
      </section>

      {/* Structure Sections */}
      {structure.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-brand-paleblue'}`}
        >
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">
                {section.level}
              </h2>
              <div className="w-24 h-1 bg-brand-coral mx-auto"></div>
            </div>

            <div className={`grid gap-8 ${section.positions.length === 1
              ? 'md:grid-cols-1 max-w-2xl mx-auto'
              : section.positions.length === 3
                ? 'md:grid-cols-3'
                : 'md:grid-cols-2 lg:grid-cols-3'
              }`}>
              {section.positions.map((position, posIndex) => (
                <div
                  key={posIndex}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-teal"
                >
                  <div className="relative w-full h-72 bg-brand-paleblue overflow-hidden">
                    <img
                      src={position.image}
                      alt={position.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-4 py-1.5 bg-brand-coral text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {position.title}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-jet mb-3 group-hover:text-brand-teal transition-colors">
                      {position.name}
                    </h3>
                    <p className="text-sm text-brand-charcoal leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Organizational Values */}
      <section className="py-20 bg-gradient-to-br from-brand-charcoal to-brand-jet">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Organizational Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide our structure and decision-making at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'ri-team-line', title: 'Collaboration', description: 'Working together across all departments' },
              { icon: 'ri-lightbulb-line', title: 'Innovation', description: 'Continuous improvement and adaptation' },
              { icon: 'ri-shield-check-line', title: 'Integrity', description: 'Ethical practices in all operations' },
              { icon: 'ri-customer-service-2-line', title: 'Excellence', description: 'Commitment to quality service' }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-brand-coral rounded-xl mb-4 mx-auto">
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-brand-charcoal mb-8 max-w-2xl mx-auto">
            Be part of a dynamic organization that values growth and excellence
          </p>
          <LocalizedLink
            href="/contact"
            className="inline-flex items-center space-x-3 px-10 py-4 bg-brand-coral text-white rounded-full font-semibold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-2xl whitespace-nowrap cursor-pointer"
          >
            <span>Contact Us</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </LocalizedLink>
        </div>
      </section>


    </div>
  );
}
