"use client";
import { useTranslation } from "react-i18next";
import { ShieldCheck, MapPin, Store, Package } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import StaggerContainer from "../../components/StaggerContainer";
import StaggerItem from "../../components/StaggerItem";
import LocalizedLink from "../../components/LocalizedLink";

export default function About({ data }) {
  const { t } = useTranslation();

  if (!data) return null;

  const title = data["Text Element 1"]?.value;
  const badgeText = data["Text Element 2"]?.value;
  const description1 = data["Text Element 3"]?.value;
  const description2 = data["Text Element 4"]?.value;

  const feature1Title = data["Text Element 5"]?.value;
  const feature1Desc = data["Text Element 6"]?.value;
  const feature2Title = data["Text Element 7"]?.value;
  const feature2Desc = data["Text Element 8"]?.value;
  const feature3Title = data["Text Element 9"]?.value;
  const feature3Desc = data["Text Element 10"]?.value;
  const feature4Title = data["Text Element 11"]?.value;
  const feature4Desc = data["Text Element 12"]?.value;

  const buttonText = data["Text Element 13"]?.value;
  const imageUrl = data.image_url;

  return (
    <section
      id="about"
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, rgba(222,227,235,0.21) 50%, #ffffff 100%)" }}
    >
      <div className="absolute top-20 right-10 w-100 h-100 bg-[#F7E326] opacity-25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-75 h-75 bg-[#F7E326] opacity-10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                {title}
              </h2>

              {badgeText && (
                <div className="inline-block mt-6">
                  <span className="px-5 py-2 bg-[#F1DD25] text-sm text-black rounded-full font-bold tracking-wider">
                    {badgeText}
                  </span>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6 mt-6">
                <p className="text-base sm:text-lg text-[#4B4F54] leading-relaxed">{description1}</p>
                <p className="text-base sm:text-lg text-[#4B4F54] leading-relaxed">{description2}</p>
              </div>
            </ScrollReveal>

            {/* Feature Cards Grid */}
            <StaggerContainer className="grid md:grid-cols-2 gap-4 pt-4">
              <StaggerItem className="border-2 border-brand-charcoal flex items-center gap-3 p-4.5 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-[#4B4F54] rounded-lg shrink-0 shadow-md">
                  <ShieldCheck size={22} strokeWidth={1.5} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base">{feature1Title}</h3>
                  <p className="text-sm text-[#4B4F54]">{feature1Desc}</p>
                </div>
              </StaggerItem>

              <StaggerItem className="border-2 border-brand-yellow flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F7E326] rounded-lg shrink-0 shadow-md">
                  <MapPin size={22} strokeWidth={1.5} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base">{feature2Title}</h3>
                  <p className="text-sm text-[#4B4F54]">{feature2Desc}</p>
                </div>
              </StaggerItem>

              <StaggerItem className="border-2 border-brand-yellow flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-[#F7E326] rounded-lg shrink-0 shadow-md">
                  <Store size={22} strokeWidth={1.5} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base">{feature3Title}</h3>
                  <p className="text-sm text-[#4B4F54]">{feature3Desc}</p>
                </div>
              </StaggerItem>

              <StaggerItem className="border-2 border-brand-charcoal flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center bg-[#4B4F54] rounded-lg shrink-0 shadow-md">
                  <Package size={22} strokeWidth={1.5} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-black text-base">{feature4Title}</h3>
                  <p className="text-sm text-[#4B4F54]">{feature4Desc}</p>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.1} className="pt-8">
              {buttonText && (
                <LocalizedLink href="/become-a-partner" className="mask-btn mask-btn--gray-black">
                  <span className="mask-btn__label">{buttonText}
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="white" xmlns="http://www.w3.org/2000/svg" className="mx-1.5 rtl:rotate-180">
                      <path d="M8.26615 4.79303L4.61493 1.00382L5.57863 -4.44968e-05L10.8587 5.49998L5.57863 11L4.61493 9.99614L8.26615 6.20692H0V4.79303H8.26615Z" fill="white" />
                    </svg>
                  </span>
                  <span className="mask-btn__fill" tabIndex={-1} aria-hidden="true">
                    {buttonText}
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="white" xmlns="http://www.w3.org/2000/svg" className="mx-1.5 rtl:rotate-180">
                      <path d="M8.26615 4.79303L4.61493 1.00382L5.57863 -4.44968e-05L10.8587 5.49998L5.57863 11L4.61493 9.99614L8.26615 6.20692H0V4.79303H8.26615Z" fill="white" />
                    </svg>
                  </span>
                </LocalizedLink>
              )}
            </ScrollReveal>
          </div>

          {/* Right Area (Image) */}
          <ScrollReveal delay={0.2} className="relative group h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full border border-white/20 aspect-4/5 bg-[#E5E7EB]">
              <div className="absolute inset-0 flex items-center justify-center h-full">
                {imageUrl && (
                  <img src={imageUrl} alt={title || "About Image"} className="w-full h-full object-cover" />
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
