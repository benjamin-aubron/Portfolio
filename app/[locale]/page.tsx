// app/[locale]/page.tsx
"use client"; // si vous utilisez useTranslations côté client
import { useTranslations } from 'next-intl';

export default function HomePage() {
  // On suppose que 'HomePage' est une clé dans les JSON de messages
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('helloWorld')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
