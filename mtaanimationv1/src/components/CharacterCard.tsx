import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={character.image} 
          alt={character.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {character.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {character.description}
        </p>
      </div>
      
      <div className="absolute inset-0 flex items-end justify-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-full text-center bg-gradient-to-r from-amber-600 to-red-500 text-white py-2 px-4 rounded-md">
          View Character
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;