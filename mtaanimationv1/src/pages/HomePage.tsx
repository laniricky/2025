import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play } from 'lucide-react';
import { episodes } from '../data/episodes';
import { characters } from '../data/characters';
import { blogPosts } from '../data/blogPosts';
import EpisodeCard from '../components/EpisodeCard';
import CharacterCard from '../components/CharacterCard';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const [featuredEpisode] = useState(episodes.find(episode => episode.featured) || episodes[0]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Reset video playing state when navigating away
  useEffect(() => {
    return () => {
      setIsVideoPlaying(false);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <img 
            src={featuredEpisode.thumbnail}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        
        {isVideoPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-90 z-10">
            <button 
              className="absolute top-6 right-6 text-white bg-gray-800/50 rounded-full p-2 hover:bg-gray-700/70 transition-colors"
              onClick={() => setIsVideoPlaying(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="w-full max-w-4xl aspect-video">
              <iframe
                className="w-full h-full"
                src={`${featuredEpisode.videoUrl}?autoplay=1`}
                title={featuredEpisode.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ) : (
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Mtaanimation
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Immerse yourself in captivating animated stories that spark imagination and inspire creativity.
              </p>
              
              <div className="mb-12">
                <Button 
                  onClick={() => setIsVideoPlaying(true)}
                  size="lg"
                  className="group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Watch Featured Episode
                </Button>
              </div>
              
              <div className="mt-8">
                <div className="inline-flex items-center justify-center p-1 bg-gray-800/60 backdrop-blur rounded-lg">
                  <p className="px-3 text-sm">Now Streaming</p>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded text-sm font-medium">
                    {featuredEpisode.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      
      {/* Latest Episodes Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Episodes</h2>
            <Link 
              to="/episodes" 
              className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              View All
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {episodes.slice(0, 3).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Characters Preview Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet the Characters</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the unique personalities that bring our animated world to life through their adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {characters.slice(0, 4).map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/characters">
              <Button variant="outline">
                View All Characters
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Behind the Scenes</h2>
            <Link 
              to="/blog" 
              className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              Read All
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Watching?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Jump into the world of Mtaanimation and discover stories that will captivate your imagination.
          </p>
          <Link to="/episodes">
            <Button variant="secondary" size="lg">
              Start Watching
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;