import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, X} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-red-400 text-transparent bg-clip-text">
                Mtaanimation
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating captivating animated stories that inspire Imagination, Motion, Art and Endless creativity in viewers of all ages.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/mtaanimation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://x.com/mtaanimation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <X className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com/@mtaanimation0" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://facebook.com/mtaanimation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://tiktok.com/@mtaanimation" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M448,209.9v125.7c0,97.2-78.8,176-176,176s-176-78.8-176-176c0-74.3,47.2-137.5,113-163.7V368c0,30.9,25.1,56,56,56s56-25.1,56-56V0h63.9c5.3,52.5,45.5,94.4,96.1,101.9V209.9z"/>
                </svg>
                <span className="sr-only">TikTok</span>
              </a>

            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/episodes" className="text-gray-300 hover:text-white transition-colors">Episodes</Link>
              </li>
              <li>
                <Link to="/characters" className="text-gray-300 hover:text-white transition-colors">Characters</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: info@mtaanimation.com
              </li>
              <li>
                <Link to="/contact" className="text-amber-400 hover:text-amber-300 transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-gray-400 text-sm text-center">
            &copy; {currentYear} Mtaanimation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;