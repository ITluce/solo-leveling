import { useMemo } from 'react';
import { generatePersonalizedWorkout } from '../utils/workoutGenerator';
import { useUserStore } from '../../../store/userStore';

export function useWorkoutGeneration(level: number) {
  const { height, weight } = useUserStore();
  
  return useMemo(() => 
    generatePersonalizedWorkout({ weight, height, level }),
    [weight, height, level]
  );
}