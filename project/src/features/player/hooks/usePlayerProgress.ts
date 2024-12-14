import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { calculateDifficulty } from '../../workout/utils/workoutGenerator';

interface PlayerProgress {
  level: number;
  experience: number;
  experienceToNextLevel: number;
  dailyQuestsCompleted: number;
  lastQuestDate: string;
  incrementExperience: (amount: number) => void;
  completeDailyQuest: () => void;
}

const calculateExpToNextLevel = (level: number) => Math.floor(100 * Math.pow(1.2, level));

export const usePlayerProgress = create<PlayerProgress>()(
  persist(
    (set, get) => ({
      level: 1,
      experience: 0,
      experienceToNextLevel: calculateExpToNextLevel(1),
      dailyQuestsCompleted: 0,
      lastQuestDate: '',
      
      incrementExperience: (amount) => set((state) => {
        const newExp = state.experience + amount;
        if (newExp >= state.experienceToNextLevel) {
          const newLevel = state.level + 1;
          return {
            level: newLevel,
            experience: newExp - state.experienceToNextLevel,
            experienceToNextLevel: calculateExpToNextLevel(newLevel)
          };
        }
        return { experience: newExp };
      }),
      
      completeDailyQuest: () => set((state) => {
        const today = new Date().toDateString();
        if (state.lastQuestDate !== today) {
          return {
            dailyQuestsCompleted: state.dailyQuestsCompleted + 1,
            lastQuestDate: today
          };
        }
        return state;
      })
    }),
    {
      name: 'player-progress'
    }
  )
);