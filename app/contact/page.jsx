"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"; // Added
import HeroSection from "../components/HeroSection";
import ScrollReveal from "../components/ScrollReveal";
import StaggerContainer from "../components/StaggerContainer";
import StaggerItem from "../components/StaggerItem";
import AnimatedCard from "../components/AnimatedCard";

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
  const [submitStatus, setSubmitStatus] = useState("idle");

  // Fixed: Added 'e' parameter
  const handleChange = (e) => {
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

      const response = await fetch("https://readdy.ai/api/form/d5v1ot5r44f5krorl03g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
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
      <HeroSection
        img="/images/contact/hero-img.jpg"
        title={t("contact_us_title")}
        yellowTitle={t("growing_together")}
        subtitle={t("contact_nav")}
        description1={t("contact_hero_desc_1")}
        yellowText={t("contact_hero_desc_2")}
        description2={t("contact_hero_desc_3")}
      />

      <ScrollReveal delay={0.1}>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8 lg:px-16">
            <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-20">
              {/* Phone Card */}
              <StaggerItem>
                <AnimatedCard className="bg-brand-paleblue rounded-3xl p-10 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6">
                    <i className="ri-phone-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t("contact_phone")}</h3>
                  <a href="tel:+963116022" className="text-lg text-brand-charcoal" dir="ltr">+963 11 6022</a>
                </AnimatedCard>
              </StaggerItem>

              {/* Email Card */}
              <StaggerItem>
                <AnimatedCard className="bg-brand-paleblue rounded-3xl p-10 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-brand-yellow rounded-2xl mb-6">
                    <i className="ri-mail-line text-3xl text-black"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t("email_us")}</h3>
                  <a href="mailto:info@topbrands-sy.com" className="text-lg text-brand-charcoal break-all">info@topbrands-sy.com</a>
                </AnimatedCard>
              </StaggerItem>

              {/* Location Card */}
              <StaggerItem>
                <AnimatedCard className="bg-brand-paleblue rounded-3xl p-10 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-brand-charcoal rounded-2xl mb-6">
                    <i className="ri-map-pin-line text-3xl text-white"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{t("contact_location")}</h3>
                  <p className="text-lg text-brand-charcoal">{t("contact_damascus_syria")}</p>
                </AnimatedCard>
              </StaggerItem>
            </StaggerContainer>

            {/* Form Section */}
            <div className="max-w-4xl mx-auto bg-brand-paleblue p-8 lg:p-12 rounded-[40px] shadow-sm">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t("contact_full_name")}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white"
                      placeholder={t("your_full_name")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t("contact_email_address")}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white"
                      placeholder={t("your_email")}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t("contact_phone_number")}</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white"
                      placeholder={t("your_phone_placeholder")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t("contact_company_name")}</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white"
                      placeholder={t("your_company")}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t("subject")}</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-black"
                  >
                    <option value="">{t("select_subject")}</option>
                    <option value="Partnership">{t("dist_partnership")}</option>
                    <option value="General">{t("general_inquiry")}</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-brand-charcoal mb-2">{t("contact_message")}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white resize-none"
                    placeholder={t("message_placeholder")}
                  ></textarea>
                  <p className="text-xs text-right mt-1">{formData.message.length}/500</p>
                </div>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200">
                    {t("thank_you_msg")}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-yellow text-black rounded-xl font-bold text-lg disabled:opacity-50"
                >
                  {isSubmitting ? t("sending") : t("contact_send_message_btn")}
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}