'use client';

import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "@/app/scss/app.scss";

import { Provider } from 'react-redux';

import type { Locales } from '@/i18n/config';
import { supportedLocales } from '@/i18n/config';
import { store } from '@/redux/store';
import { AppConfig } from '@/utils/AppConfig';
// Root metadata
// https://beta.nextjs.org/docs/api-reference/metadata
// export const metadata = {
//   title: 'Unmanual',
//   openGraph: {
//     title: 'Unmanual',
//     description: 'Unmanual is a...',
//   },
// };

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
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
