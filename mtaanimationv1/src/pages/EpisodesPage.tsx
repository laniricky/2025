import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import EpisodeCard from '../components/EpisodeCard';
import { episodes } from '../data/episodes';

const EpisodesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEpisodes = episodes.filter(episode => 
    episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    episode.synopsis.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="Episodes" 
          subtitle="Watch all our animated episodes from the very beginning of our journey." 
        />
        
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search episodes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20">
          {filteredEpisodes.length > 0 ? (
            filteredEpisodes.map(episode => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
                No episodes found matching "{searchTerm}"
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Try adjusting your search term or browse all episodes.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodesPage;