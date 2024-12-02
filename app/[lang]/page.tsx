import { Locale } from "@/i18n-config";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <div>
      <div>
        <p>This text is rendered on the server: </p>
      </div>
    </div>
  );
}
