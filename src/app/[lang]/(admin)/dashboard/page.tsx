import type { Locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/config';

interface IDashboardPageProps {
  params: {
    lang: Locales;
  };
}

export default async function DashboardPage({ params }: IDashboardPageProps) {
  const { lang } = params;
  const translate = await getDictionary(lang); // en

  return <p>Dashboard 2 {translate.alerts}</p>;
}
