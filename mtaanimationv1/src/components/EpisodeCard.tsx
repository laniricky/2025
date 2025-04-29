import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Episode } from '../types';

interface EpisodeCardProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => {
  const formattedDate = new Date(episode.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={episode.thumbnail} 
          alt={episode.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        
        <Link 
          to={`/episodes/${episode.id}`}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="rounded-full bg-amber-600/90 p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500">
            <Play className="h-8 w-8 text-white" fill="white" />
          </div>
        </Link>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {episode.title}
          </h3>
          <span className="text-xs font-medium px-2 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300">
            {formattedDate}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
          {episode.synopsis}
        </p>
        
        <Link 
          to={`/episodes/${episode.id}`}
          className="mt-3 inline-block text-sm font-medium text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
        >
          Watch Episode
        </Link>
      </div>
    </div>
  );
};

export default EpisodeCard;