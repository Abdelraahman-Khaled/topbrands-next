"use client";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation()
  const contactInfo = [
    {
      icon: "ri-phone-line",
      title: t("phone"),
      details: "+963 11 123 4567",
      link: "tel:+963111234567",
      gradient: "from-[#4B4F54] to-[#4B4F54]",
      iconBg: "bg-gradient-to-br from-[#4B4F54] to-[#4B4F54]",
    },
    {
      icon: "ri-mail-line",
      title: t("email"),
      details: "info@topbrandssyria.com",
      link: "mailto:info@topbrandssyria.com",
      gradient: "from-[#4B4F54] to-[#4B4F54]",
      iconBg: "bg-gradient-to-br from-[#F7E326] to-[#E5D324]",
    },
    {
      icon: "ri-map-pin-line",
      title: t("location"),
      details: t("damascus_syria"),
      link: "#",
      gradient: "from-[#4B4F54] to-[#4B4F54]",
      iconBg: "bg-gradient-to-br from-[#4B4F54] to-[#4B4F54]",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#F7E326]/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#F7E326]/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-[#F7E326] text-black rounded-full text-sm font-bold  tracking-wider">
              {t("get_in_touch")}
            </span>
          </div>
          <h2 className="text-5xl font-bold text-[#000000] mb-4">
            {t("contact")}{" "}
            <span className="text-[#4B4F54]">{t("hero_title")}</span>
          </h2>
          <p className="text-xl text-[#4B4F54] max-w-3xl mx-auto font-medium">
            {t("contact_header_desc")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#4B4F54] cursor-pointer"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center ${info.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}
              >
                <i
                  className={`${info.icon} ${info.title === t("email") ? "text-[#000000]" : "text-white"} text-3xl`}
                ></i>
              </div>
              <h3 className="text-xl font-bold text-[#000000] mb-2 text-center">
                {info.title}
              </h3>
              <p
                className={`text-transparent bg-clip-text bg-gradient-to-r ${info.gradient} font-bold text-center`}
              >
                {info.details}
              </p>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#000000] to-[#1a1a1a] rounded-2xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#F7E326] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F7E326] rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">
                {t("send_us_message")}
              </h3>
              <p className="text-gray-300 font-medium">{t("fill_form_desc")}</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-bold mb-2">
                  {t("name_required")}
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-[#F7E326] focus:bg-white/20 outline-none transition-all font-medium"
                  placeholder={t("your_name_placeholder")}
                />
              </div>

              <div>
                <label className="block text-white font-bold mb-2">
                  {t("email_required")}
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-[#F7E326] focus:bg-white/20 outline-none transition-all font-medium"
                  placeholder={t("your_email_placeholder")}
                />
              </div>

              <div>
                <label className="block text-white font-bold mb-2">
                  {t("phone_number")}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-[#F7E326] focus:bg-white/20 outline-none transition-all font-medium"
                  placeholder="+963 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-white font-bold mb-2">
                  {t("company_name")}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-[#F7E326] focus:bg-white/20 outline-none transition-all font-medium"
                  placeholder={t("your_company_placeholder")}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-white font-bold mb-2">
                  {t("message_required")}
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-gray-400 focus:border-[#F7E326] focus:bg-white/20 outline-none transition-all resize-none font-medium"
                  placeholder={t("tell_us_distribution_placeholder")}
                ></textarea>
              </div>

              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#F7E326] to-[#E5D324] text-[#000000] rounded-lg font-bold hover:shadow-xl transition-all hover:-translate-y-1 whitespace-nowrap cursor-pointer"
                >
                  {t("send_message")}
                  <i className="ri-send-plane-fill rtl:-rotate-90"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
