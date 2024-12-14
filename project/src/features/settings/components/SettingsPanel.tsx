import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUserStore } from '../../../store/userStore';
import { SystemBorder } from '../../theme/components/SystemBorder';

export function SettingsPanel() {
  const { t, i18n } = useTranslation();
  const { setLanguage, language } = useUserStore();

  return (
    <SystemBorder className="p-4">
      <h2 className="text-xl font-bold mb-4 system-text">{t('common.settings')}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-2">{t('common.language')}</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full bg-gray-800 border border-blue-500 rounded p-2"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm mb-2">{t('common.notifications')}</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={true}
              onChange={() => {}}
            />
            <span>{t('common.enableNotifications')}</span>
          </div>
        </div>
      </div>
    </SystemBorder>
  );
}