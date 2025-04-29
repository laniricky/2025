import React from 'react';
import { Share2, Facebook, Twitter, Link } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, '_blank');
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };
  
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center mb-2">
        <Share2 className="w-4 h-4 mr-1" /> Share
      </span>
      <div className="flex space-x-2">
        <button 
          onClick={shareToFacebook}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5 text-red-600 dark:text-red-400" />
        </button>
        
        <button 
          onClick={shareToTwitter}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5 text-red-400" />
        </button>
        
        <button 
          onClick={copyToClipboard}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors"
          aria-label="Copy link"
        >
          <Link className="w-5 h-5 text-amber-600 dark:text-amber-400" />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;