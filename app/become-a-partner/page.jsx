'use client'
import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { useTranslation } from 'react-i18next';

export default function BecomePartnerPage() {
  const { t } = useTranslation();
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
  const [submitStatus, setSubmitStatus] = useState('idle');

  // Updated to use translation keys
  const benefits = [
    { icon: 'ri-map-pin-line', id: 1 },
    { icon: 'ri-team-line', id: 2 },
    { icon: 'ri-line-chart-line', id: 3 },
    { icon: 'ri-shield-check-line', id: 4 }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
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
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '', contactPerson: '', email: '',
          phone: '', brandName: '', productCategory: '', message: ''
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
      {/* Hero Section */}
      <HeroSection

        img="https://readdy.ai/api/search-image?query=professional%20business%20partnership%20handshake%20modern%20office%20setting%20international%20FMCG%20brands%20collaboration%20successful%20business%20meeting%20bright%20contemporary%20environment%20Syria%20Damascus%20corporate%20success&width=1920&height=600&seq=partner-hero-main&orientation=landscape"

        title={t('expand_brand')}

        yellowTitle={t('presence_syria')}

        subtitle={t('partnership_nav')}

        description1={t('growing_supports_partner')}

        description2={t('national_become_partner')}

        yellowText={t('strategic_market_entry_partner')}

      />

      {/* Partnership Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">{t('benefits_title')}</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">{t('benefits_subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-brand-paleblue rounded-3xl p-10 hover:shadow-xl transition-all duration-300 border-2 border-transparent">
                <div className={`w-16 h-16 flex items-center justify-center ${index % 2 === 0 ? 'bg-brand-yellow text-black' : 'bg-brand-charcoal text-white'} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${benefit.icon} text-3xl`}></i>
                </div>
                <h3 className="text-3xl font-bold text-brand-jet mb-4">{t(`benefit${benefit.id}_title`)}</h3>
                <p className="text-base text-brand-charcoal leading-relaxed">{t(`benefit${benefit.id}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 lg:py-28 bg-brand-paleblue">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-brand-jet mb-4">{t('form_title')}</h2>
            <p className="text-xl text-brand-charcoal max-w-3xl mx-auto">{t('form_subtitle')}</p>
          </div>

          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} id="partnership-form">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_company')}</label>
                  <input
                    type="text" name="companyName" value={formData.companyName} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    placeholder={t('placeholder_company')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_contact')}</label>
                  <input
                    type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    placeholder={t('placeholder_contact')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_email')}</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    placeholder={t('placeholder_email')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_phone')}</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    placeholder={t('placeholder_phone')}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_brand')}</label>
                  <input
                    type="text" name="brandName" value={formData.brandName} onChange={handleChange} required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none"
                    placeholder={t('placeholder_brand')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_category')}</label>
                  <select
                    name="productCategory" value={formData.productCategory} onChange={handleChange} required
                    className="w-full text-black px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none"
                  >
                    <option value="">{t('select_category')}</option>
                    <option value="Food & Beverages">Food & Beverages</option>
                    <option value="Snacks & Confectionery">Snacks & Confectionery</option>
                    <option value="Dairy Products">Dairy Products</option>
                    <option value="Non-Food FMCG">Non-Food FMCG</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t('label_message')}</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} rows={5} maxLength={500}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-200 focus:outline-none resize-none"
                  placeholder={t('placeholder_message')}
                ></textarea>
                <p className="text-xs text-brand-charcoal mt-2">{formData.message.length}/500</p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-sm">
                  <i className="ri-check-line mr-2"></i>{t('msg_success')}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm">
                  <i className="ri-error-warning-line mr-2"></i>{t('msg_error')}
                </div>
              )}

              <button
                type="submit" disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-yellow text-black rounded-xl font-semibold text-lg hover:brightness-110 transition-all disabled:opacity-50"
              >
                {isSubmitting ? t('btn_submitting') : t('btn_submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">{t('direct_contact_title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-4 mx-auto">
                <i className="ri-mail-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-jet mb-2">{t('contact_email')}</h3>
              <p className="text-base text-brand-charcoal">info@topbrands-sy.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-4 mx-auto">
                <i className="ri-phone-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-jet mb-2">{t('contact_phone')}</h3>
              <p className="text-base text-brand-charcoal">+963 11 6022</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-4 mx-auto">
                <i className="ri-map-pin-line text-3xl text-black"></i>
              </div>
              <h3 className="text-xl font-bold text-brand-jet mb-2">{t('contact_location')}</h3>
              <p className="text-base text-brand-charcoal">{t('city_syria')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}