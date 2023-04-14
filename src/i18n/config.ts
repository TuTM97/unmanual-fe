export enum Locales {
  'en' = 'en',
  'ar' = 'ar',
}

export const supportedLocales = [Locales.en, Locales.ar];

const dictionaries = {
  en: () =>
    import('./localization/en/translation.json').then(
      (module) => module.default
    ),
  ar: () =>
    import('./localization/ar/translation.json').then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale: Locales) => {
  return dictionaries[locale]();
};
