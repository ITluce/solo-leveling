interface WorkoutParams {
  weight: number;
  height: number;
  level: number;
}

export function generatePersonalizedWorkout({ weight, height, level }: WorkoutParams) {
  const bmi = weight / ((height / 100) ** 2);
  const baseReps = Math.max(5, Math.floor(15 - (bmi - 22)));
  
  return {
    exercises: [
      {
        name: "Push-ups",
        sets: Math.min(5, Math.floor(level / 2)),
        reps: baseReps,
        completed: false
      },
      {
        name: "Squats",
        sets: Math.min(5, Math.floor(level / 2)),
        reps: baseReps + 5,
        completed: false
      },
      {
        name: "Plank",
        sets: 3,
        reps: 30 * Math.min(3, Math.floor(level / 3)), // seconds
        completed: false
      }
    ]
  };
}