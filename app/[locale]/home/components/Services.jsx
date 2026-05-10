"use client";
import { useTranslation } from "react-i18next";
import { Truck, Boxes, Store, Megaphone } from "lucide-react";
import AnimatedCard from "../../components/AnimatedCard";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import LocalizedLink from "../../components/LocalizedLink";

export default function Services({ data, cta }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  if (!data) return null;

  const settings = data["settings"];
  const localizedTitle = settings?.[isAr ? "1" : "0"]?.value;
  const highlightTitle = localizedTitle || data["Text Element 2"]?.value;
  const headerTitle = data["Text Element 2"]?.value;
  const headerDesc = data["Text Element 3"]?.value;
  const badgeText = data["Text Element 1"]?.value;


  const servicesList = [
    {
      title: data["Text Element 4"]?.value || "Distribution",
      link: "Distribution",
      desc: data["Text Element 5"]?.value || "Efficient distribution network covering retail, wholesale, and key accounts across Syria.",
      icon: <Truck size={28} strokeWidth={1.5} className="text-white" />,
      iconBg: "bg-[#4B4F54]",
    },
    {
      title: data["Text Element 7"]?.value || "Logistics",
      link: "Logistics",
      desc: data["Text Element 8"]?.value || "Reliable warehousing and inventory management with real-time tracking systems.",
      icon: <Boxes size={28} strokeWidth={1.5} className="text-black" />,
      iconBg: "bg-[#F7E326]",
    },
    {
      title: data["Text Element 10"]?.value || "Merchandising",
      link: "Merchandising",
      desc: data["Text Element 11"]?.value || "Professional shelf management and visibility solutions to boost sales results.",
      icon: <Store size={28} strokeWidth={1.5} className="text-white" />,
      iconBg: "bg-[#4B4F54]",
    },
    {
      title: data["Text Element 13"]?.value || "Marketing Solutions",
      link: "Marketing",
      desc: data["Text Element 14"]?.value || "Dynamic marketing strategies to enhance brand awareness and market share.",
      icon: <Megaphone size={28} strokeWidth={1.5} className="text-black" />,
      iconBg: "bg-[#F7E326]",
    },
  ];


  const cta1 = cta["Text Element 1"]?.value
  const cta2 = cta["Text Element 2"]?.value
  const cta3 = cta["Text Element 3"]?.value

  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-30 relative overflow-hidden"
      style={{
        background: "rgba(247, 227, 38, 0.08) "
      }}
    >
      <div className="absolute top-0 left-0 w-125 h-125 bg-[#F7E326] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#F7E326] opacity-20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:mb-16">
            {badgeText && (
              <span className="px-5 py-2 bg-[#4B4F54] text-sm text-white rounded-full font-bold tracking-wider inline-block">
                {badgeText}
              </span>
            )}
            <div className="mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4 text-center">
                {headerTitle}
                <span className="text-[#4B4F54]">
                  {" "}{highlightTitle}
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-[20px] text-[#4B4F54] font-medium max-w-[800px] mx-auto text-center">
                {headerDesc}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <StaggerItem key={index}>
              <AnimatedCard
                className="group bg-white border-s-4 border-gray-200 hover:border-brand-yellow p-8 rounded-2xl h-full block hover:shadow-lg transition-all duration-500 ease-in-out relative overflow-hidden"
              >
                {/* Decorative number */}
                <span className="absolute top-4 inset-e-5 text-5xl font-black text-[#DEE3EB] select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={`icon-hover w-14 h-14 flex items-center justify-center rounded-xl mb-6 ${service.iconBg}`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-[#4B4F54] leading-relaxed mb-6">
                  {service.desc}
                </p>
                <LocalizedLink
                  href={`/services/${service.link.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-black font-bold group-hover:text-[#4B4F54]"
                >
                  {t("learn_more") || "Learn More"}
                  <svg
                    className={`${isAr ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"} transition-transform`}
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.26615 4.79303L4.61493 1.00382L5.57863 -4.44968e-05L10.8587 5.49998L5.57863 11L4.61493 9.99614L8.26615 6.20692H0V4.79303H8.26615Z"
                      fill="currentColor"
                    />
                  </svg>
                </LocalizedLink>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 sm:mt-16 flex-col bg-brand-jet rounded-2xl sm:rounded-4xl p-6 sm:p-8 md:p-12 flex justify-between items-center gap-8 text-center">
            <div className="text-white">
              <h3 className="text-2xl sm:text-[30px] font-bold mb-2">
                {cta1}
              </h3>
              <p className="text-lg sm:text-[20px] w-full text-white/80 max-w-xl mx-auto md:mx-0">
                {cta2}
              </p>
            </div>
            {cta3 && (
              <LocalizedLink
                href="/contact"
                className="mask-btn mask-btn--yellow-white"
              >
                <span className="mask-btn__label">{cta3}</span>
                <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                  {cta3}
                </span>
              </LocalizedLink>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
