import React from 'react';

interface LevelProgressProps {
  level: number;
  experience: number;
  experienceToNextLevel: number;
  title: string;
  rank: string;
}

export function LevelProgress({
  level,
  experience,
  experienceToNextLevel,
  title,
  rank,
}: LevelProgressProps) {
  const progress = (experience / experienceToNextLevel) * 100;

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Level {level}</h2>
          <p className="text-blue-400">{title}</p>
          <p className="text-sm text-gray-400">Rank: {rank}</p>
        </div>
        <div className="text-right">
          <p className="text-white">{experience} / {experienceToNextLevel} EXP</p>
        </div>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-blue-600 rounded-full h-4 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}