import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"

i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).use(Backend).init({
    debug: true,
    lng: 'fr',
    fallbackLng: 'en'
})
