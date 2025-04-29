import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import ShareButtons from '../components/ShareButtons';
import { episodes } from '../data/episodes';
import Button from '../components/Button';

const EpisodeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState(episodes.find(ep => ep.id === id));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Find the episode
    const currentEpisode = episodes.find(ep => ep.id === id);
    if (!currentEpisode) {
      navigate('/episodes', { replace: true });
      return;
    }
    
    setEpisode(currentEpisode);
    
    // Update document title
    document.title = `${currentEpisode.title} - Mtaanimation`;
    
    return () => {
      // Reset title when unmounting
      document.title = 'Mtaanimation';
    };
  }, [id, navigate]);
  
  if (!episode) {
    return null; // Should never reach here due to the navigate in useEffect
  }
  
  const formattedDate = new Date(episode.releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const shareUrl = window.location.href;
  
  // Get next and previous episodes
  const currentIndex = episodes.findIndex(ep => ep.id === id);
  const previousEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Video Player */}
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src={episode.videoUrl}
              title={episode.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Episode Info */}
          <div className="mt-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {episode.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>22 minutes</span>
              </div>
              
              <div className="ml-auto">
                <ShareButtons title={episode.title} url={shareUrl} />
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p>{episode.synopsis}</p>
            </div>
            
            {/* Navigation between episodes */}
            <div className="flex flex-wrap justify-between items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-6 mt-8">
              {previousEpisode ? (
                <Button
                  onClick={() => navigate(`/episodes/${previousEpisode.id}`)}
                  variant="outline"
                >
                  ← Previous Episode
                </Button>
              ) : (
                <div></div>
              )}
              
              {nextEpisode ? (
                <Button
                  onClick={() => navigate(`/episodes/${nextEpisode.id}`)}
                >
                  Next Episode →
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodeDetailPage;