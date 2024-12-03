import type { Metadata } from "next";
import { getTranslation } from "@/utils/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const pageMetadata = getTranslation(
    locale,
    "pages",
    "about",
    "_metadata.json",
  );

  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const contentData = getTranslation(
    locale,
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
