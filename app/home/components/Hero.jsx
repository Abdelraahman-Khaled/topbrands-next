import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t } = useTranslation();

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
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30 to-black/40"></div>
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
            "linear-gradient(to 135deg, #F7E32600 0%, #F7E32699 60%, #F7E32600 100%)",
          transform: "translateX(-50%) rotate(15deg)", // هنا الزاوية (rotate) عشان تخليه مايل
        }}
      ></div>
      {/* Content */}
      <div className="relative flex z-10 max-w-7xl mx-auto px-6 py-32 text-start w-full mt-12 md:mt-24 mb-12">
        <div className="w-3/4"></div>
        <div className="space-y-8  flex flex-col items-start w-full">
          {/* Badge */}
          <div className="inline-flex animate-fade-in mb-4">
            <span className="px-[18px] py-[8px] text-white rounded-full text-base font-bold uppercase tracking-wider border border-2 border-[#FFFFFF66]">
              {t("years_market")}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[64px] md:text-[72px] font-bold text-white leading-tight animate-fade-in-up">
            {t("hero_title")}
            <br />
            <span className="text-[#E5E7EB] text-5xl font-semibold">
              {t("hero_title_accent")}
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-[18px] md:text-[20px] text-[#F3F4F6] max-w-4xl  leading-relaxed font-normal animate-fade-in-up mt-8 color-[#F3F4F6]"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero_subtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="/become-a-partner"
              className="px-[32px] py-[16px] bg-[#F7E326] text-black rounded-lg font-semibold text-base  transition-all whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              {t("become_partner")}
            </a>
            <a
              href="/contact"
              className="px-[34px] py-[18px] bg-transparent text-white border border-white rounded-lg font-semibold text-base hover:bg-white/10 transition-all whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              {t("contact_syria")}
            </a>
          </div>
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
