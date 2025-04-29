import React from 'react';
import PageHeader from '../components/PageHeader';
import CharacterCard from '../components/CharacterCard';
import { characters } from '../data/characters';

const CharactersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Characters" 
          subtitle="Meet the unique personalities that bring our animated world to life." 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-20">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;