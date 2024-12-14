import React from 'react';
import { OnboardingForm } from './components/OnboardingForm';
import { MainLayout } from './layouts/MainLayout';
import { useUserStore } from './store/userStore';
import { useLocalization } from './features/i18n/hooks/useLocalization';
import { useNotifications } from './features/notifications/hooks/useNotifications';

function App() {
  const { height, weight } = useUserStore();
  useLocalization();
  useNotifications();

  if (!height || !weight) {
    return <OnboardingForm />;
  }

  return <MainLayout />;
}

export default App;