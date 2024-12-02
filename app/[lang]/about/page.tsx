import type { Metadata } from "next";
import type { LocaleParam } from "@/i18n-config";
import { getTranslation } from "@/utils/i18n";

type PageProps = {
  params: Promise<{ lang: LocaleParam }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const pageMetadata = getTranslation(lang, "pages", "about", "_metadata.json");

  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const contentData = getTranslation(
    lang,
    "pages",
    "about",
    "content-data.json",
  );

  return (
    <main>
      <h1>{contentData.title}</h1>
    </main>
  );
}
