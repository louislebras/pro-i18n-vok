import type { I18NConfig } from "next/dist/server/config-shared";

export type Locale = (typeof i18n)["locales"][number];
export type LocaleParam = Locale | undefined;

export const i18n: I18NConfig = {
  locales: ["en", "fr"],
  defaultLocale: "en",
  localeDetection: false,
};

export const translationsBaseDir = "dictionaries";
