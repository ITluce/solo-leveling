import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../../../store/userStore';

export function useLocalization() {
  const { i18n } = useTranslation();
  const language = useUserStore((state) => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return { i18n };
}