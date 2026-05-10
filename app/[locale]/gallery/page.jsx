import HeroSection from "../components/HeroSection";
import GalleryGrid from "./components/GalleryGrid";
import GlobalCTA from "../components/GlobalCTA";


export default async function GalleryPage({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const heroData = {
    "Text Element 1": { value: isAr ? "معرض الصور" : "Retail Execution Gallery" },
    "Text Element 2": { value: isAr ? "لحظات تروي قصة نجاحنا" : "Moments That Tell Our Story" },
    "Text Element 3": {
      value: isAr
        ? "استعرض أبرز لحظاتنا وإنجازاتنا عبر الصور والفعاليات التي تعكس رحلتنا نحو التميز."
        : "Explore our highlights and milestones through images and events that reflect our journey toward excellence.",
    },
    image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection data={heroData} />
      <GalleryGrid locale={locale} />
      <GlobalCTA
        title={isAr ? "هل أنت مهتم بالشراكة معنا؟" : "Interested in Partnering With Us?"}
        subtitle={isAr ? "انضم إلى شبكتنا الواسعة من العلامات التجارية والشركاء وابدأ رحلة النجاح معنا." : "Join our growing network of brands and partners and start your journey toward success."}
        btnText={isAr ? "كن شريكاً" : "Become a Partner"}
        btnLink="/become-a-partner"
        contact={true}
        yellowtext={isAr ? "!" : "!"}
      />
    </div>
  );
}
