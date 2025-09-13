import ar from '~/i18n/locales/ar.json';
import en from '~/i18n/locales/en.json';
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',

  messages: {
    en,
    ar,
  },
}));
