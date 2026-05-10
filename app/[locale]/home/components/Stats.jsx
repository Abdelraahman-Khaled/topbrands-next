"use client";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { Building2, ShoppingBag, MapPin, Truck } from "lucide-react";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import Counter from "../../components/Counter";

// Bars grow left-to-right to show upward trend — purely illustrative, no values implied
const trendBars = [
  [30, 45, 40, 60, 55, 75, 70, 90],
  [25, 40, 50, 45, 65, 60, 80, 95],
  [35, 50, 45, 65, 60, 75, 85, 80],
  [20, 35, 50, 45, 70, 65, 85, 95],
];

export default function Stats({ data }) {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (!data) return null;

  const title = data["Title"]?.value;
  const subtitle = data["Subtitle"]?.value;

  const statsList = [
    {
      value: data["Stat 1 Value"]?.value + "+" || "",
      label: data["Stat 1 Label"]?.value || "",
      icon: <Building2 size={28} strokeWidth={1.5} className="text-[#4B4F54]" />,
      accent: "#F7E326",
      iconBg: "bg-[#F7E326]",
    },
    {
      value: data["Stat 2 Value"]?.value + "+" || "",
      label: data["Stat 2 Label"]?.value || "",
      icon: <ShoppingBag size={28} strokeWidth={1.5} className="text-white" />,
      accent: "#ffffff",
      iconBg: "bg-[#4B4F54]",
    },
    {
      value: data["Stat 3 Value"]?.value || "",
      label: data["Stat 3 Label"]?.value || "",
      icon: <MapPin size={28} strokeWidth={1.5} className="text-[#4B4F54]" />,
      accent: "#F7E326",
      iconBg: "bg-[#F7E326]",
    },
    {
      value: data["Stat 4 Value"]?.value + "+" || "",
      label: data["Stat 4 Label"]?.value || "",
      icon: <Truck size={28} strokeWidth={1.5} className="text-white" />,
      accent: "#ffffff",
      iconBg: "bg-[#4B4F54]",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{ background: "linear-gradient(to right, #000 0%, #1a1a1a 50%, #000 100%)" }}
    >
      <div className="absolute top-20 left-[20%] w-64 h-64 bg-[#F7E326] opacity-20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-64 h-64 bg-[#F7E326] opacity-10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-lg sm:text-xl text-[#D1D5DB] max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsList.map((stat, index) => (
            <StaggerItem
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 ${stat.iconBg} shadow-lg`}>
                {stat.icon}
              </div>

              {/* Number + trend arrow */}
              <div className="flex items-start gap-2 mb-1">
                <div className="text-3xl md:text-[42px] font-bold text-white leading-none">
                  <Counter value={stat.value} />
                </div>
                {/* Upward trend arrow */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 shrink-0">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke={stat.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="text-sm md:text-base text-[#D1D5DB] font-medium mb-6">
                {stat.label}
              </div>

              {/* Upward trend sparkline — bars strictly increasing left to right */}
              <div className="mt-auto flex items-end gap-0.5 h-10">
                {trendBars[index].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ backgroundColor: stat.accent }}
                    initial={{ height: 0, opacity: 0 }}
                    animate={inView ? { height: `${h}%`, opacity: 0.2 + (i / trendBars[index].length) * 0.7 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 + i * 0.06, ease: "easeOut" }}
                  />
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
