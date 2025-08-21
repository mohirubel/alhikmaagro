import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n.use(HttpBackend).use(LanguageDetector).use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  },
  detection: {
      order: ["localStorage", "navigator"], // check localStorage first
      caches: ["localStorage"],            // save to localStorage
  },
  backend: {
      loadPath: "/locales/{{lng}}/translation.json" // 👈 path to files
    }
});

export default i18n;