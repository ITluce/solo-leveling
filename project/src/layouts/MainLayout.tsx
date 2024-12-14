import React from 'react';
import { Stats } from '../components/Stats';
import { QuestList } from '../components/QuestList';
import { LevelProgress } from '../components/LevelProgress';
import { useWorkoutGeneration } from '../features/workout/hooks/useWorkoutGeneration';

export function MainLayout() {
  // Mock data - in a real app, this would come from a store or API
  const playerLevel = 1;
  const workout = useWorkoutGeneration(playerLevel);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <LevelProgress
        level={playerLevel}
        experience={50}
        experienceToNextLevel={100}
        title="Novice Hunter"
        rank="E"
      />
      <Stats
        stats={[
          { name: 'Strength', value: 10, icon: 'sword' },
          { name: 'Endurance', value: 8, icon: 'heart' },
          { name: 'Defense', value: 7, icon: 'shield' },
          { name: 'Agility', value: 9, icon: 'zap' },
        ]}
      />
      <QuestList
        quests={[
          {
            id: '1',
            title: 'Daily Training',
            description: 'Complete today\'s workout to grow stronger',
            experience: 50,
            completed: false,
            exercises: workout.exercises,
          },
        ]}
        onCompleteQuest={() => {}}
      />
    </div>
  );
}