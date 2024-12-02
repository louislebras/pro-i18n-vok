import "server-only";
import type { Locale } from "@/i18n-config";
import path from "path";
import fs from "fs";
import { i18n, translationsBaseDir } from "@/i18n-config";

const getJSONFile = (filePath: string) =>
  fs.readFileSync(filePath, { encoding: "utf-8" });

export const getTranslation = (
  locale: Locale = i18n.defaultLocale,
  ...segments: string[]
) => {
  const slugIsLocale = i18n.locales.includes(locale);
  const cleanLocale = slugIsLocale ? locale : i18n.defaultLocale;

  const requestedDictionary = getJSONFile(
    path.join(process.cwd(), translationsBaseDir, cleanLocale, ...segments),
  );

  const jsonFile =
    requestedDictionary ??
    getJSONFile(
      path.join(
        process.cwd(),
        translationsBaseDir,
        i18n.defaultLocale,
        ...segments,
      ),
    );

  return JSON.parse(jsonFile);
};
