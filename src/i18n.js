import { createI18n } from "vue-i18n";
import lang from "./locales/lang.json";

const messages = lang;

const i18n = createI18n({
  locale: "ru", 
  fallbackLocale: "ru", 
  messages,
});

export default i18n;
