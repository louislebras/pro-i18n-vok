import "server-only";
import path from "path";
import fs from "fs";
import { i18nConfig, translationsBaseDir } from "@/i18n-config";

const getJSONFile = (filePath: string) =>
  fs.readFileSync(filePath, { encoding: "utf-8" });

export const getTranslation = (
  locale: string = i18nConfig.defaultLocale,
  ...segments: string[]
) => {
  const slugIsLocale = i18nConfig.locales.includes(locale);
  const cleanLocale = slugIsLocale ? locale : i18nConfig.defaultLocale;

  const requestedDictionary = getJSONFile(
    path.join(process.cwd(), translationsBaseDir, cleanLocale, ...segments),
  );

  const jsonFile =
    requestedDictionary ??
    getJSONFile(
      path.join(
        process.cwd(),
        translationsBaseDir,
        i18nConfig.defaultLocale,
        ...segments,
      ),
    );

  return JSON.parse(jsonFile);
};
