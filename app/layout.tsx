import { i18n, type Locale } from "@/i18n-config";
import LocaleSwitcher from "@/components/locale-switcher";
import { getTranslation } from "@/utils/i18n";

export const metadata = {
  title: "i18n within app router - Vercel Examples",
  description: "How to do i18n in Next.js 15 within app router",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { children, params } = props;
  const { lang } = await params;

  const headerData = getTranslation(lang, "layouts", "header.json");

  return (
    <html lang={lang}>
      <body>
        <p>Current locale: {lang}</p>
        <LocaleSwitcher />
        {children}
      </body>
    </html>
  );
}
