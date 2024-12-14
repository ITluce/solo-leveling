import React from 'react';
import { useTranslation } from 'react-i18next';
import { SystemBorder } from '../../theme/components/SystemBorder';

interface Achievement {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  progress: number;
  maxProgress: number;
}

interface AchievementsListProps {
  achievements: Achievement[];
}

export function AchievementsList({ achievements }: AchievementsListProps) {
  const { t } = useTranslation();

  return (
    <SystemBorder className="p-4">
      <h2 className="text-xl font-bold mb-4 system-text">{t('common.achievements')}</h2>
      
      <div className="space-y-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-4 rounded-lg ${
              achievement.completed ? 'bg-blue-900/20' : 'bg-gray-800/20'
            }`}
          >
            <h3 className="font-bold mb-1">{achievement.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{achievement.description}</p>
            
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 rounded-full h-2"
                style={{
                  width: `${(achievement.progress / achievement.maxProgress) * 100}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </SystemBorder>
  );
}