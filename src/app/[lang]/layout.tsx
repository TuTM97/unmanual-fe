import type { Locales } from '@/i18n/config';
import { supportedLocales } from '@/i18n/config';
import { AppConfig } from '@/utils/AppConfig';

// Root metadata
// https://beta.nextjs.org/docs/api-reference/metadata
export const metadata = {
  title: 'Unmanual',
  openGraph: {
    title: 'Unmanual',
    description: 'Unmanual is a...',
  },
};

// Root params
export async function generateStaticParams() {
  const localeParams = supportedLocales.map((locale: Locales) => {
    return {
      lang: locale,
    };
  });
  return localeParams;
}

interface IRootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: Locales;
  };
}

export default function RootLayout({ children, params }: IRootLayoutProps) {
  return (
    <html lang={params.lang || AppConfig.locale}>
      <body>{children}</body>
    </html>
  );
}
