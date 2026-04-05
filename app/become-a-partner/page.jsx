import { useState } from 'react';

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    brandName: '',
    productCategory: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState < 'idle' | 'success' | 'error' > ('idle');

  const benefits = [
    {
      icon: 'ri-map-pin-line',
      title: 'Strong Local Market Knowledge',
      description: 'Deep understanding of Syrian consumer preferences, regional dynamics, and market trends'
    },
    {
      icon: 'ri-team-line',
      title: 'Professional Sales & Merchandising',
      description: 'Experienced teams ensuring optimal product placement, visibility, and sell-out performance'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Scalable Growth Opportunities',
      description: 'Flexible distribution models supporting brand expansion across all Syrian regions'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Reliable & Transparent Operations',
      description: 'Consistent service delivery with clear communication and performance tracking'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5v1oipr44f5krorl02g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          brandName: '',
          productCategory: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20business%20partnership%20handshake%20modern%20office%20setting%20international%20FMCG%20brands%20collaboration%20successful%20business%20meeting%20bright%20contemporary%20environment%20Syria%20Damascus%20corporate%20success&width=1920&height=600&seq=partner-hero-main&orientation=landscape"
            alt="Partnership"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-semibold text-brand-coral tracking-widest uppercase">/ PARTNERSHIP</span>
            <div className="h-px w-16 bg-brand-coral"></div>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            Expand Your Brand
            <br />
            <span className="text-brand-yellow">Presence in Syria</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
            Top Brands Syria supports FMCG brands through <strong className="font-semibold text-brand-yellow">strategic market entry</strong>, nationwide distribution, and scalable growth solutions driven by long-term collaboration and local expertise.
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">Partnership Benefits</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              Why leading FMCG brands choose Top Brands Syria
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-brand-paleblue rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-teal">
                <div className={`w-16 h-16 flex items-center justify-center ${index % 2 === 0 ? 'bg-brand-teal' : 'bg-brand-coral'} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${benefit.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-3xl font-bold text-brand-jet mb-4">{benefit.title}</h3>
                <p className="text-base text-brand-charcoal leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">Start Your Partnership</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">
              Fill out the form below and our team will contact you within 24 hours
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} data-readdy-form id="partnership-form">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="+963 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="brandName" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="Brand you represent"
                  />
                </div>

                <div>
                  <label htmlFor="productCategory" className="block text-sm font-semibold text-brand-charcoal mb-2">
                    Product Category *
                  </label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="Food & Beverages">Food & Beverages</option>
                    <option value="Snacks & Confectionery">Snacks & Confectionery</option>
                    <option value="Dairy Products">Dairy Products</option>
                    <option value="Non-Food FMCG">Non-Food FMCG</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-brand-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none"
                  placeholder="Tell us about your brand and partnership goals (max 500 characters)"
                ></textarea>
                <p className="text-xs text-brand-charcoal mt-2">{formData.message.length}/500 characters</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-sm text-green-800 flex items-center">
                    <i className="ri-check-line text-xl mr-2"></i>
                    Thank you! We'll contact you within 24 hours.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-800 flex items-center">
                    <i className="ri-error-warning-line text-xl mr-2"></i>
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-coral text-white rounded-xl font-semibold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Partnership Request'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">Or Contact Us Directly</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-teal rounded-2xl mb-4 mx-auto">
                <i className="ri-mail-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-jet mb-2">Email</h3>
              <p className="text-base text-brand-charcoal">info@topbrands-sy.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-coral rounded-2xl mb-4 mx-auto">
                <i className="ri-phone-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-jet mb-2">Phone</h3>
              <p className="text-base text-brand-charcoal">+963 11 6022</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-teal rounded-2xl mb-4 mx-auto">
                <i className="ri-map-pin-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-jet mb-2">Location</h3>
              <p className="text-base text-brand-charcoal">Damascus, Syria</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
