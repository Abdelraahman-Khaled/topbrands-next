"use client";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Boxes, UserCheck, Zap } from "lucide-react";
import AnimatedCard from "../../components/AnimatedCard";

export default function WhyChooseUs({ data }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  if (!data) return null;

  const headerTitle = data["Stat Element 1"]?.value;
  const headerSubtitle = data["Stat Element 2"]?.value;

  const services = [
    {
      title: data["Stat Element 3"]?.value || "Nationwide Distribution",
      desc: data["Stat Element 4"]?.value || "Efficient distribution network covering retail, wholesale, and key accounts across Syria.",
      icon: <Globe size={26} strokeWidth={1.5} className="text-black" />,
      iconBg: "bg-[#F7E326]",
    },
    {
      title: data["Stat Element 5"]?.value || "Advanced Logistics",
      desc: data["Stat Element 6"]?.value || "Reliable warehousing and inventory management with real-time tracking systems.",
      icon: <Boxes size={26} strokeWidth={1.5} className="text-black" />,
      iconBg: "bg-[#F7E326]",
    },
    {
      title: data["Stat Element 7"]?.value || "Experienced Sales Force",
      desc: data["Stat Element 8"]?.value || "Dedicated sales professionals providing expert market guidance and support.",
      icon: <UserCheck size={26} strokeWidth={1.5} className="text-black" />,
      iconBg: "bg-[#F7E326]",
    },
    {
      title: data["Stat Element 9"]?.value || "Flexibility & Competitiveness",
      desc: data["Stat Element 10"]?.value || "Providing tailored solutions and competitive pricing to meet your business needs.",
      icon: <Zap size={26} strokeWidth={1.5} className="text-black" />,
      iconBg: "bg-[#F7E326]",
    },
  ];

  return (
    <section ref={ref} id="why-choose-us" className="py-16 sm:py-24 lg:py-30 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-[70%] sm:left-[88%] w-100 sm:w-172.5 h-full bg-[#DEE3EB] rounded-full opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-1 mb-10 sm:mb-16">
          <div className="mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
              {headerTitle}
            </h2>
            <p className="text-lg sm:text-xl text-[#4B4F54] font-medium max-w-200 mx-auto">
              {headerSubtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              className="group card-hover relative rounded-2xl p-3 sm:p-4 sm:pr-10 rtl:sm:pr-4 rtl:sm:pl-10 h-full flex flex-col border border-transparent
               sm:after:content-[''] sm:after:absolute sm:after:right-0 rtl:sm:after:right-auto rtl:sm:after:left-0 sm:after:top-1/3 sm:after:-translate-y-1/2
               sm:after:w-px sm:after:h-[40%] sm:after:bg-[#4B4F54]/20 sm:last:after:hidden"
            >
              <svg className="trace-border-svg"><rect className="trace-border-rect" x="1" y="1" width="calc(100% - 2px)" height="calc(100% - 2px)" rx="12" fill="none" stroke="#F7E326" strokeWidth="2" strokeDasharray="2000" strokeDashoffset="2000" /></svg>

              {/* Numbered badge */}
              <div className="absolute top-4 inset-e-4 text-3xl font-black text-[#DEE3EB] select-none leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className={`icon-hover w-14 h-14 flex items-center justify-center rounded-xl mb-6 shadow-sm ${service.iconBg}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-base text-[#4B4F54] leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Animated accent line reveal */}
              <div className="mt-auto pt-4 border-t border-[#DEE3EB]">
                <motion.div
                  className="h-0.5 bg-[#F7E326] rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : {}}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 + index * 0.15 }}
                />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
