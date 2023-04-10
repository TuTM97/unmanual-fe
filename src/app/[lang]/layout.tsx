import { AppConfig } from "@/utils/AppConfig";

// Root metadata
// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: "Unmanual",
  openGraph: {
    title: "Unmanual",
    description: "Unmanual is a...",
  },
};

// Root params
export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

interface IRootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  return (
    <html lang={params.lang || AppConfig.locale}>
      <body>{children}</body>
    </html>
  );
}
