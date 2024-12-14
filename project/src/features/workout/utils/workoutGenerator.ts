import type { Exercise } from '../../../types/system';

interface WorkoutDifficulty {
  multiplier: number;
  title: string;
}

const DIFFICULTIES: Record<string, WorkoutDifficulty> = {
  BEGINNER: { multiplier: 1, title: 'E-Rank Hunter' },
  INTERMEDIATE: { multiplier: 1.5, title: 'D-Rank Hunter' },
  ADVANCED: { multiplier: 2, title: 'C-Rank Hunter' },
  EXPERT: { multiplier: 2.5, title: 'B-Rank Hunter' },
  MASTER: { multiplier: 3, title: 'A-Rank Hunter' },
  SOVEREIGN: { multiplier: 4, title: 'S-Rank Hunter' }
};

export function calculateDifficulty(level: number): WorkoutDifficulty {
  if (level >= 50) return DIFFICULTIES.SOVEREIGN;
  if (level >= 40) return DIFFICULTIES.MASTER;
  if (level >= 30) return DIFFICULTIES.EXPERT;
  if (level >= 20) return DIFFICULTIES.ADVANCED;
  if (level >= 10) return DIFFICULTIES.INTERMEDIATE;
  return DIFFICULTIES.BEGINNER;
}

export function generateExercises(level: number, bmi: number): Exercise[] {
  const difficulty = calculateDifficulty(level);
  const baseReps = Math.max(5, Math.floor(15 - (bmi - 22)));
  
  return [
    {
      name: "Shadow Strikes",
      sets: Math.ceil(3 * difficulty.multiplier),
      reps: Math.ceil(baseReps * difficulty.multiplier),
      completed: false
    },
    {
      name: "Hunter's Squats",
      sets: Math.ceil(3 * difficulty.multiplier),
      reps: Math.ceil((baseReps + 2) * difficulty.multiplier),
      completed: false
    },
    {
      name: "Mana Core Plank",
      sets: 3,
      reps: Math.ceil(30 * difficulty.multiplier), // seconds
      completed: false
    },
    {
      name: "Arise Push-ups",
      sets: Math.ceil(2 * difficulty.multiplier),
      reps: Math.ceil(baseReps * difficulty.multiplier),
      completed: false
    }
  ];
}