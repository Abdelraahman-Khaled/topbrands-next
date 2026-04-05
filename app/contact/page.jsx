import { useState } from "react";
import { useTranslation } from "next-i18next";
import Navbar from "../../components/feature/Navbar";
import Footer from "../../components/feature/Footer";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState <
    "idle" | "success" | "error"
    > ("idle");

  const handleChange = (

  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch(
        "https://readdy.ai/api/form/d5v1ot5r44f5krorl03g",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        },
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
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
            src="https://readdy.ai/api/search-image?query=professional%20customer%20service%20team%20modern%20office%20environment%20friendly%20business%20communication%20contact%20center%20bright%20contemporary%20workspace%20Syria%20Damascus%20corporate%20setting&width=1920&height=600&seq=contact-hero-main&orientation=landscape"
            alt="Contact Us"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-8">
            <span className="text-sm font-semibold text-brand-teal tracking-widest uppercase">
              {t("contact_nav")}
            </span>
            <div className="h-px w-16 bg-brand-teal"></div>
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6">
            {t("contact_us_title")}
            <br />
            <span className="text-brand-yellow">Top Brands Syria</span>
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-200 leading-relaxed max-w-4xl font-light">
            {t("contact_hero_desc_1")}
            <strong className="font-semibold text-brand-yellow">
              {t("contact_hero_desc_2")}
            </strong>
            {t("contact_hero_desc_3")}
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-brand-paleblue rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-teal">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-teal rounded-2xl mb-6">
                <i className="ri-phone-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-3">
                {t("contact_phone")}
              </h3>
              <a
                href="tel:+963116022"
                className="text-lg text-brand-charcoal hover:text-brand-teal transition-colors"
                dir="ltr"
              >
                +963 11 6022
              </a>
            </div>

            <div className="bg-brand-paleblue rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-coral">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-coral rounded-2xl mb-6">
                <i className="ri-mail-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-3">
                {t("email_us")}
              </h3>
              <a
                href="mailto:info@topbrands-sy.com"
                className="text-lg text-brand-charcoal hover:text-brand-coral transition-colors break-all"
              >
                info@topbrands-sy.com
              </a>
            </div>

            <div className="bg-brand-paleblue rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-teal">
              <div className="w-16 h-16 flex items-center justify-center bg-brand-teal rounded-2xl mb-6">
                <i className="ri-map-pin-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-jet mb-3">
                {t("contact_location")}
              </h3>
              <p className="text-lg text-brand-charcoal">
                {t("contact_damascus_syria")}
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-8 text-center">
              {t("our_location")}
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106494.46362736486!2d36.24806!3d33.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Top Brands Syria Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-paleblue rounded-3xl p-10 lg:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-jet mb-4">
                {t("contact_send_message_title")}
              </h2>
              <p className="text-xl text-brand-charcoal">
                {t("contact_fill_form_desc")}
              </p>
            </div>

            <form onSubmit={handleSubmit} data-readdy-form id="contact-form">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-brand-charcoal mb-2"
                  >
                    {t("contact_full_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white text-left rtl:text-right"
                    placeholder={t("your_full_name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-brand-charcoal mb-2"
                  >
                    {t("contact_email_address")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white text-left rtl:text-right"
                    placeholder={t("your_email")}
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-brand-charcoal mb-2"
                  >
                    {t("contact_phone_number")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white text-left"
                    placeholder={t("your_phone_placeholder")}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-brand-charcoal mb-2"
                  >
                    {t("contact_company_name")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white text-left rtl:text-right"
                    placeholder={t("your_company")}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-brand-charcoal mb-2"
                >
                  {t("subject")}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent bg-white text-left rtl:text-right"
                >
                  <option value="">{t("select_subject")}</option>
                  <option value="Distribution Partnership">
                    {t("dist_partnership")}
                  </option>
                  <option value="Brand Representation">{t("brand_rep")}</option>
                  <option value="General Inquiry">
                    {t("general_inquiry")}
                  </option>
                  <option value="Logistics & Importing">
                    {t("logistics_importing")}
                  </option>
                  <option value="Other">{t("other")}</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-brand-charcoal mb-2"
                >
                  {t("contact_message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={500}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent resize-none bg-white text-left rtl:text-right"
                  placeholder={t("message_placeholder")}
                ></textarea>
                <p className="text-xs text-brand-charcoal mt-2 flex justify-end rtl:justify-start">
                  {formData.message.length}/500 {t("characters")}
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-sm text-green-800 flex items-center rtl:flex-row-reverse rtl:justify-end">
                    <i className="ri-check-line text-xl mr-2 rtl:mr-0 rtl:ml-2"></i>
                    {t("thank_you_msg")}
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-sm text-red-800 flex items-center rtl:flex-row-reverse rtl:justify-end">
                    <i className="ri-error-warning-line text-xl mr-2 rtl:mr-0 rtl:ml-2"></i>
                    {t("error_msg")}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-coral text-white rounded-xl font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? t("sending") : t("contact_send_message_btn")}
              </button>
            </form>
          </div>
        </div>
      </section>


    </div>
  );
}
