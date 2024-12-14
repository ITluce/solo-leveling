import React from 'react';
import type { Exercise } from '../../../types/system';

interface WorkoutCardProps {
  exercise: Exercise;
  onComplete: () => void;
}

export function WorkoutCard({ exercise, onComplete }: WorkoutCardProps) {
  return (
    <div className="quest-card p-4 rounded-lg">
      <h3 className="text-lg font-bold text-blue-400">{exercise.name}</h3>
      <p className="text-gray-300">
        {exercise.sets} sets × {exercise.reps} {exercise.name.toLowerCase() === 'plank' ? 'seconds' : 'reps'}
      </p>
      <button
        onClick={onComplete}
        className="mt-2 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        disabled={exercise.completed}
      >
        {exercise.completed ? 'Completed' : 'Mark Complete'}
      </button>
    </div>
  );
}