import i18n from "i18next";
import { initReactI18next } from "next-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import messages from "./local/index";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

// Set initial direction
const currentLang = i18n.language || "en";
document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = currentLang;

export default i18n;
