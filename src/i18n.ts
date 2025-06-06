import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is an example description."
    }
  },
  es: {
    translation: {
      welcome: "Bienvenido",
      description: "Esta es una descripción de ejemplo."
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue",
      description: "Ceci est une description exemple."
    }
  },
  de: {
    translation: {
      welcome: "Willkommen",
      description: "Dies ist eine Beispielbeschreibung."
    }
  },
  zh: {
    translation: {
      welcome: "欢迎",
      description: "这是一个示例描述。"
    }
  }
};

// Initialize i18n
i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('preferredLanguage') || 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
