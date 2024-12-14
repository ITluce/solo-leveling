import React from 'react';
import type { Quest } from '../types/system';

interface QuestListProps {
  quests: Quest[];
  onCompleteQuest: (questId: string) => void;
}

export function QuestList({ quests, onCompleteQuest }: QuestListProps) {
  return (
    <div className="space-y-4">
      {quests.map((quest) => (
        <div
          key={quest.id}
          className={`bg-gray-800 p-4 rounded-lg border-2 ${
            quest.completed ? 'border-green-500' : 'border-blue-500'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-2">{quest.title}</h3>
          <p className="text-gray-400 mb-4">{quest.description}</p>
          
          <div className="space-y-2">
            {quest.exercises.map((exercise, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-300">
                <input
                  type="checkbox"
                  checked={exercise.completed}
                  onChange={() => {}}
                  className="w-4 h-4 accent-blue-500"
                />
                <span>{exercise.name} - {exercise.sets}x{exercise.reps}</span>
              </div>
            ))}
          </div>
          
          {!quest.completed && (
            <button
              onClick={() => onCompleteQuest(quest.id)}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Complete Quest
            </button>
          )}
          
          <div className="mt-2 text-blue-400">
            Experience: +{quest.experience} EXP
          </div>
        </div>
      ))}
    </div>
  );
}