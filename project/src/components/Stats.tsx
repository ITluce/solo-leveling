import React from 'react';
import { Heart, Sword, Shield, Zap } from 'lucide-react';
import type { Stat } from '../types/system';

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Strength': return <Sword className="w-5 h-5 text-red-500" />;
      case 'Endurance': return <Heart className="w-5 h-5 text-green-500" />;
      case 'Defense': return <Shield className="w-5 h-5 text-blue-500" />;
      case 'Agility': return <Zap className="w-5 h-5 text-yellow-500" />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-gray-800 p-4 rounded-lg flex items-center space-x-3">
          {getIcon(stat.name)}
          <div>
            <h3 className="text-blue-400 font-medium">{stat.name}</h3>
            <p className="text-white text-xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}