"use client";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { headlineRevealVariants, hoverCardVariants, tapButtonVariants } from "../../lib/animations";

export default function Hero() {
  const { t } = useTranslation()


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex flex-col h-full w-full">
        {/* Background photo block */}
        <div className="relative flex-1">
          <img
            src="/images/home/hero.jpg"
            alt="Distribution Excellence"
            className="w-full h-full"
          />
          {/* Overlay gradient over the image */}
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-black/30 to-black/40"></div>
        </div>
      </div>

      {/* Decorative Gradient overlays from Figma */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full z-0"
        style={{
          background:
            "linear-gradient(120deg, #4B4F54 0%, #000000 50%, #4B4F54 100%)",
        }}
      ></div>
      <div
        className="absolute top-0 right-[25%] z-0 w-[4px] h-full" // Adjust width and height as needed
        style={{
          background:
            "linear-gradient(135deg, #F7E32600 0%, #F7E32699 60%, #F7E32600 100%)",
          transform: "translateX(-50%) rotate(15deg)", // هنا الزاوية (rotate) عشان تخليه مايل
        }}
      ></div>
      {/* Content */}
      <div className="relative flex z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 sm:py-32 text-start w-full mt-8 sm:mt-12 md:mt-24 mb-12">
        <div className="space-y-6 sm:space-y-8 flex flex-col items-start w-full">
          {/* Badge */}
          <div className="inline-flex animate-fade-in mb-2 sm:mb-4">
            <span className="px-[14px] sm:px-[18px] py-[6px] sm:py-[8px] text-white rounded-full text-sm sm:text-base font-bold uppercase tracking-wider border border-2 border-[#FFFFFF66]">
              {t("years_group")}
            </span>
          </div>

          {/* Main Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            className="text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] font-bold text-white leading-tight"
          >
            <div className="overflow-hidden">
              <motion.span
                variants={headlineRevealVariants}
                className="block"
              >
                {t("hero_title")}
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                variants={headlineRevealVariants}
                transition={{ delay: 0.2 }}
                className="text-[#E5E7EB] text-5xl font-semibold block"
              >
                {t("hero_title_accent")}
              </motion.span>
            </div>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-[18px] md:text-[20px] text-[#F3F4F6] max-w-4xl leading-relaxed font-normal mt-6 sm:mt-8 color-[#F3F4F6]"
          >
            {t("hero_subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-start items-start sm:items-center pt-6 sm:pt-8"
          >
            {/* Become a Partner — Yellow → Black */}
            <motion.a
              whileTap={tapButtonVariants}
              href="/become-a-partner"
              className="mask-btn mask-btn--yellow-black "
            >
              <span className="mask-btn__label" >{t("become_partner")}</span>
              <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                {t("become_partner")}
              </span>
            </motion.a>

            {/* Contact — None → White */}
            <motion.a
              whileTap={tapButtonVariants}
              href="/contact"
              className="mask-btn mask-btn--none-white"
            >
              <span className="mask-btn__label ">{t("contact_syria")}</span>
              <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                {t("contact_syria")}
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center animate-bounce gap-2 pb-2 ">
        <span className="text-white text-base font-medium tracking-wide">
          {t("scroll_down")}
        </span>
        <a
          href="#about"
          className="cursor-pointer p-2 hover:opacity-80 transition-opacity"
        >
          {/* Extracted SVG from Figma */}
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4288 12.18L13.5744 6.8L14.9376 8.22L7.4688 16L0 8.22L1.3632 6.8L6.5088 12.18V0H8.4288V12.18Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
