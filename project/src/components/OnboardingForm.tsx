import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../store/userStore';

export function OnboardingForm() {
  const { t } = useTranslation();
  const setUserData = useUserStore((state) => state.setUserData);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData(Number(height), Number(weight));
  };

  return (
    <div className="system-border p-6 mx-4">
      <h2 className="system-text text-xl mb-4">{t('common.welcome')}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">{t('stats.height')}</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500 rounded p-2"
            placeholder="cm"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">{t('stats.weight')}</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500 rounded p-2"
            placeholder="kg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded system-border"
        >
          {t('common.start')}
        </button>
      </form>
    </div>
  );
}