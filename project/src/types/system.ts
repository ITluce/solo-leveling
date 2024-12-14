export interface Stat {
  name: string;
  value: number;
  icon: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  experience: number;
  completed: boolean;
  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  completed: boolean;
}

export interface Player {
  level: number;
  experience: number;
  experienceToNextLevel: number;
  stats: Stat[];
  title: string;
  rank: string;
}