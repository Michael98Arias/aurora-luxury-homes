'use client';

import { useTranslation } from 'react-i18next';
import '../i18n/i18n';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('home.welcome')}</h1>
      <button>{t('home.createProperty')}</button>
    </div>
  );
}
